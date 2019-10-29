import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonChip,
  IonAvatar,
  IonIcon,
  IonButton
} from "@ionic/react";

import React from "react";
import "./Home.css";
import dataProfile from "../data/profile.json";
import icongithub from "../assets/img/logo-github.svg";
import icongitlab from "../assets/img/logo-gitlab.svg";
import { trash, addCircle } from "ionicons/icons";

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
            <IonChip>
              <IonAvatar>
                <img
                  alt="avatar"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+"
                />
              </IonAvatar>
              <IonLabel>{`${dataProfile.name} (${dataProfile.id})`}</IonLabel>
            </IonChip>
          </IonItem>

          <IonListHeader>
            <IonLabel>Sources</IonLabel>
          </IonListHeader>

          {dataProfile.scm.map((scm, index) => {
            return (
              <IonItem>
                <IonIcon
                  icon={scm.provider === "github" ? icongithub : icongitlab}
                ></IonIcon>
                <IonLabel>
                  <a href={scm.baseUrl}>
                    {scm.id} ({scm.baseUrl})
                  </a>
                </IonLabel>
                <IonButton color="danger">
                  <IonIcon slot="icon-only" icon={trash} />
                </IonButton>
              </IonItem>
            );
          })}
        </IonList>

        <IonButton color="primary" style={{ marginLeft: "20px" }}>
          <IonIcon slot="icon-only" icon={addCircle} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
