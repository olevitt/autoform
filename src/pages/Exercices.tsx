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
import React, { useState } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";

interface ExercicesPageProps
  extends RouteComponentProps<{
    category: string;
    challengeId: string;
  }> {}

const ExercicesPage: React.FC<ExercicesPageProps> = ({ match }) => {
  const [exercices, setExercices] = useState();

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
        {exercices ? ListItems(exercices) : <>Loading ...</>}
      </IonContent>
    </IonPage>
  );
};

const ListItems = exercices => {
    const items = exercices.map( exercice:any => {
    return (
      <IonItem
        routerLink={`/challenges/${challenge.id}/${x.id}`}
        button
        key={exercice.id}
        onClick={e => console.log(e)}
      >
        <IonIcon icon={icons[i]} slot="start" />
        {challenge.name}
        <div className="item-note" slot="end">
          0 / {challenge.tests.length}
        </div>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ExercicesPage;
