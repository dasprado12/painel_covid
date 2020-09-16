<template>
  <body data-spy="scroll" data-target=".fixed-top">
    <!-- Header -->
    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h1>SIMOP UnB<br>Projeto Painel Covid-19</h1>
                            <p class="p-large">O projeto do Painel Covid-19 é uma iniciativa do Latitude - Laboratório de Tecnologias de Tomada de Decisão (ENE/FT/UnB) em parceria com a Universidade Federal do Ceará (UFC).</p>
                        </div>
                    </div> <!-- end of col -->
                    <div class="col-lg-5 mx-auto">
                        <div class="image-container">
                            <img class="img-fluid" style="height: 400px; width: 550px; margin-top: 3rem;" src="images/home.jpg" alt="alternative">
                        </div> <!-- end of image-container -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of header-content -->
    </header> <!-- end of header -->
    <!-- end of header -->
    
    <!-- Features -->
    <div id="features" class="tabs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Painel Covid-19</h2>
            <div class="p-heading p-large">O projeto tem por objetivo auxiliar a comunidade na analise dos dados da evolução do Covid-19 de forma clara atraves de gráficos que demonstram o número de obitos e infectados. Com os dados extraídos da Secretaria de Saúde do Distrito Federal (SESDF), foi possível anasizá-los de forma a criar uma série temporal. Em forma de mapa de calor, é possível observar as regiões mais afetadas pela COVID-19 na Distrito Federal (DF).</div>
            <img class="img-fluid img-mob" style="width: 600px; height: 240px; margin-top: 5rem;" src="images/infectados.gif" alt="alternative">
          </div> <!-- end of col -->
        </div> <!-- end of row -->
      </div> <!-- end of container --> 
    </div> <!-- end of tabs -->
    <!-- end of features -->


    <!-- Video -->
    <div id="preview" class="basic-1" style="margin-bottom: 3rem;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>O que nós fazemos</h2>
            <div style="display: flex; -webkit-filter: drop-shadow(1px 3px 3px #222); filter: drop-shadow(1px 3px 3px #222); margin-top: 3rem; flex-wrap: wrap">
              <div style="margin-right:1rem; width: 32%; flex-wrap: nowrap; display: flex; background: linear-gradient(to bottom right, rgba(72, 72, 212, 0), rgba(241, 104, 104, 0)), #FFFAF0 center center no-repeat; border-radius: 10px; padding: 1rem;">
                <i class="fas fa-wrench fa-4x" style="margin-right: 1rem;"></i>
                <p>Extração de dados via Scrapping  das secretarias de saúde dos estados</p>
              </div>
              <div style="margin-right:1rem; width: 33%; flex-wrap: nowrap; display: flex; background: linear-gradient(to bottom right, rgba(72, 72, 212, 0), rgba(241, 104, 104, 0)), #FFFAF0 center center no-repeat; border-radius: 10px; padding: 1rem;">
                <i class="fas fa-cogs fa-4x" style="margin-right: 1rem;"></i>
                <p>Armazenamento e manipulação dos dados</p>
              </div>
              <div style="width: 32%; flex-wrap: nowrap; display: flex; background: linear-gradient(to bottom right, rgba(72, 72, 212, 0), rgba(241, 104, 104, 0)), #FFFAF0 center center no-repeat; border-radius: 10px; padding: 1rem;">
                <i class="fas fa-desktop fa-4x" style="margin-right: 1rem;"></i>
                <p>Visualização</p>
              </div>
              <div style="width: 100%; flex-wrap: nowrap; display: flex; background: linear-gradient(to bottom right, rgba(72, 72, 212, 0), rgba(241, 104, 104, 0)), #FFFAF0 center center no-repeat; border-radius: 10px; padding: 1rem; margin-top: 2rem;">
                <i class="fas fa-clock fa-4x" style="margin-right: 1rem;"></i>
                <p>Projeção de dados! Como este algorítmo, é possível analisar os dados vindos das secretarias de saúde e visualizar um futuro cenário para os dados. Com alta precisão, é possível prever como estará o panorama futuro da COVID em cada estado brasileiro</p>
              </div>
            </div>
          </div> <!-- end of col -->
        </div> <!-- end of row -->
      </div> <!-- end of container --> 
    </div> <!-- end of basic-1 -->
    <!-- end of video -->
    <div class="footer"></div>
    <!-- Contact -->
    <div id="contact" class="form">
        <div class="container">
            <h2>EQUIPE</h2>
            <table class="table table-striped mt-5 equipe">
                <thead>
                  <tr>
                    <th scope="col">Pesquisadores</th>
                    <th scope="col">Titulação</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Laboratório</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rafael T. de Sousa Júnior</td>
                    <td>Prof. Dr. Adjunto</td>
                    <td>---
                        
                    </td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>Francisco Caldas</td>
                    <td>Doutorando</td>
                    <td>PPGEE</td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>Lucas Coelho</td>
                    <td>Mestrando</td>
                    <td>PPGEE</td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>Paulo Henrique Ferreira</td>
                    <td>Mestrando</td>
                    <td>PPGEE</td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>André C. Ribeiro</td>
                    <td>Graduando</td>
                    <td>Engenharia de Redes</td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>Natália A. Marques</td>
                    <td>Graduanda</td>
                    <td>Engenharia de Redes</td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>Nayara Silva</td>
                    <td>Graduanda</td>
                    <td>Ciência da Computação</td>
                    <td>UIoT</td>
                  </tr>
                  <tr>
                    <td>Leonardo O. Almeida</td>
                    <td>Graduando</td>
                    <td>Engenharia de Redes</td>
                    <td>UIoT</td>
                  </tr>
                </tbody>
              </table>
            <div class="row mt-5">
                <div class="col-lg-12 mt-5">
                    <h2>CONTATO</h2>
                    <ul class="list-unstyled li-space-lg">
                        <li class="address">Envie-nos uma mensagem</li>
                        <li><i class="fas fa-map-marker-alt"></i>Universidade de Brasília, Distrito Federal, Brasil</li>
                        <li><i class="fas fa-envelope"></i><a href="mailto:office@leno.com">XXXXXXX@XXXXXXX.com</a></li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of form -->
    <!-- end of contact -->
    </body>
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
  padding-bottom: 30px;
}
.box-howto{
  padding-top: 20px;
  text-align: center;
}
.box-gif{
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
.toCenter{
  align-content: center;
  text-align: center;
  margin: 0 auto;
}
.iconCard:hover{
  transform: scale(1.05);
  transition: 0.15s;
  -webkit-transition: padding 2s;
}
</style>