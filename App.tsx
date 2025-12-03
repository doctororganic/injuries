
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { INJURY_DATA } from './data';
import { InjuryDetail } from './components/InjuryDetail';
import { Exercise, InjuryProtocol } from './types';
import { Activity, Menu, X, ChevronRight, ClipboardList, Trash2, Moon, Sun } from 'lucide-react';

const CATEGORIES = {
  lower: { en: 'Lower Body', ar: 'الجزء السفلي' },
  upper: { en: 'Upper Body', ar: 'الجزء العلوي' },
  spine: { en: 'Spine & Core', ar: 'العمود الفقري' },
  fitness: { en: 'Fitness Plans', ar: 'خطط اللياقة' },
  general: { en: 'General Care', ar: 'رعاية عامة' },
};

const AppContent: React.FC = () => {
  const { language, setLanguage, t, dir, isDarkMode, toggleTheme } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(INJURY_DATA[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [routineOpen, setRoutineOpen] = useState(false);
  const [myRoutine, setMyRoutine] = useState<Exercise[]>([]);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  const selectedData = INJURY_DATA.find(d => d.id === selectedId);

  const addToRoutine = (exercise: Exercise) => {
    if (!myRoutine.find(e => e.id === exercise.id)) {
      setMyRoutine([...myRoutine, exercise]);
      setRoutineOpen(true);
    }
  };

  const removeFromRoutine = (index: number) => {
    const newRoutine = [...myRoutine];
    newRoutine.splice(index, 1);
    setMyRoutine(newRoutine);
  };

  // Simple HTML5 Drag and Drop logic
  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItemIndex === null) return;
    if (draggedItemIndex !== index) {
      const newRoutine = [...myRoutine];
      const draggedItem = newRoutine[draggedItemIndex];
      newRoutine.splice(draggedItemIndex, 1);
      newRoutine.splice(index, 0, draggedItem);
      setMyRoutine(newRoutine);
      setDraggedItemIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggedItemIndex(null);
  };

  return (
    <div className={`flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-200 ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${dir === 'rtl' ? 'right-0 lg:right-auto border-l lg:border-r-0' : ''}
      `}>
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Activity className="text-emerald-400" />
            <span className="font-bold text-lg tracking-tight">PhysioFlex Pro</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-6">
          {(Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>).map(cat => {
            const items = INJURY_DATA.filter(d => d.category === cat);
            if (items.length === 0) return null;
            
            return (
              <div key={cat}>
                <h3 className="px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  {language === 'english' ? CATEGORIES[cat].en : CATEGORIES[cat].ar}
                </h3>
                <div className="space-y-1">
                  {items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedId(item.id);
                        if (window.innerWidth < 1024) setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between group ${
                        selectedId === item.id 
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      <span className="truncate">{t(item.title)}</span>
                      {selectedId === item.id && <ChevronRight size={14} className="opacity-50" />}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex-1">
            <button 
              onClick={() => setLanguage('english')}
              className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-all ${language === 'english' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('arabic')}
              className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-all ${language === 'arabic' ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              العربية
            </button>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-slate-950 relative transition-colors duration-200">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 bg-white dark:bg-slate-900 z-10 transition-colors duration-200">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white lg:hidden"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex-1" />

          <button 
            onClick={() => setRoutineOpen(!routineOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors border ${
              routineOpen 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-300 dark:hover:border-emerald-700'
            }`}
          >
            <ClipboardList size={18} />
            <span className="text-sm font-medium hidden sm:inline">{language === 'english' ? 'My Routine' : 'روتيني'}</span>
            {myRoutine.length > 0 && (
              <span className="bg-emerald-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {myRoutine.length}
              </span>
            )}
          </button>
        </header>

        <div className="flex-1 overflow-hidden relative flex">
          {/* Detail View */}
          <div className="flex-1 overflow-hidden p-4 lg:p-8">
            {selectedData ? (
              <InjuryDetail data={selectedData} onAddToRoutine={addToRoutine} />
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 dark:text-slate-600">
                <p>Select an item to view details</p>
              </div>
            )}
          </div>

          {/* Right Panel: My Routine */}
          <div className={`
            absolute top-0 right-0 bottom-0 w-80 bg-slate-50 dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out z-20 flex flex-col shadow-xl
            ${routineOpen ? 'translate-x-0' : 'translate-x-full'}
            ${dir === 'rtl' ? 'left-0 right-auto border-r border-l-0 -translate-x-full' : ''}
            ${dir === 'rtl' && routineOpen ? 'translate-x-0' : ''}
          `}>
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900">
              <h3 className="font-bold text-slate-800 dark:text-white">{language === 'english' ? 'My Daily Routine' : 'روتيني اليومي'}</h3>
              <button onClick={() => setRoutineOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X size={18} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {myRoutine.length === 0 ? (
                <div className="text-center py-10 text-slate-400 dark:text-slate-600">
                  <ClipboardList size={40} className="mx-auto mb-3 opacity-20" />
                  <p className="text-sm">{language === 'english' ? 'Your routine is empty.' : 'روتينك فارغ.'}</p>
                  <p className="text-xs mt-1">{language === 'english' ? 'Add exercises from the protocols.' : 'أضف تمارين من البروتوكولات.'}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-2 text-center">
                    {language === 'english' ? 'Drag to reorder' : 'اسحب لإعادة الترتيب'}
                  </p>
                  {myRoutine.map((ex, idx) => (
                    <div
                      key={`${ex.id}-${idx}`}
                      draggable
                      onDragStart={() => handleDragStart(idx)}
                      onDragOver={(e) => handleDragOver(e, idx)}
                      onDrop={handleDrop}
                      className={`bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 group cursor-move transition-all ${
                        draggedItemIndex === idx ? 'opacity-50 scale-95' : 'opacity-100'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 leading-tight">{t(ex.name)}</h4>
                        <button 
                          onClick={() => removeFromRoutine(idx)}
                          className="text-slate-300 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">{ex.sets || '3'} sets</span>
                        <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">{ex.reps || '10'} reps</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {myRoutine.length > 0 && (
              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <button 
                  onClick={() => window.print()}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-900/20"
                >
                  {language === 'english' ? 'Print Routine' : 'طباغة الروتين'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
