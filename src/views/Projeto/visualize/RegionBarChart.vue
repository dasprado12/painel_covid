<template>
    <div>
        <v-card flat outlined>
            <v-card-title>
                <span class="font-weight-light">Cidades</span>
                <v-spacer/>
                <v-select dense v-model="regions" :items="items" attach chips multiple/>
            </v-card-title>
            <v-divider></v-divider>
            <bar-chart
                v-bind:infected="infectados"
                v-bind:time="dates"
                v-bind:death="obitos"
                v-bind:region="regions"
                :key="numId"
            />
            <!-- <v-card-actions>
                <v-pagination
                    v-model="page"
                    :length="3"
                    :total-visible="7"
                ></v-pagination>
            </v-card-actions> -->
        </v-card>
    </div>
</template>

<script>
// import data from "../../../example/index.js"
// import dates from "../../../example/dates.js"
import barChart from "../charts/BarChart.vue";
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    props: [ 
    ],
    components: { 
        barChart
    },
    data(){
        return {
            page: 1,
            drawer: true,
            regions: [ ],
            items: null,
            name: 'DF',
            selected: [],
            dates: null,
            dados: null,
            dados_filtrados: {
                infectados: [],
                dia: [],
                obitos: []
            },
            infectados: [],
            dia: [],
            obitos: [],
            numId: 0
        }
    },
    async created(){
        this.dados = (await api_data.get_all_data()).data
    },
    mounted(){
        this.get_regions()
        this.filter_data(this.regions)
        this.numId++
    },
    methods: {
        async get_regions(){
            this.items = (await api_data.get_all_regions()).data
        },
        async filter_data(regions){
            let day = (await api_data.get_last_date()).data

            //para cada regiao
            for(let i = 0; i < regions.length; i++ ){
                let infectados = 0
                let obitos = 0
                for(let j = 0; j < this.dados.length; j++){
                    //compara se a regiao coincide
                    if( regions[i] == this.dados[j].regiao.toUpperCase() ){
                        //compara se a data coincide
                        
                        if(day == this.dados[j].dataExtracao){
                            infectados += this.dados[j].num
                            obitos += this.dados[j].obitos
                        }
                    }
                }
                this.dados_filtrados.infectados.push(infectados)
                this.dados_filtrados.obitos.push(obitos)
            }
            this.infectados = this.dados_filtrados.infectados
            this.obitos = this.dados_filtrados.obitos
        }
    },
    watch: {
        regions: function(val) {
            this.dados_filtrados = {
                infectados: [],
                dia: [],
                obitos: []
            }
            this.filter_data(val)
            this.numId++
        }
    }
}
</script>

<style scoped>
.selector{
    text-align: center;
    align-content: center;
}
</style>


