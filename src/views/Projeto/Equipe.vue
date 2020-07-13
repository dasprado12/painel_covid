<template>
  <div class="equipe">
    <div class="titulo_principal"><br>
        <h2 class="">Nossa Equipe </h2><br>
    </div>

      <v-container>
        <v-row no-gutters>
          <v-col cols="4" v-for="item in equipe" :key="item.name">
          <v-card flat>
            <v-img 
                :src="require(`@/assets/${item.fig}`)"
                max-width="100"
                max-height="150"
              />
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
.equipe {
  margin-left: 20%;
  margin-right: 10%;
}

.titulo_principal{
  margin-right: 20%;
  margin-left: 10%;
  text-align: center;
  }

.text_image {
    margin-left: 30%;
    margin-right: 10%;
    text-align: center;
  }


</style>
