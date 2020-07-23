<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title class="font-weight-normal"> Total - Infectados </v-card-title>
            <v-card-text>
                <one-line-chart
                    v-bind:time="filteredTime"
                    v-bind:data="filteredData"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { Data } from "../../../functions/index.js"
import OneLineChart from "../charts/OneLineChartInfectados.vue"
let api_data = new Data()
export default {
    props: [ 'region', 'range' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            color: '#01fe43',
            time: null,
            data: null,
            filteredData: null,
            filteredTime: null,
            key: 0
        }
    },
    watch: {
        range(val){
            this.filteredData = this.data.slice(val[0], val[1]+1)
            this.filteredTime = this.time.slice(val[0], val[1]+1)
        },
    },
    created(){
        this.historic_data()
        this.aux++
    },
    methods: {
        async historic_data(){
            let data = (await api_data.get_hist_data()).data.map(function(item){ return item.num })
            let time = (await api_data.get_all_dates()).data.map(function(item){ return item.split("T")[0] })
            this.data = data
            this.time = time
            this.filteredData = data
            this.filteredTime = time
        },
    }
}
</script>