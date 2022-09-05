<template>
  <div id="MainNavBar" class="MainNavBar">
    <nav>
      <div id="nav" class="nav">
        <div v-if="this.isLogged == 'true'" id="navbar" class="navbar">
          <router-link to="/about">About page</router-link>
          <router-link to="/">Home</router-link>
        </div>
        <div v-else id="navbar" class="navbar">
          <div id="isLogged" class="isLogged">
            <p id="isLogged" class="isLogged">User isn't logged now!</p>
          </div>
          <div id="login" class="login">
            <router-link to="/login">Log in or sign up!</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    checkIfLogged() {
      let status = sessionStorage.getItem("isLogged");
      console.log(status, this.isLogged);
      if (status == "true") {
        this.isLogged = "true";
      }
    },
  },
  mounted() {
    this.checkIfLogged();
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  img {
    width: 100px;
    height: 100px;

    background: $text-p;
    padding: 5px;
    border: 2px solid $text-p;
    border-radius: 15px;
  }
}
.nav {
  grid-area: nav;

  display: flex;
  align-items: center;

  width: 100%;
  height: 114px;
  .navbar {
    padding: 0;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: visible;
    align-items: center;
    .isLogged {
      font-family: "Monaco", sans-serif;
      font-size: 18px;
      vertical-align: bottom;
    }
    p {
      color: $text-p;
    }
    a {
      color: $text-background;
      text-decoration: none;
      background-color: $text-h;
      box-sizing: border-box;
      padding: 7px;
      margin: 2.5px 5px;
      text-align: center;
      flex-grow: 1;
      border-radius: 7px;

      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

      display: block;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: $text-p;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
      }
      &:hover::after,
      &:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
      }
    }
  }
}

.MainNavBar {
  display: grid;
  z-index: 100;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  overflow: clip;

  box-sizing: border-box;
  padding: 10px;
  background-color: $text-background;
  box-shadow: 2px 7px 33px 22px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 2px 7px 33px 22px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 7px 33px 22px rgba(0, 0, 0, 0.25);
}
@media screen and (min-width: 0px) {
}

@media screen and (min-width: 426px) {
}

@media screen and (min-width: 769px) {
}
</style>
