<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div>Clave</div>
          </ion-col>
          <ion-col>
            <div>Status</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaClaves" :key="index">
          <ion-col>
            <div>{{listaKeys[index]}}</div>
          </ion-col>
          <ion-col>{{item.status}}</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { getDatabase, ref, onValue } from "firebase/database";

export default  defineComponent({
  name: 'Tab1Page',
  components: { IonCol, IonGrid, IonRow, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  mounted() {
    const db = getDatabase(); 
    const starCountRef = ref(db, "claves/"); 
    onValue(starCountRef, (snapshot) => { 
      const data = snapshot.val(); 
      console.log(data); 
      var cont = 0 
      snapshot.forEach(element => {
         this.listaKeys[cont]=element.key 
         this.listaClaves[cont] = element.toJSON() 
         cont++ 
        }); 
      }); 
      console.log("lista de claves", this.listaCaves)
    },
  data(){ return{
      listaClaves: [{status:"", usuario:""}], 
      listaKeys:[]
  }}
});

</script>

<style> 
ion-col > div {
  background-color: #f7f7f7; 
  border: solid 1px #ddd; 
  padding: 10px; 
} 
</style>
