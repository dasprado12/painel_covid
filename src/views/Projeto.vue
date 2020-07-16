<template>
    <v-app class="main_project">
        <Toolbar/>
            <v-content class="backgroundColor">
                <router-view class="view"></router-view>
            </v-content>
        <Footer></Footer>
    </v-app>
</template>



<script>
import Toolbar from "../components/Toolbar.vue"
import Footer from "../components/Footer.vue"
export default {
  components: {
    Toolbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.backgroundColor{
  background-color: rgb(255, 255, 255);
}
/* .view{
  margin-left: 10px;
  margin-right: 10px;
} */
</style>