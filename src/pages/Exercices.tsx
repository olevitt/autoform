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
import { cafe, gitBranch } from "ionicons/icons";
import React from "react";
import data from "../data/challenges.json";

const ExercicesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Exercices</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ListItems />
      </IonContent>
    </IonPage>
  );
};

const ListItems = () => {
  const items = data.exercices.map((exercice, i) => {
    return (
      <IonItem
        routerLink={`/exercices/${exercice.id}`}
        button
        key={challenge.id}
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
