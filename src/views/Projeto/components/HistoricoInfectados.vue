<template>
    <div>
        <v-card color="">
            <v-card-title class="green lighten-4"> Infectados </v-card-title>
            <v-card-text>
                <one-line-chart
                    v-bind:time="time"
                    v-bind:data="data"
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
    props: [ 'region' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            color: '#01fe43',
            time: null,
            data: null,
            key: 0
        }
    },
    created(){
        this.historic_data()
        this.aux++
    },
    methods: {
        async historic_data(){
            let data = (await api_data.get_hist_data()).data
            let time = (await api_data.get_all_dates()).data

            data = data.map(function(item){ return item.num })

            this.time = time.map(function(item){ return item.split("T")[0] })
            this.data = data
        }
    }
}
</script>