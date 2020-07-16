<template>
  <div>
      <div :class="backgroundColor">
        <div class="box-presentation">
          <h2 class="titulo_principal"> Projeto Painel Covid-19 </h2>
            <p class="p">  
              O projeto do Painel Covid-19 é uma iniciativa do Latitude - Laboratório de Tecnologias de Tomada de Decisão (ENE/FT/UnB) em parceria com a Universidade Federal do Ceará (UFC). O projeto tem por objetivo auxiliar a comunidade na analise dos dados da evolução do Covid-19 de forma clara atraves de gráficos que demonstram o número de obitos e infectados.
            </p>  
          <v-btn to="dados" outlined color="black">
            Ir para dados
          </v-btn>
        </div>
      </div>
      <div class="data-ext">
        <div class="box-howto">
            <h2 class="font-weight-light">O que nós fazemos</h2>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-card color="grey lighten-2" outlined height="140">
                  <br>
                  <v-icon large color="green darken-2">fas fa-wrench</v-icon>
                  <v-card-text class="font-weight-bold">
                    Extração de dados via Scrapping ou API das secretarias de saúde dos estados
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="grey lighten-2" outlined height="140">
                  <br>
                  <v-icon large color="green darken-2">fas fa-cogs</v-icon>
                  <v-card-text class="font-weight-bold">
                    Armazenamento e manipulação dos dados
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card color="grey lighten-2" outlined height="140">
                  <br>
                  <v-icon large color="green darken-2">fas fa-desktop</v-icon>
                  <v-card-text class="font-weight-bold">
                    Visualização
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card color="grey lighten-2" outlined>
                <br>
                  <v-icon large color="green darken-2">fas fa-clock</v-icon>
                  <v-card-text class="font-weight-bold">
                    Projeção de dados! Como este algorítmo, é possível analisar os dados vindos das secretarias de saúde e visualizar um futuro cenário para os dados. Com alta precisão, é possível prever como estará o panorama futuro da COVID em cada estado brasileiro
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
          backgroundColor: 'green lighten-4',
        }
    },
    
}
</script>

<style scoped>
.teste{
  position: absolute;
}
.box-presentation{
  text-align: center;
  height: 300px;
}
.box-howto{
  padding-top: 20px;
  text-align: center;
}
.projeto {
  margin-right: 10%;
  margin-left: 10%;
}
.data-ext{
  background-color: rgb(255, 255, 255);
}
.titulo_principal{
  padding-top: 60px;
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
}

.box {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20vh;
}

.imgSettings{
  text-align: center;
  align-content: center;
}

.p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 60px;
    margin-right: 60px;
    text-indent: 4em;
}
</style>