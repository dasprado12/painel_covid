<template>
  <div>
      <h3>  <p className="box">Projeto Painel Covid-19 </p></h3>

        <p class="p">  
          O projeto do Painel Covid-19 é uma iniciativa do Latitude - Laboratório de Tecnologias de Tomada de Decisão (ENE/FT/UnB) em parceria com a Universidade Federal do Ceará (UFC). O projeto tem por objetivo auxiliar a comunidade na analise dos dados da evolução do Covid-19 de forma clara atraves de gráficos que demonstram o número de obitos e infectados.
        </p>  
        <p class="p">
          Os dados são coletados através de API's ou por scrapping do site da Secretária de Saúde Pública de cada estado e do Distrito Federal. Esses dados são utilizados para gerar os gráficos apresentados no site.
        </p>           
    </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.projeto {
  margin-right: 10%;
  margin-left: 10%;
}
.box {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20vh;
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