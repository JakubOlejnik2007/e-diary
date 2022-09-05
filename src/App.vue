<template>
  <MainHeaderBar id="MainHeaderBar" class="MainHeaderBar" />

  <MainNavBar id="MainNavBar" class="MainNavBar" />
  <section id="section" class="section">
    <router-view />
  </section>
</template>

<script>
import MainNavBar from "./components/MainNavBar.vue";
import MainHeaderBar from "./components/MainHeaderBar.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: { MainNavBar, MainHeaderBar },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  background: $gradient1;
  background: linear-gradient(90deg, $gradient1 25%, $gradient2 75%);
  min-height: 250vh;
  width: 100%;
}
.section {
  grid-area: section;
}
.MainNavBar {
  grid-area: nav;
}
.MainHeaderBar {
  grid-area: header;
}
@media screen and (min-width: 0px) {
  #app {
    grid-template-areas:
      "header"
      "nav"
      "section";

    grid-template-columns: 1fr;
    grid-template-rows: 154px 124px 1fr;
  }
}

@media screen and (min-width: 426px) {
  #app {
    grid-template-areas:
      "header nav"
      "section section";
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 154px 1fr;
  }
}

@media screen and (min-width: 769px) {
  #app {
    grid-template-areas:
      "header nav"
      "section section";
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 154px 1fr;
  }
}
</style>
