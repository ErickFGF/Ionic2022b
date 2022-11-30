import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPfBA-T97jTel1KFC8yzN3LOKj-5BzGDI",
  authDomain: "ionic-practica-4.firebaseapp.com",
  projectId: "ionic-practica-4",
  storageBucket: "ionic-practica-4.appspot.com",
  messagingSenderId: "179969293666",
  appId: "1:179969293666:web:650257cbc2d64371ce803b",
  measurementId: "G-EPYMSRGWGF"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase)
  .use(analytics);
  
router.isReady().then(() => {
  app.mount('#app');
});