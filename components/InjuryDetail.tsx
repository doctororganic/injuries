
import React, { useState } from 'react';
import { InjuryProtocol, Exercise } from '../types';
import { useLanguage } from './LanguageContext';
import { Pill, Activity, Leaf, Utensils, AlertCircle, Dumbbell, ShieldCheck } from 'lucide-react';

interface Props {
  data: InjuryProtocol;
  onAddToRoutine: (exercise: Exercise) => void;
}

const SectionTitle: React.FC<{ icon: any; title: string }> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400 border-b border-emerald-100 dark:border-emerald-900 pb-2">
    <Icon size={20} />
    <h3 className="text-xl font-bold">{title}</h3>
  </div>
);

export const InjuryDetail: React.FC<Props> = ({ data, onAddToRoutine }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'plan' | 'remedies' | 'workout'>('overview');

  const renderManagementPlan = () => {
    const plan = data.management_plan;
    if (plan.general) {
      return <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{t(plan.general)}</p>;
    }
    return (
      <div className="space-y-4">
        {plan.immediate_care && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800">
            <h4 className="font-bold text-emerald-800 dark:text-emerald-400 mb-2">{language === 'english' ? 'Immediate Care' : 'رعاية فورية'}</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              {t(plan.immediate_care).map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {plan.short_term_care && (
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
            <h4 className="font-bold text-teal-800 dark:text-teal-400 mb-2">{language === 'english' ? 'Short Term' : 'المدى القصير'}</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              {t(plan.short_term_care).map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
        {plan.long_term_care && (
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
            <h4 className="font-bold text-green-800 dark:text-green-400 mb-2">{language === 'english' ? 'Long Term' : 'المدى الطويل'}</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              {t(plan.long_term_care).map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full overflow-y-auto pr-2 custom-scrollbar pb-20">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-semibold uppercase tracking-wide mb-2">
          {data.category.toUpperCase()}
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">{t(data.title)}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">{t(data.description)}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6 overflow-x-auto">
        {(['overview', 'remedies', 'workout'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
              activeTab === tab
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            {tab === 'overview' && (language === 'english' ? 'Management' : 'الإدارة')}
            {tab === 'remedies' && (language === 'english' ? 'Supplements & Herbs' : 'مكملات وأعشاب')}
            {tab === 'workout' && (language === 'english' ? 'Exercises' : 'تمارين')}
          </button>
        ))}
      </div>

      <div className="animate-fade-in">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section>
              <SectionTitle icon={ShieldCheck} title={language === 'english' ? 'Management Plan' : 'خطة الإدارة'} />
              {renderManagementPlan()}
            </section>
            
            {data.rehabilitation_strategies && (
              <section>
                <SectionTitle icon={Activity} title={language === 'english' ? 'Rehab Strategies' : 'استراتيجيات التأهيل'} />
                <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
                  {Array.isArray(t(data.rehabilitation_strategies)) ? 
                    t(data.rehabilitation_strategies).map((s: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 bg-white dark:bg-slate-800 p-3 rounded shadow-sm border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="text-sm">{s}</span>
                      </li>
                    )) : <p className="text-slate-700 dark:text-slate-300">{t(data.rehabilitation_strategies)}</p>
                  }
                </ul>
              </section>
            )}

            {data.gym_tips && (
              <section>
                <SectionTitle icon={Dumbbell} title={language === 'english' ? 'Gym Tips' : 'نصائح الجيم'} />
                <div className="bg-slate-800 dark:bg-slate-900 text-slate-100 p-5 rounded-xl shadow-lg border border-slate-700">
                  <ul className="space-y-2">
                    {t(data.gym_tips).map((tip: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>
        )}

        {activeTab === 'remedies' && (
          <div className="space-y-8">
            {data.supplements.length > 0 && (
              <section>
                <SectionTitle icon={Pill} title={language === 'english' ? 'Supplements' : 'مكملات'} />
                <div className="grid gap-4 md:grid-cols-2">
                  {data.supplements.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">{t(item.name)}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-2 font-mono bg-slate-50 dark:bg-slate-700 inline-block px-2 py-0.5 rounded">{t(item.dose)}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{t(item.administration)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.plants_and_herbs && data.plants_and_herbs.length > 0 && (
              <section>
                <SectionTitle icon={Leaf} title={language === 'english' ? 'Plants & Herbs' : 'نباتات وأعشاب'} />
                <div className="grid gap-4 md:grid-cols-2">
                  {data.plants_and_herbs.map((item, i) => (
                    <div key={i} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                      <h4 className="font-bold text-green-900 dark:text-green-300">{t(item.name)}</h4>
                      <p className="text-sm text-green-800 dark:text-green-400 mt-1">{t(item.benefits)}</p>
                      {item.usage && <p className="text-xs text-green-700 dark:text-green-500 mt-2 italic">{t(item.usage)}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.recipes && data.recipes.length > 0 && (
              <section>
                <SectionTitle icon={Utensils} title={language === 'english' ? 'Recipes' : 'وصفات'} />
                <div className="space-y-4">
                  {data.recipes.map((item, i) => (
                    <div key={i} className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-800">
                      <h4 className="font-bold text-orange-900 dark:text-orange-300 mb-2">{t(item.name)}</h4>
                      <div className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                        <p><span className="font-semibold text-orange-800 dark:text-orange-400">{language === 'english' ? 'Ingredients:' : 'المكونات:'}</span> {t(item.ingredients)}</p>
                        <p><span className="font-semibold text-orange-800 dark:text-orange-400">{language === 'english' ? 'Prep:' : 'التحضير:'}</span> {t(item.preparation)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {activeTab === 'workout' && (
          <div className="space-y-8">
            {data.monthly_workout_plan?.map((phase, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-slate-50 dark:bg-slate-800 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <h4 className="font-bold text-slate-700 dark:text-slate-200">{phase.month}</h4>
                  <span className="text-xs font-medium px-2 py-1 bg-white dark:bg-slate-700 border dark:border-slate-600 rounded text-slate-500 dark:text-slate-300">{t(phase.focus)}</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                  {phase.exercises.map((ex, j) => (
                    <div key={j} className="p-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex justify-between items-start group">
                      <div>
                        <h5 className="font-bold text-slate-800 dark:text-slate-200">{t(ex.name)}</h5>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{ex.sets} sets × {ex.reps} reps</p>
                        {ex.notes && <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 italic">{t(ex.notes)}</p>}
                      </div>
                      <button 
                        onClick={() => onAddToRoutine(ex)}
                        className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full"
                        title={language === 'english' ? "Add to my routine" : "أضف لروتيني"}
                      >
                        <span className="text-xl">+</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {data.recovery_exercises && data.recovery_exercises.length > 0 && (
              <section>
                <SectionTitle icon={Activity} title={language === 'english' ? 'Recovery Exercises' : 'تمارين التعافي'} />
                <div className="grid gap-4">
                  {data.recovery_exercises.map((ex, i) => (
                    <div key={i} className="bg-emerald-50/50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800">
                      <div className="flex justify-between">
                        <h5 className="font-bold text-emerald-900 dark:text-emerald-300">{t(ex.name)}</h5>
                        <button 
                          onClick={() => onAddToRoutine(ex)}
                          className="text-emerald-400 hover:text-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-300"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t(ex.description)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
      
      <div className="mt-12 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
        <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
        <p>{t(data.disclaimer)}</p>
      </div>
    </div>
  );
};
