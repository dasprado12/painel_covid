<template>
    <div>
        <v-card outlined color="grey lighten-4"> 
            <v-card-title class="font-weight-light"> Acumulado - Infectados por região </v-card-title>
            <line-chart
                v-bind:time="time"
                v-bind:data="data"
                :key="numId"
            />
        </v-card>
    </div>
</template>

<script>
import lineChart from "../charts/MixLineChartInf"
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'type', 'regions' ],
    components: { lineChart },
    data(){
        return {
            time: [],
            data: null,
            items: [],
            numId: 0
        }
    },
    async mounted(){    
        this.get_many_data()
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
            this.time = (await api_data.get_all_dates()).data.map(function(item){ return item.split("T")[0] })
            this.numId++
        }
    }       
}
</script>