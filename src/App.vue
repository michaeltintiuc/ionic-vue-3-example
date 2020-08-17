<template>
  <IonApp>
    <IonRouterView v-slot="{ Component, transitionProps }">
      <Transition v-bind="transitionProps">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </IonRouterView>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterView, IonMenu, IonInput } from "@modus/ionic-vue";
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";

const inject = ref("fooo");

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterView,
    IonMenu,
    IonInput
  },
  provide: {
    mykey: inject
  },
  setup() {
    console.log(useRouter());
  }
});
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
