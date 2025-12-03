export type Language = 'english' | 'arabic';

export interface BilingualText {
  english: string;
  arabic: string;
}

export interface BilingualArray {
  english: string[];
  arabic: string[];
}

export interface StructuredPlan {
  immediate_care?: BilingualArray;
  short_term_care?: BilingualArray;
  long_term_care?: BilingualArray;
  general?: BilingualText;
}

export interface Supplement {
  name: BilingualText;
  dose: BilingualText;
  administration?: BilingualText;
  benefits?: BilingualText;
}

export interface Medication {
  name: BilingualText;
  dose: BilingualText;
  administration?: BilingualText;
  benefits?: BilingualText;
  cautions?: BilingualText;
}

export interface PlantHerb {
  name: BilingualText;
  benefits?: BilingualText;
  usage?: BilingualText;
  recipe?: BilingualText; // Merging recipe logic into usage or separate
}

export interface Recipe {
  name: BilingualText;
  ingredients: BilingualText;
  preparation: BilingualText;
  benefits?: BilingualText;
}

export interface Exercise {
  id: string; // Added for DnD
  name: BilingualText;
  sets?: string;
  reps?: string;
  notes?: BilingualText;
  description?: BilingualText;
  frequency?: BilingualText;
  benefits?: BilingualText;
}

export interface WorkoutPhase {
  month: string;
  focus: BilingualText;
  exercises: Exercise[];
}

export interface ProtocolReference {
  title: BilingualText;
  url: string;
}

export interface InjuryProtocol {
  id: string;
  category: 'lower' | 'upper' | 'spine' | 'fitness' | 'general';
  title: BilingualText;
  description: BilingualText;
  management_plan: StructuredPlan;
  supplements: Supplement[];
  medications: Medication[];
  plants_and_herbs: PlantHerb[];
  recipes: Recipe[];
  gym_tips: BilingualArray;
  monthly_workout_plan: WorkoutPhase[];
  recovery_exercises: Exercise[];
  rehabilitation_strategies: BilingualArray;
  references: ProtocolReference[];
  disclaimer: BilingualText;
}