<template>
  <div id="home-view" class="home-view">
    <header>
      <div id="header" class="header">
        <h1>Scholaris</h1>
      </div>
    </header>
    <div id="logo" class="logo">
      <img src="@/assets/logo.png" alt="logo " />
      <!--200x200px-->
    </div>
    <article>
      <div id="appinformation" class="appinformation"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
.logo {
  margin: 5px;
  display: flex;
  justify-content: space-around;
  img {
    background: $text-p;
    padding: 5px;
    border: 2px solid $text-p;
    border-radius: 15px;
    width: 200px;
    height: 200px;
  }
}
.home-view {
  margin: 30px 20px;
  padding: 15px;
  border-radius: 15px;

  background-color: $text-background;
  height: 100%;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  h1 {
    color: $text-h;
    font-family: "Monaco", sans-serif;
    text-align: center;
  }
}
</style>
