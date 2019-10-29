import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonSkeletonText,
  IonMenuButton,
  IonPage,
  IonSlide,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";
import { Test } from "../model/Challenge";

interface ExercicePageProps
  extends RouteComponentProps<{
    category: string;
    challengeId: string;
  }> {}

const ExercicePage: React.FC<ExercicePageProps> = ({ match }) => {
  const [test, setTest] = useState<Test>();

  useEffect(() => {
    const category = data.challenges.find(e => e.id === match.params.category);
    if (category) {
      const test = category.tests.find(e => e.id === match.params.challengeId);
      setTest(test);
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
        {test ? (
          <>
            <IonItem color="primary">
              <IonLabel>{test.id}</IonLabel>
            </IonItem>
            <IonSlide>
              <p>{test.exercice.description}</p>
              <IonButton>Valider</IonButton>
            </IonSlide>
          </>
        ) : (
          <>
            <IonSkeletonText animated style={{ width: "60%" }} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ExercicePage;
