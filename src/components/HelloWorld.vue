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
      <h1>{{ msg }}</h1>
      <p>
        <RouterLink to="/">Go home</RouterLink>
      </p>
      <p>
        <RouterLink to="/other">Go to other</RouterLink>
      </p>
      <p>
        <RouterLink to="/other2">Go to other 2</RouterLink>
      </p>
      <p>
        <RouterLink to="/other3">Go to other 3</RouterLink>
      </p>
      <h1>injected: {{ asd.value }}</h1>
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
  IonBackButton
} from "@modus/ionic-vue";
export default {
  name: "HelloWorld",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
  },
  props: {
    msg: String
  },
  inject: {
    asd: {
      from: "mykey",
      default: "hlll"
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
