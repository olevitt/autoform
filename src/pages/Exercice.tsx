import {
  IonButtons,
  IonContent,
  IonHeader,
  IonSkeletonText,
  IonIcon,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect,useState } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";

interface ExercicePageProps
  extends RouteComponentProps<{
    category: string;
    challengeId: string;
  }> {}

const ExercicePage: React.FC<ExercicePageProps> = ({ match }) => {
  const [exercice, setExercice] = useState();

  useEffect(() => {
    const exercice = data.challenges.filter(
      e => e.id === match.params.category
    ).map(e=> e.tests.filter(e=> e.id ===match.params.challengeId));
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
          <IonTitle>{match.params.challengeId}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
  {exercice ? <>{exercice.id}</> : <><IonSkeletonText animated style={{ width: '60%' }} /></>}
      </IonContent>
    </IonPage>
  );
};


export default ExercicePage;
