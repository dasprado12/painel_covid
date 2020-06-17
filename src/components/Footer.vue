<template>
  <div class="footer">
    <div class="observacoes">
      <div class="observacoes_texto">
    <v-divider></v-divider>
      </div>
    </div>
    <div class="parceiros">
      <v-card flat>
        <v-card-title>
          <v-spacer></v-spacer>
      <div class="column">
        <img style="width:100%" src="../assets/brasao-ufc.png"/>
      </div>
      <div class="column">
        <img style="width:100%" src="../assets/brasao-unb.jpg"/>
      </div>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      logos: [
        { alt: 'Universidade Federal do Ceará', src: '../assets/brasao-ufc.png', link: "/" },
        { alt: 'Universidade de Braília', src: "../assets/brasao-unb.jpg", link: "/" }
      ]
    }),
  }
</script>

<style scoped>
div.observacoes{
  height: 100px;
  background-color: rgb(228, 228, 228);
}
div.parceiros{
  margin-left: 10%;
  margin-right: 10%;
  align-content: right;
  text-align: right;
  display: table;

}
.column {
  align-content: right;
  float: left;
  width: 150px;
  padding: 5px;
}
</style>