<template>                                                                          <!--비밀번호 초기화 페이지-->
  <div class="text-center pt-5 pb-4">
    <a href="#">
      <img src="@/assets/images/logo_32_blue.svg" width="64" height="64" alt="">
    </a>
  </div>
  <div class="container-fluid col-8">
    <main>
      <div class="form-header">
        <h4>
          <b>비밀번호 초기화</b>
        </h4>
      </div>
      <div class="form mt-4 p-4">
        <form class>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1"><b>이메일</b></label>                                       
            <div class="el-input">
              <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" placeholder="회원가입 시 등록한 이메일 주소">    <!--초기화 메일을 받을 이메일 주소-->
            </div>
            <span class="text-muted"></span>
            <router-link to ="/passwordreset" v-on:click="PWReset" class="btn btn-primary btn-block"><b>초기화 링크 받기</b></router-link>      <!--이메일 발송 링크-->
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: "PasswordReset",
  data() {                                      //이메일 초기화에 사용되는 변수
    return {
      email: ''
    }
    
  },
  methods: {
    
    PWReset() {                                 //이메일 초기화 함수
      firebase.auth().sendPasswordResetEmail(this.email)
      .then((user)=> {                          // eslint-disable-line no-unused-vars
        alert('이메일이 발송되었습니다.');
        this.$router.push("/")                  //로그인 페이지로 이동
      })
      .catch((error)=> {                        //에러 처리
        alert('에러 : '+ error.code + error.message)
      })
    },
  }

};
</script>


<style scoped lang="scss">
body {
  height: 100vh;
  margin: 0;
  padding: 0px;
  width: 100%;
}

a {
  text-decoration: none;
}

.callout {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  border-color: $color-border;
  text-align: center;
}

.txt-btn {
  display: block;
  position: absolute;
  text-align: right;
  top: 434px;
  right: 550px;
}

.form-header {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}

.form {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  border-color: $color-border;
}

.form label {
  margin-bottom: 8px;
}

.form input {
  margin-top: 4px;
  margin-bottom: 16px;
}

.btn-primary {
  background-color: $color-primiary-blue;
  border-color: $color-border;
}

.btn-block {
  display: block;
  width: 100%;
}

p {
  display: block;
}
</style>