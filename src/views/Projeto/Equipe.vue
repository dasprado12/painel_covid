<template>
  <div class="equipe">
    <div class="titulo_principal"><br>
        <h2 class="font-weight-bold">Nossa Equipe </h2><br>
    </div>
      <v-container>
        <v-row>
          <v-col xl="2" lg="3" md="3" sm="6" xs="6" v-for="item in equipe" :key="item.name">
            <v-card
              class="mx-auto"
              max-width="900"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="require(`@/assets/${item.fig}`)"
              >
                <v-card-title>{{item.name}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">{{item.un}}</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{item.role}}</div>
              </v-card-text>
            </v-card>
          </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  computed: {
    equipe(){
      return [
        { name: "Rafael T. de Sousa Júnior", role: "Prof. Dr. Adjunto", un: "ENE/FT/UnB", fig: "timoteo.jpg" },
        { name: "Francisco L. Caldas", role: "Doutorando", un: "ENE/FT/UnB", fig: "francisco.jpg" },
        { name: "Lucas Coelho", role: "Mestrando", un: "ENE/FT/UnB", fig: "lucas_coelho.jpg" },
        { name: "Jonathas Alves", role: "Mestrando", un: "ENE/FT/UnB", fig: "profile.png" },
        { name: "Daniel Prado", role: "Graduando", un: "ENE/FT/UnB", fig: "daniel.jpg" },
        { name: "Natália A. Marques", role: "Graduando", un: "ENE/FT/UnB", fig: "natalia.jpg" },
      ]
  }
    }
}
</script>

<style scoped>


.titulo_principal{
  margin-right: 20%;
  margin-left: 20%;
  text-align: center;
}

.text_image {
  margin-left: 30%;
  margin-right: 10%;
  text-align: center;
}


</style>
