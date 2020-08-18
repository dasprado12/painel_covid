<template>
  <v-app>
    <Toolbar/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    Toolbar,
    Footer
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

</style>
