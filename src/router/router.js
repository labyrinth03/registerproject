import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/pages/MyLogin"
import PasswordReset from "@/components/pages/PasswordReset"
import JoinPage from "@/components/pages/JoinPage"
import JoinInfo from "@/components/pages/JoinInfo"

import firebase from 'firebase/compat/app'; // eslint-disable-line no-unused-vars
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
    // { path : "/home", name : "HomePage", component : HomePage, 
    // beforeEnter: function(to, from, next){
    //   firebase.auth().onAuthStateChanged(function(user) {           //홈페이지는 로그인 시에만 접근 가능
    //     if (user) {
    //       // User is signed in.
    //       return next()
    //     } else {
    //       // No user is signed in.
    //       next('/')
    //     }
    //   });
    // } },
    // { path : "/inputpoint", name : "inputpoint", component : InputPoint, 
    // beforeEnter: function(to, from, next){                                  
    //   firebase.auth().onAuthStateChanged(function(user) {               //상점 입력 페이지는 로그인 시에만 접근 가능
    //     if (user) {
    //       // User is signed in.
    //       return next()
    //     } else {
    //       // No user is signed in.
    //       next('/')
    //     }
    //   });
    // }  },
    // { path : "/inputvacation", name : "inputvacation", component : InputVacation, 
    // beforeEnter: function(to, from, next){
    //   firebase.auth().onAuthStateChanged(function(user) {                 //휴가 입력 페이지는 로그인 시에만 접근 가능
    //     if (user) {
    //       // User is signed in.
    //       return next()
    //     } else {
    //       // No user is signed in.
    //       next('/')
    //     }
    //   });
    // }  },
    // { path : "/settings", name : "settings", component : Settings, 
    // beforeEnter: function(to, from, next){
    //   firebase.auth().onAuthStateChanged(function(user) {             //환경 설정 페이지는 로그인 시에만 접근 가능
    //     if (user) {
    //       // User is signed in.
    //       return next()
    //     } else {
    //       // No user is signed in.
    //       next('/')
    //     }
    //   });
    // }  },
    { path : "/", name : "login", component : MyLogin },
    { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
    { path : "/join", name : "join", component : JoinPage },
    { path : "/joininfo", name : "joininfo", component : JoinInfo },
    ]
});

export default router;
