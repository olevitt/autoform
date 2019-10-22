import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import Challenges from "./pages/Challenges";
import Exercices from "./pages/Exercices";
import Exercice from "./pages/Exercice";
import Settings from "./pages/Settings";
import { home, play, settings } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "Challenges",
    url: "/challenges",
    icon: play
  },
  {
    title: "Settings",
    url: "/settings",
    icon: settings
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/challenges" component={Challenges} exact={true} />
          <Route
            path="/challenges/:category"
            component={Challenge}
            exact={true}
          />
          <Route
            path="/challenges/:category/:challengeId"
            component={Exercices}
            exact={true}
          />
          <Route
            path="/challenges/:category/:challengeid/:exerciceid"
            component={Exercice}
            exact={true}
          />
          <Route path="/settings" component={Settings} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" exact={true} />} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
