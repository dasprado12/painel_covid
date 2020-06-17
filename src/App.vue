<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  }),
  created(){
    console.log(process.env.VUE_APP_API)
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

</style>
