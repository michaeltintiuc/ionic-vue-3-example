<template>
  <div class="ion-page">
    <IonTabs @ionTabsWillChange="asd">
      <RouterView />
      <template v-slot:top>
        <IonTabBar>
          <IonTabButton tab="add" href="/tabs/stuff">
            <IonIcon icon="add" />
          </IonTabButton>
          <IonTabButton tab="map" href="/tabs/map">
            <IonIcon icon="map" />
          </IonTabButton>
        </IonTabBar>
      </template>
    </IonTabs>
  </div>
</template>

<script lang="ts">
import {
  //IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon
  //IonRouterView
} from "@modus/ionic-vue";
export default {
  name: "Tabs",
  components: {
    //IonTab,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon
    //IonRouterView
  },
  props: {
    msg: String
  },
  methods: {
    asd(e: any) {
      console.log("change", e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
