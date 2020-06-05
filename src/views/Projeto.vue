<template>
    <v-app class="main_project">
        <Toolbar/>
            <v-content>
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
.view{
  margin-left: 100px;
  margin-right: 100px;
}
</style>