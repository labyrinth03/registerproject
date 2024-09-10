import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import router from "./router/router"


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
// app.use(router)
app.mount('#app')

// Import the functions you need from the SDKs you need

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc9Dmx_JKFfroGVObSsiaEfMlzoIxmS1w",
    authDomain: "registerproject-2a837.firebaseapp.com",
    databaseURL: "https://registerproject-2a837-default-rtdb.firebaseio.com",
    projectId: "registerproject-2a837",
    storageBucket: "registerproject-2a837.appspot.com",
    messagingSenderId: "242504907203",
    appId: "1:242504907203:web:dc23f856d7117205b4a576",
    measurementId: "G-75LFS3F81V"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);