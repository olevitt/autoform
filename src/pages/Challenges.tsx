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
import dataChallenges from "../data/challenges.json";

const ChallengesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Challenges</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ListItems />
      </IonContent>
    </IonPage>
  );
};

const ListItems = () => {
  const icons = [gitBranch, cafe];
  const items = dataChallenges.challenges.map((challenge, i) => {
    return (
      <IonItem
        routerLink={`/challenges/${challenge.id}`}
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

export default ChallengesPage;
