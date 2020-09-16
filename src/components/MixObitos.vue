<template>
    <div>
        <v-card outlined color="grey lighten-4"> 
            <v-card-title class="font-weight-light"> Acumulado - Óbitos por região </v-card-title>
            <line-chart
                :time="time"
                :data="data"
                :colors="colors"
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
            time: [],
            data: null,
            items: [],
            colors: [ '#e85046', '#e88746', '#e8c046', '#851c3b', '#481c85' ],
            numId: 0
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
            this.items = (await api_data.get_all_regions()).data
            this.data = (await api_data.get_many_data('obitos', string)).data
            this.time = (await new Data(this.uf).get_all_dates()).data.map(function(item){ return item.split("T")[0] })
            this.numId++
        }
    }       
}
</script>