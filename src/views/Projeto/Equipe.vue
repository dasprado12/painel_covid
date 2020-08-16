<template>
  <div class="equipe">
    <div class="titulo_principal"><br>
        <h2 class="font-weight-bold">Nossa Equipe </h2><br>
    </div>
      <div class="flex-container">
        <div class="column">
          <v-simple-table fixed-header height="500px" class="table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nome</th>
                  <th class="text-left">Ocupação</th>
                  <th class="text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.role }}</td>
                  <td>{{ item.email }}</td>
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
            email: 'xxxxxxxxxxx@xxxx.com'
          },
          {
            name: 'Francisco L. Caldas',
            role: 'Doutorando',
            email: 'xxxxxxxxxxx@xxxx.com'
          },
          {
            name: 'Lucas Coelho',
            role: 'Mestrando',
            email: 'xxxxxxxxxxx@xxxx.com'
          },
          {
            name: 'Jonathas Alves',
            role: 'Mestrando',
            email: 'xxxxxxxxxxx@xxxx.com'
          },
          {
            name: 'Daniel Prado',
            role: 'Graduando',
            email: 'xxxxxxxxxxx@xxxx.com'
          },
          {
            name: 'Natália A. Marques',
            role: 'Graduando',
            email: 'xxxxxxxxxxx@xxxx.com'
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
