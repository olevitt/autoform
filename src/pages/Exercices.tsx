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
import React, { useEffect,useState } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";

interface ExercicesPageProps
  extends RouteComponentProps<{
    category: string;
    challengeId: string;
  }> {}

const ExercicesPage: React.FC<ExercicesPageProps> = ({ match }) => {
  const [exercices, setExercices] = useState();

  useEffect(() => {
    const exercices = data.challenges.filter(
      e => e.id === match.params.category
    ).map(e=> e.tests.filter(e=> e.id ===match.params.challengeId));
    if (exercices.length === 1) {
      setExercices(exercices[0]);
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
  {exercices ? <>{ListItems(match.params.category,match.params.challengeId)}</> : <>Loading ...</>}
      </IonContent>
    </IonPage>
  );
};

const ListItems = (category: string,idChallenge:string) => {
    const items = data.challenges.filter(e=>e.id === category).map(e=> e.tests.filter(e => e.id === idChallenge).map(e => e.exercices).map( exercice => {
    return (
      <IonItem
        routerLink={`/challenges/${category}/${idChallenge}/${exercice[0].id}`}
        button
        key={exercice[0].id}
        onClick={e => console.log(e)}
      >
        yes
      </IonItem>
    );
  }));

  return <IonList>{items}</IonList>;
};

export default ExercicesPage;
