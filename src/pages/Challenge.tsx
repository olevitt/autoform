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
import { trophy } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import data from "../data/challenges.json";

interface ChallengePageProps
  extends RouteComponentProps<{
    category: string;
  }> {}

const ChallengePage: React.FC<ChallengePageProps> = ({ match }) => {
  const [challenge, setChallenge] = useState();

  useEffect(() => {
    const challenge = data.challenges.filter(
      e => e.id === match.params.category
    );
    if (challenge.length === 1) {
      setChallenge(challenge[0]);
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
        {challenge ? (
          <IonList>
            {challenge.tests.map((x: any, i: any) => {
              return (
                <IonItem
                  routerLink={`/challenges/${challenge.id}/${x.id}`}
                  button
                  key={x.id}
                >
                  {x.name}
                  <IonIcon icon={trophy} slot="end" />
                </IonItem>
              );
            })}
          </IonList>
        ) : (
          <>Loading ...</>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ChallengePage;
