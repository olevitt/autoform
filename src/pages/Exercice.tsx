import React, { useState, useEffect } from "react";
import data from "../data/exercices.json";
import { RouteComponentProps } from "react-router-dom";

interface ExercicePageProps
  extends RouteComponentProps<{
    category: string;
  }> {}

const Exercice: React.FC<ExercicePageProps> = ({ match }) => {
  const [valide, setValide] = useState();
  const [exercice, setExercice] = useState();

  useEffect(() => {
    const exercice = data.exercices.filter(e => e.id === match.params.category);
    if (exercice.length === 1) {
      setExercice(exercice[0]);
    }
  }, [match]);

  return <IonPage><IonPage/>;
};

export default Exercice;
