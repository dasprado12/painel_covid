<template>
    <div>
        <v-card color="grey lighten-4"> 
            <v-card-title class="font-weight-light"> Total - Infected by region </v-card-title>
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
    props: [ 'uf', 'type', 'regions' ],
    components: { lineChart },
    data(){
        return {
            colors: [ "#2b5875", "#c2c41b", "#00a830", "#a80076", "#e30909", "#09e3dc", "#e39309"  ],
            time: [],
            data: null,
            items: [],
            numId: 0,
        }
    },
    mounted(){
        this.get_many_data('Total DF')
    },
    watch: {
        regions(val){
            let string = val.toString()
            this.get_many_data(string)
        }
    },
    methods: {
        async get_many_data(string){
            this.data = (await api_data.get_many_data(this.type, string)).data
            this.time = (await new Data(this.uf).get_all_dates()).data.map(function(item){ return item.split("T")[0] })
            this.numId++
        }
    }       
}
</script>