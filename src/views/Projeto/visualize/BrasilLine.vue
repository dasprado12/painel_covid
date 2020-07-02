<template>
    <div>
        <v-card flat outlined>
            <v-card-title>
                <span class="font-weight-light"> Total </span> 
                <v-spacer/>
                <v-btn text small class="font-weight-light" @click="changeChart('line')">Linha</v-btn>
                <v-btn text small class="font-weight-light" @click="changeChart('bar')">Barra</v-btn>
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
            // Dados que vao para o lineChart
            type: 'line',
            infectados: [],
            obitos: [],
            numId: 0,

            selected: ['Infectados', 'Obitos'],

            dates: null, // Datas vindos da API
            dados: null, // Dados vindos da API
        }
    },
    async created(){
        this.list_data()
        this.list_dates()
        this.filter_data()
    },
    mounted(){
        this.filter_data()
        // this.modify_dates()
    },
    methods: {
        async list_data(){
            this.dados = (await api_data.get_all_data()).data.map(function(data){ return { num:data.num, obitos: data.obitos, dataExtracao: data.dataExtracao.split('T')[0] } })
        },
        async list_dates(){
            this.dates = (await api_data.get_all_dates()).data.sort().map(function(date){ return date.split('T')[0] })
        },
        changeChart(item){
            this.type = item
            this.numId++
        },
        async filter_data(){
            let dados = (await api_data.get_all_data()).data.map(function(data){ return { num:data.num, obitos: data.obitos, dataExtracao: data.dataExtracao.split('T')[0] } })
            let dates = (await api_data.get_all_dates()).data.sort().map(function(date){ return date.split('T')[0] })
            let filtrado_infectados = []
            let filtrado_obitos = []
            for(let i = 0; i < dates.length; i++ ){
                let infectados = 0
                let obitos = 0
                    for(let j = 0; j < dados.length; j++){
                        this.dates[i]
                        if( dates[i] == dados[j].dataExtracao ){
                            infectados += dados[j].num
                            obitos += dados[j].obitos
                        }
                    }
                    filtrado_infectados.push(infectados)
                    filtrado_obitos.push(obitos)
            }
            this.infectados = filtrado_infectados
            this.obitos = filtrado_obitos
            this.numId++
        }
    },
    watch: {
        dates(val){
            if(val != null){
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