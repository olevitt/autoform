import React, { useState, useEffect } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";
import { IonPage } from "@ionic/react";

interface ExercicePageProps
  extends RouteComponentProps<{
    category: string;
    exerciceId: string;
  }> {}

const Exercice: React.FC<ExercicePageProps> = ({ match }) => {
  const [valide, setValide] = useState();
  const [exercice, setExercice] = useState();

  useEffect(() => {
    const exercice = data.challenges
      .filter(e => e.id === match.params.category)
      .map(function(e) {
        return e.tests[parseInt(match.params.category)].exercices;
      })
      .filter(e => e.id === match.params.exerciceId); // potentiellement undefined, je sais pas trop comment faire
    if (exercice.length === 1) {
      setExercice(exercice[0]);
    }
  }, [match]);

  return <IonPage />;
};

export default Exercice;
