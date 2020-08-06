<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
          <ion-menu-button />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonMenu contentId="foobar">
      <h1>Menu!</h1>
    </IonMenu>
    <IonContent id="foobar">
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
      {{ msg }}
      <IonInput v-model="msg" />
      {{ value }}
      <IonSelect v-model="value">
        <IonSelectOption value="female">Female</IonSelectOption>
        <IonSelectOption value="male">Male</IonSelectOption>
      </IonSelect>
      <IonButton :href="{ path: '/' }" @click="asd">foo bar</IonButton>
      <IonButton @click="openModalComponent">Open modal component</IonButton>
      <IonButton @click="isOpenAS = true" v-model:disabled="isOpen"
        >Show Action Sheet Component</IonButton
      >

      <IonActionSheet
        @willPresent="log"
        v-model="isOpenAS"
        :buttons="['asd', 'qwe']"
        header="Foobar"
      />
    </IonContent>
  </div>
</template>

<script lang="ts">
import {
  IonModal,
  IonActionSheet,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonSelect,
  IonSelectOption,
  IonMenu,
  IonMenuButton
} from "@modus/ionic-vue";
import HelloWorld from "./HelloWorld.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    IonModal,
    IonActionSheet,
    HelloWorld,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonMenuButton,
    IonMenu
  },
  data() {
    return {
      isOpen: false,
      isOpenAS: false,
      value: ref("female"),
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
  mounted() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
  },
  methods: {
    asd(...asd: any[]) {
      console.log(asd);
    },
    log(e) {
      console.log(e);
    },
    willDismiss() {
      this.isOpen = false;
      console.log("willDismiss");
    },
    openModalComponent() {
      this.isOpen = true;
      this.msg = "opened";
    }
  }
};
</script>
