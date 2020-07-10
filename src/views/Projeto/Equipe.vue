<template>
  <div class="equipe">
    <div class="nossa-equipe">
        <h1>Nossa Equipe </h1>
    </div>

      <v-container>
        <v-row no-gutters>
          <v-col cols="4">
          <div class="text_image">
            <figure>
              <img
                src="../../assets/timoteo.jpg"
                alt="Image"
                height="100"
                width="100"
              />
              <figcaption>Rafael T. de Sousa Júnior</figcaption>
              <figcaption>Prof.Dr. Adjunto</figcaption>
              <figcaption>ENE/FT/UNB</figcaption>
            </figure>
          </div>
          </v-col>

          <v-col cols="4">
          <div class="text_image">
            <figure>
              <img
                src="../../assets/francisco.jpg"
                alt="Image"
                height="100"
                width="100"
              />
              <figcaption>Francisco Caldas</figcaption>
              <figcaption>Doutorando em Eng. Elétrica</figcaption>
              <figcaption>ENE/FT/UNB</figcaption>
            </figure>
          </div>
          </v-col>

          <v-col cols="4">
            <div class="text_image">
              <figure>
                <img
                  src="../../assets/paulo.jpg"
                  alt="Image"
                  height="100"
                  width="100"
                />
                <figcaption>Paulo Henrique</figcaption>
                <figcaption>Mestrando em Eng. Elétrica</figcaption>
                <figcaption>ENE/FT/UNB</figcaption>
              </figure>
            </div>
          </v-col>
        </v-row>
      </v-container>

    <v-container>
      <v-row no-gutters>
        <v-col cols="4">
          <div class="text_image">
            <figure>
              <img
                src="../../assets/lucas_coelho.jpg"
                alt="Image"
                height="100"
                width="100"
              />
              <figcaption>Lucas Coelho</figcaption>
              <figcaption>Mestrando em Eng. Elétrica</figcaption>
              <figcaption>ENE/FT/UNB</figcaption>
            </figure>
          </div>
        </v-col>

        <v-col cols="4">
          <div class="text_image">
            <figure>
              <img
                src="../../assets/daniel.jpg"
                alt="Image"
                height="100"
                width="100"
              />
              <figcaption>Daniel Prado</figcaption>
              <figcaption>Graduando em Eng. de Redes</figcaption>
              <figcaption>ENE/FT/UNB</figcaption>
            </figure>
          </div>
        </v-col>

          <v-col cols="4">
            <div class="text_image">
              <figure>
                <img
                  src="../../assets/andre.jpg"
                  alt="Image"
                  height="100"
                  width="100"
                />
                <figcaption>André Ribeiro</figcaption>
                <figcaption>Graduando em Eng. de Redes</figcaption>
                <figcaption>ENE/FT/UNB</figcaption>
              </figure>
            </div>
          </v-col> 
        </v-row>
      </v-container>

      <v-container>
      <v-row no-gutters>
        <v-col cols="4">
          <div class="text_image">
            <figure>
              <img
                src="../../assets/natalia.jpg"
                alt="Image"
                height="100"
                width="100"
              />
              <figcaption>Natália A. Marques </figcaption>
              <figcaption>Graduanda em Eng. de Redes</figcaption>
              <figcaption>ENE/FT/UNB</figcaption>
            </figure>
          </div>
        </v-col>

        <v-col cols="4">
          <div class="text_image">
            <figure>
              <img
                src="../../assets/profile.png"
                alt="Image"
                height="100"
                width="100"
              />
              <figcaption>Jonathas Alves</figcaption>
              <figcaption>Graduando em Eng. de Redes</figcaption>
              <figcaption>ENE/FT/UNB</figcaption>
            </figure>
          </div>
        </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<style scoped>
.equipe {
  margin-left: 10%;
  margin-right: 10%;
};

.nossa-equipe {
  align-content: center;
  background-color: blue;

};


.text_image {
    text-align: center;
  }


</style>
