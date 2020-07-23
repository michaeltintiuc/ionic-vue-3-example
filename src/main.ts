import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { IonicVue, createRouter, IonTab, IonContent, IonRouterView } from "@modus/ionic-vue";
import { addIcons } from "ionicons";
import { add, map, warning, earth } from "ionicons/icons";

addIcons({ add, map, warning, earth });

// Ionic core styles
import "@ionic/core/css/ionic.bundle.css";

import App from "./App.vue";
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Tabs from "./components/Tabs.vue";

const Stuff = {
  components: { IonTab, IonContent, IonRouterView },
  mounted() {
      console.log('asdadasd');
  },
  template: `
  <IonTab tab="add">
  <IonRouterView/>
  <br>
  <RouterLink to="/">Go home</RouterLink>
  <br>
  <RouterLink to="/tabs/stuff/more-stuff">Go to more stuff</RouterLink>
  <br>
  <RouterLink to="/tabs/map">Go to map</RouterLink>
  </IonTab>
  `
}

const InitialStuff = {
  components:{ IonContent },
  template: `
  <div class="ion-page">
  <IonContent><h1>initial stuff</h1></IonContent>
  </div>
  `
}

const MoreStuff = {
  components:{ IonContent },
  template: `
  <div class="ion-page">
  <IonContent><h1>more stuff</h1></IonContent>
  </div>
  `
}

const Map = {
  components: { IonTab, IonContent },
  template: `
  <IonTab tab="map">
  <IonContent>
  <h1>map</h1>
  <br>
  <RouterView/>
  <br>
  <RouterLink to="/tabs/map/more-map">see more map</RouterLink>
  <br>
  <RouterLink to="/tabs/stuff">see stuff</RouterLink>
  </IonContent>
  </IonTab>
  `
}

const MoreMap = {
  template: `
  <h1>more map</h1>
  `
}

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home, props: { msg: "asd" } },
    { path: "/other", component: HelloWorld, props: { msg: "other" } },
    { path: "/other2", component: { ...HelloWorld }, props: { msg: "other2" } },
    { path: "/other3", component: { ...Home }, props: { msg: "other2" } },
    { path: "/tabs", component: Tabs, children: [
      { path: 'stuff', component: Stuff, children: [
        { path: '', component: InitialStuff },
        { path: 'more-stuff', component: MoreStuff },
      ] },
      { path: 'map', component: Map, children: [
        { path: 'more-map', component: MoreMap },
      ] },
    ] },
  ],
});

const app = createApp(App)
  .use(IonicVue, { mode: 'ios' })
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
