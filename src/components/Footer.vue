<template>
  <div>
    <div class="observacoes">
        <v-divider></v-divider>
      <div class="observacoes_texto font-weight-light">
        <div class="text-footer"> 
          Este projeto é uma parceria entre pequisadores da Universidade de Brasília (UnB)
          e pesquisadores da Universidade Federal do Ceará (UFC).
          Todos os dados aqui expostos foram retirados dos portais das Secretarias de Saúde dos Estados
          e estão disponíveis para download via API.
          Caso encontre algum erro, contate-nos na aba "Contatos".
        </div>
        <div class="column">
          <img style="width:100%" src="../assets/brasao-ufc.png"/>
        </div>
        <div class="column">
          <img style="width:100%" src="../assets/brasao-unb.png"/>
        </div>
      </div>
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
  font-size: small;
  display: flex;
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
  width: 170px;
  margin: 0 auto;
}
.text-footer {
  width: 60%;
}

.primeira-observacao{
  color: rgb(110, 110, 110);
  text-align: center;
  padding-top: 10%;
  padding-bottom: 2%;
  padding-left: 7%;
  padding-right: 7%;
}
</style>