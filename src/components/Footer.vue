<template>
  <div class="footer"><br><br>
    <div class="observacoes">
        <v-divider></v-divider>
      <div class="observacoes_texto font-weight-light">
        Este projeto é uma parceria entre pequisadores da <b>Universidade de Brasília (UnB)</b>
        e pesquisadores da <b>Universidade Federal do Ceará (UFC)</b>.<br>
        Todos os dados aqui expostos foram retirados dos portais das <b>Secretarias de Saúde dos Estados</b>
        e estão disponíveis para download via API.<br>
        Caso encontre algum erro, contate-nos na aba <b>'Contatos'</b>
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
div.observacoes_texto{
  margin-left: 7%;
  margin-right: 7%;
}
.observacoes_texto{
  padding-top:    30px;
  padding-bottom: 30px;
}

div.observacoes{
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