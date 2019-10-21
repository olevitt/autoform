import {
  IonButtons,
  IonToggle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList
} from "@ionic/react";

import React from "react";
import "./Home.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Gitlab</IonLabel>
            <IonToggle value="gitlab" onChange={() => {}} />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" onChange={() => {}} disabled={true} />
          </IonItem>

          <IonItem>
            <IonLabel>Mushrooms</IonLabel>
            <IonToggle value="mushrooms" onChange={() => {}} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
