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
  IonToolbar,
  IonText
} from "@ionic/react";
import { trophy } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import data from "../data/challenges.json";
import dataProfile from "../data/profile.json";

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
            {challenge.tests.map((test: any, i: any) => {
              return (
                <IonItem
                  routerLink={`/challenges/${challenge.id}/${test.id}`}
                  button
                  key={test.id}
                >
                  {test.name}
                  {dataProfile.challenges.hasOwnProperty(test.id) ? (
                    <IonText slot="end" color="success">
                      {dataProfile.challenges[test.id].completed}
                    </IonText>
                  ) : (
                    <></>
                  )}

                  <IonIcon
                    icon={trophy}
                    slot="end"
                    color={
                      dataProfile.challenges.hasOwnProperty(test.id)
                        ? "success"
                        : "light"
                    }
                  />
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
