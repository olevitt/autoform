import React, { useState, useEffect } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

interface ExercicePageProps
  extends RouteComponentProps<{
    category: string;
    exerciceId: string;
  }> {}

const Exercice: React.FC<ExercicePageProps> = ({ match }) => {
  const [valide, setValide] = useState();
  const [exercice, setExercice] = useState();

  useEffect(() => {
    const exercice = [
      {
        id: "creation-0",
        name: "Valider un exercice",
        description: "Ce tutoriel va vous apprendre a valider un exercice"
      }
    ];
    /* data.challenges
      .filter(e => e.id === match.params.category)
      .map(function(e) {
        return e.tests[parseInt(match.params.category)].exercices;
      })
      .filter(e => e.id === match.params.exerciceId); // potentiellement undefined, je sais pas trop comment faire
      */
    if (exercice.length === 1) {
      setExercice(exercice[0]);
    }
  }, [match]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{match.params.category}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {exercice ? <div>{exercice.name}</div> : <>Loading ...</>}
      </IonContent>
    </IonPage>
  );
};

export default Exercice;
