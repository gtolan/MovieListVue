<template>
  <div id="app">
    <Navbar></Navbar>
    <CardContainer></CardContainer>
  </div>
</template>

<script>
import CardContainer from "./components/CardContainer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    CardContainer,
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
body {
  margin: 0;
}
</style>
