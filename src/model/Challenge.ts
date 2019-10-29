export interface Validation {
  goalText: string;
}

export interface Exercice {
  description: string;
  validation: Validation;
}

export interface Test {
  id: string;
  name: string;
  exercice: Exercice;
}

export interface Challenge {
  id: string;
  name: string;
  tests: Test[];
}
