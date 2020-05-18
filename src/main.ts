import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import { IonicVue, createRouter } from "@modus/ionic-vue";

// Ionic core styles
import "@ionic/core/css/ionic.bundle.css";

import App from "./App.vue";
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home, props: { msg: "asd" } },
    { path: "/other", component: HelloWorld, props: { msg: "other" } },
    { path: "/other2", component: { ...HelloWorld }, props: { msg: "other2" } },
    { path: "/other3", component: { ...Home }, props: { msg: "other2" } },
  ],
});

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
