<template>
    <div>
        <v-card color="">
            <v-card-title class="red darken-2"> Óbitos </v-card-title>
            <v-card-text>
                <one-line-chart
                    v-bind:time="time"
                    v-bind:data="data"
                    v-bind:color="color"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { Data } from "../../../functions/index.js"
import OneLineChart from "../charts/OneLineChartObitos.vue"
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
            this.data = (await api_data.get_hist_data()).data
            let data = (await api_data.get_all_data()).data
            let time = (await api_data.get_all_dates()).data
            let arr_return= []
            for(let i = 0; i < time.length; i++){
                let aux = 0;
                for(let j = 0; j < data.length; j++){
                    if(time[i] == data[j].dataExtracao){
                        aux = aux + data[j].obitos
                    }
                }
                arr_return.push(aux)
            }
            this.time = time.map(function(item){ return item.split("T")[0] })
            this.data = arr_return
            this.aux++
        }
    }
}
</script>