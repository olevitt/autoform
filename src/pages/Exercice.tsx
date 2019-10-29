import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonSkeletonText,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonFooter,
  IonCardContent,
  IonCardHeader
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import data from "../data/challenges.json";
import { RouteComponentProps } from "react-router-dom";
import { Test } from "../model/Challenge";
import ReactMarkdown from "react-markdown";

interface ExercicePageProps
  extends RouteComponentProps<{
    category: string;
    challengeId: string;
  }> {}

const ExercicePage: React.FC<ExercicePageProps> = ({ match }) => {
  const [test, setTest] = useState<Test>();

  useEffect(() => {
    const category = data.challenges.find(e => e.id === match.params.category);
    if (category) {
      const test = category.tests.find(e => e.id === match.params.challengeId);
      setTest(test);
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
        {test ? (
          <>
            <IonItem color="primary">
              <IonLabel>{test.name}</IonLabel>
            </IonItem>

            <IonCardHeader>
              <img src="http://placekitten.com/g/200/300" alt="kitten"></img>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                <ReactMarkdown source={test.exercice.description} />
              </IonText>
              <br />
            </IonCardContent>
          </>
        ) : (
          <>
            <IonSkeletonText animated style={{ width: "60%" }} />
          </>
        )}
      </IonContent>
      <IonFooter>
        {test ? (
          <>
            <IonItem color="light">
              <IonLabel>Pour valider cet exercice</IonLabel>
            </IonItem>
            <IonText>
              <p>
                <ReactMarkdown source={test.exercice.validation.goalText} />
              </p>
            </IonText>
            <IonButton>J'ai fini !</IonButton>
          </>
        ) : (
          <>
            <IonSkeletonText animated style={{ width: "60%" }} />
          </>
        )}
      </IonFooter>
    </IonPage>
  );
};

export default ExercicePage;
