<template>
  <div class="equipe">
    <div class="titulo_principal"><br>
        <h1 class="">Nossa Equipe </h1>
    </div>

      <v-container>
        <v-row no-gutters>
          <v-col cols="4" v-for="item in equipe" :key="item.name">
          <v-card flat>
            <v-img 

                :src="require(`@/assets/${item.fig}`)"
                max-width="200"
                max-height="250"
              />
              <!-- <v-img
                :src="item.fig"
                alt="Image"
                height="100"
                width="100"
              /> -->
            <div class="text-img">
              <div class="text-img">{{item.name}}</div>
              <div class="text-img">{{item.role}}</div>
              <div class="text-img">{{item.un}}  </div>
            </div>
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
        { name: "Paulo Henrique", role: "Mestrando", un: "ENE/FT/UnB", fig: "paulo.jpg" },
        { name: "Lucas Coelho", role: "Mestrando", un: "ENE/FT/UnB", fig: "lucas_coelho.jpg" },
        { name: "Jonathas Alves", role: "Mestrando", un: "ENE/FT/UnB", fig: "profile.png" },
        { name: "Daniel Prado", role: "Graduando", un: "ENE/FT/UnB", fig: "daniel.jpg" },
        { name: "André Ribeiro", role: "Graduando", un: "ENE/FT/UnB", fig: "andre.jpg" },
        { name: "Natália A. Marques", role: "Graduando", un: "ENE/FT/UnB", fig: "natalia.jpg" },
      ]
  }
    }
}
</script>

<style scoped>
.equipe {
  margin-left: 10%;
  margin-right: 10%;
};

.nossa-equipe {
  align-content: center;
  background-color: blue;

};

.titulo_principal{
  background-color: red;
}

.text_image {
    text-align: center;
  }


</style>
