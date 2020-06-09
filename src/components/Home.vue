<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <img alt="Vue logo" src="../assets/logo.png" />

      <ion-icon icon="add"></ion-icon>

      <p>
        <RouterLink to="/other">Go to 2nd page</RouterLink>
      </p>
      <p>
        <RouterLink to="/other2">Go to other 2</RouterLink>
      </p>
      <p>
        <RouterLink to="/tabs">Go to tabs</RouterLink>
      </p>

      <!-- <IonModal v-model="isOpen" :showBackdrop="false"> -->
      <IonModal
        :isOpen="isOpen"
        @willDismiss="willDismiss"
        :showBackdrop="false"
      >
        <h1>{{ msg }}</h1>
        <h1>qweqwe</h1>
        <HelloWorld msg="qwe" />
      </IonModal>
      <p>modal: {{ isOpen }}</p>
      <p>actionsheet: {{ isOpenAS }}</p>
      <IonItem>
        <IonLabel>Default Label</IonLabel>
        <!-- <ion-input type="text" v-model:value="msg" @ionFocous="willDismiss" /> -->
        <IonInput
          v-model="msg"
          v-model:disabled="isOpen"
          @ionBlur="willDismiss"
          :clearInput="true"
        />
      </IonItem>
      <IonItem>
        <IonLabel>Default Label</IonLabel>
        <!-- <ion-input type="text" v-model:value="msg" @ionFocous="willDismiss" /> -->
        <IonCheckbox v-model="isOpen" />
      </IonItem>
      {{ msg }}
      <IonButton @click="openModalComponent">Open modal component</IonButton>
      <IonButton @click="isOpenAS = true" v-model:disabled="isOpen"
        >Show Action Sheet Component</IonButton
      >

      <IonActionSheet
        @willPresent="log"
        v-model="isOpenAS"
        :buttons="buttons"
        header="Foobar"
      />
    </IonContent>
  </div>
</template>

<script lang="ts">
import {
  IonModal,
  IonInput,
  IonActionSheet,
  IonLabel,
  IonItem,
  IonCheckbox,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton
} from "@modus/ionic-vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "Home",
  components: {
    IonLabel,
    IonItem,
    IonModal,
    IonInput,
    IonActionSheet,
    HelloWorld,
    IonCheckbox,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
  },
  data() {
    return {
      isOpen: false,
      isOpenAS: false,
      msg: "asd",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            this.isOpenAS = false;
            console.log("cancel");
          }
        }
      ]
    };
  },
  methods: {
    log(e) {
      console.log(e);
    },
    willDismiss() {
      this.isOpen = false;
      console.log("willDismiss");
    },
    openModalComponent() {
      this.isOpen = true;
    }
  }
};
</script>
