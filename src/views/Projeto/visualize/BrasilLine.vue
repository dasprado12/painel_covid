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
import data from "../../../example/index.js"
import dates from "../../../example/dates.js"
import lineChart from "../charts/LineChart.vue"

export default {
    components: { 
        lineChart
    },
    data(){
        return {
            type: 'line',
            name: 'Brasil',
            selected: ['Infectados', 'Obitos'],
            dates: dates.dates,
            dados: data.DF,
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
    mounted(){
        this.filter_data()
        this.numId++
    },
    methods: {
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
        }
    },
    watch: {
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