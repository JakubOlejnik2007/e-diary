<template>
  <div id="MainNavBar" class="MainNavBar">
    <header>
      <div id="header" class="header">
        <a href="./"><img src="@/assets/logo.png" alt="logo Scholaris" /></a>
        <h1>Scholaris</h1>
      </div>
    </header>
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
.header {
  img {
    width: 100px;
    height: 100px;

    background: $text-p;
    padding: 5px;
    border: 2px solid $text-p;
    border-radius: 15px;
  }
}
.header {
  padding-top: 10px;
  height: 100%;
  grid-area: header;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: $text-h;
    font-family: "Monaco", sans-serif;
    text-align: center;
    vertical-align: baseline;
    height: 40px;
  }
}

.MainHeaderBar {
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
