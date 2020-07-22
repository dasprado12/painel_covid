<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title class="font-weight-normal"> Infectados por dia </v-card-title>
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
import OneLineChart from "../charts/InfectadosDia.vue"
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
    created(){
        this.historic_data()
        this.aux++
    },
    watch: {
        range(val){
            this.filteredData = this.data.slice(val[0], val[1])
            this.filteredTime = this.time.slice(val[0], val[1])
        }
    },
    methods: {
        async historic_data(){
            let data = (await api_data.get_hist_data()).data.map(function(item){return item.num})
            let time = (await api_data.get_all_dates()).data
            this.time = time.map(function(item){ return item.split("T")[0] })
            this.filteredTime = this.time
            let arr_return = []
            for(let i = 0; i < data.length; i++){
                if(i == 0){
                    arr_return.push(data[i])
                }else{
                    arr_return.push(data[i] - data[i-1])
                }
            }
            this.data = arr_return
            this.filteredData = arr_return
        }
    }
}
</script>