<template>
  <div id="main" class="main">
    <div id="choose-menu" class="choose-menu">
      <h1
        id="choose-login"
        class="choose-login"
        @click="this.changeView('login')"
      >
        Log in!
      </h1>
      <h1
        id="choose-register"
        class="choose-register"
        @click="this.changeView('signup')"
      >
        Sign up!
      </h1>
    </div>
    <div id="result" class="result">
      <div v-if="this.login" id="login" class="login"><mainlogin /></div>
      <div v-else id="register" class="register"><mainregister /></div>
    </div>
  </div>
</template>
<script>
import mainlogin from "../components/main-login.vue";
import mainregister from "../components/main-register.vue";

export default {
  data() {
    return {
      login: true,
    };
  },
  components: {
    mainlogin,
    mainregister,
  },
  methods: {
    changeView: function (clicked) {
      if (clicked == "login") {
        this.login = true;
      } else {
        this.login = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  @include reset;
  min-height: 75%;
  min-width: 75%;
  margin: 35px 20px;
  padding: 15px;
  border-radius: 15px;

  background-color: $text-background;
  height: 100%;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  .register,
  .login {
    display: flex;
    justify-content: center;
  }

  .choose-menu {
    display: flex;
    justify-content: space-evenly;
    h1 {
      display: inline-block;
      font-size: 20px;
      color: $text-h;
      font-family: "Monaco", sans-serif;
      text-align: center;
      cursor: pointer;
    }
  }
  .result {
    height: 100%;
    width: 100%;
  }
}
</style>
