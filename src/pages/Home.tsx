import {
  IonButtons,
  IonContent,
  IonHeader,
  IonText,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
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
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText color="secondary">
          <h1>Hello world</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
