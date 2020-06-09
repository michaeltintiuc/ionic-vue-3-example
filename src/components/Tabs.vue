<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Other</IonTitle>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonTabs>
        <IonTab tab="add">
          <IonContent>
            <h1>add</h1>
            <p>
              <RouterLink to="/">Go home</RouterLink>
            </p>
          </IonContent>
        </IonTab>
        <IonTab tab="map">
          <h1>map</h1>
        </IonTab>
        <template v-slot:bottom>
          <IonTabBar>
            <IonTabButton tab="add">
              <IonIcon icon="add" />
            </IonTabButton>
            <IonTabButton tab="map">
              <IonIcon icon="map" />
            </IonTabButton>
          </IonTabBar>
        </template>
      </IonTabs>
    </IonContent>
  </div>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon
} from "@modus/ionic-vue";
export default {
  name: "HelloWorld",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonTab,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon
  },
  props: {
    msg: String
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
