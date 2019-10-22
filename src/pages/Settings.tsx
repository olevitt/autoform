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
  IonList,
  IonListHeader,
  IonChip,
  IonAvatar,
  IonIcon
} from "@ionic/react";

import React from "react";
import "./Home.css";
import dataProfile from "../data/profile.json";
import icongithub from "../assets/img/logo-github.svg";
import icongitlab from "../assets/img/logo-gitlab.svg";

const HomePage: React.FC = () => {
  const github = dataProfile.scm.github;
  const gitlab = dataProfile.scm.gitlab;

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

          <IonItem>
            <IonIcon icon={icongitlab}>Gitlab</IonIcon>
            <IonLabel>
              {"   "}
              {gitlab ? <a href={gitlab}>{gitlab}</a> : ""}
            </IonLabel>
            <IonToggle
              checked={github ? true : false}
              value="gitlab"
              onChange={() => {}}
            />
          </IonItem>

          <IonItem>
            <IonIcon icon={icongithub}>Github</IonIcon>
            <IonLabel>
              {"   "}
              {github ? <a href={github}>{github}</a> : ""}
            </IonLabel>
            <IonToggle
              checked={github ? true : false}
              value="github"
              onChange={() => {}}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
