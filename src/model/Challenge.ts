export interface Exercice {
  description: string;
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
