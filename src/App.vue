<template>
  <IonApp>
    <IonRouterView />
    <!-- <RouterView v-slot="{ Component, props }"> -->
    <!-- <Transition mode="in-out" :appear="true"> -->
    <!-- <component :is="Component" v-bind="props" /> -->
    <!-- </Transition> -->
    <!-- </RouterView> -->
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterView } from "@modus/ionic-vue";
import { ref } from "vue";

const inject = ref("fooo");

export default {
  name: "App",
  components: {
    IonApp,
    IonRouterView
  },
  provide: {
    mykey: inject
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}
</style>
