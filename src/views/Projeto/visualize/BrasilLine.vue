<template>
    <div>
        <v-card flat>
            <v-card-title>
                <span class="font-weight-light"> Total </span>
                <v-spacer/>
                <v-btn text @click="changeChart('line')">Line</v-btn>
                <v-btn text @click="changeChart('bar')">Bar</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <line-chart
                    v-bind:infected="infectados"
                    v-bind:time="dates"
                    v-bind:death="obitos"
                    v-bind:type="type"
                    :key="numId"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { Data } from "../../../functions/index.js";
// import dates from "../../../example/dates.js"
import lineChart from "../charts/LineChart.vue"

let api_data = new Data()

export default {
    components: { 
        lineChart
    },
    data(){
        return {
            type: 'line',
            name: 'Brasil',
            selected: ['Infectados', 'Obitos'],
            dates: null,
            dados: null,
            time: null,
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
        this.list_data()
        this.list_dates()
    },
    mounted(){
        this.time = this.dates.map(function(time){
            return time.split('T')[0].slice(5)
        })
        
        this.filter_data()
        this.numId++
    },
    methods: {
        async list_data(){
            this.dados = (await api_data.get_all_data()).data
        },
        async list_dates(){
            this.dates = (await api_data.get_all_dates()).data.sort()
            // this.dates = dates.
        },
        changeChart(item){
            this.type = item
            this.numId++
        },
        filter_data(){
            for(let i = 0; i < this.dates.length; i++ ){
                let infectados = 0
                let obitos = 0
                for(let j = 0; j < this.dados.length; j++){
                    if( this.dates[i] == this.dados[j].dataExtracao ){
                        infectados += this.dados[j].num
                        obitos += this.dados[j].obitos
                    }
                }
                this.dados_filtrados.infectados.push(infectados)
                this.dados_filtrados.obitos.push(obitos)
            }
            this.infectados = this.dados_filtrados.infectados
            this.obitos = this.dados_filtrados.obitos
            this.numId++
        }
    },
    watch: {
        dados(val){
            if(val != []){
                this.filter_data()
            }
        },
        selected: function(val) {
            if( !val.includes('Obitos') ){
                this.obitos = [0]
                this.numId++
            }
            if( val.includes('Obitos') ){
                this.obitos = this.dados_filtrados.obitos
                this.numId++
            }
            if( !val.includes('Infectados') ){
                this.infectados = [0]
                this.numId++
            }
            if( val.includes('Infectados') ){
                this.infectados = this.dados_filtrados.infectados
                this.numId++
            }
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