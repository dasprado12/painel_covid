<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title class="font-weight-normal"> Total - infectados </v-card-title>
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
            this.time = time.map(function(item){ return item.split("T")[0] })
            this.data = data.map(function(item){ return item.num })
        }
    }
}
</script>