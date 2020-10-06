<template>
    <div>
        <v-card outlined color="grey lighten-4"> 
            <v-card-title class="font-weight-light"> Previao de Infectados por região </v-card-title>
            <line-chart
                :colors="colors"
                :time="time"
                :data="data"
                :key="numId"
            />
        </v-card>
    </div>
</template>

<script>
import lineChart from "../charts/LineChartMult.vue"
import { Data } from "../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'regions' ],
    components: { lineChart },
    data(){
        return {
            colors: [ "#2b5875", "#c2c41b", "#00a830", "#a80076", "#e30909", "#09e3dc", "#e39309"  ],
            time: [],            
            data: null,
            numId: 0,
        }
    },
    mounted(){
        this.get_many_prevision('Total DF')
        
    },
    watch: {
        regions(val){
            let string = val.toString()
            this.get_many_prevision(string)
        }
    },
    methods: {
        async get_many_prevision(string){
            let numeros = (await api_data.get_many_prevision(string)).data.map(function(item){ return item.num })
            this.data=[{"name": string, "data":numeros}]
            this.time=(await api_data.get_many_prevision(string)).data.map(function(item){ return item.dataExtracao })
        console.log(this.data)
        console.log(this.time)
this.numId++
        }
    }       
}
</script>