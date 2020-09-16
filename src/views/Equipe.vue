<template>
  <div class="equipe">
    <div class="titulo_principal"><br>
        <h2 class="font-weight-bold text-center"> Equipe </h2><br>
    </div>
      <div class="flex-container">
        <div class="column">
          <v-simple-table fixed-header height="800px" class="table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Pesquisadores</th>
                  <th class="text-left">Titulação</th>
                  <th class="text-left">Curso</th>
                  <th class="text-left">Laboratório</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.role }}</td>
                  <td>{{ item.curso }}</td>
                  <td>{{ item.instituto }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      desserts: [
          {
            name: 'Rafael T. de Sousa Júnior',
            role: 'Prof. Dr. Adjunto',
            curso: 'UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Francisco L. Caldas',
            role: 'Doutorando',
            curso: 'PPGEE | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'André Lima Férrer de Almeida',
            role: 'Prof. Dr.',
            curso: 'UFC',
            instituto: 'GPSI'
          },
          {
            name: 'Diego Aguiar Sousa',
            role: 'Prof. Dr.',
            curso: 'IFCE',
            instituto: 'GPSI'
          },
          {
            name: 'Tarcisio Ferreira Maciel',
            role: 'Prof. Dr.',
            curso: 'UFC',
            instituto: 'GPSI'
          },
          {
            name: 'Jonathas Alves',
            role: 'Mestrando',
            curso: 'PPGEE | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Lucas Coelho',
            role: 'Mestrando',
            curso: 'PPGEE | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Paulo Henrique Ferreira',
            role: 'Mestrando',
            curso: 'PPGEE | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'André C. Ribeiro',
            role: 'Graduando',
            curso: 'Engenharia de Redes | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Daniel Prado',
            role: 'Graduando',
            curso: 'Engenharia de Redes | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Natália A. Marques',
            role: 'Graduando',
            curso: 'Engenharia de Redes | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Nayara Silva',
            role: 'Graduando',
            curso: 'Ciência da Computação | UnB',
            instituto: 'UIoT'
          },
          {
            name: 'Victor Hugo Campos de Oliveira',
            role: 'Graduando',
            curso: 'Computação | UnB',
            instituto: 'UIoT'
          },
        ],
      }
    },
}
</script>

<style scoped>


.titulo_principal{
  margin-right: 20%;
  margin-left: 20%;
  text-align: center;
  margin-top: 30px;
}
.flex-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.column {
  width: 80%;
}


</style>
