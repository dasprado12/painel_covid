<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title> 
                <span class="font-weight-normal">Óbitos por dia</span> 
                <v-spacer></v-spacer>
                <span class="font-weight-thin mms">Média Móvel: 15 dias</span>
            </v-card-title>
            <v-card-text>
                <one-line-chart
                    v-bind:mms="filteredMovel"
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
import OneLineChart from "../charts/InfectadosObitos.vue"
let api_data = new Data()
export default {
    props: [ 'region', 'range' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            color: '#01fe43',
            mediaMovel: null,
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
            this.filteredData = this.data.slice(val[0], val[1]+1)
            this.filteredTime = this.time.slice(val[0], val[1]+1)
            this.filteredMovel= this.mediaMovel.slice(val[0], val[1])
        }
    },
    methods: {
        async historic_data(){
            let data = (await api_data.get_hist_data()).data.map(function(item){return item.obitos})
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
            let mediaMovel = this.mms(arr_return, 15)
            this.mediaMovel = mediaMovel
            this.filteredMovel = mediaMovel
            this.data = arr_return
            this.filteredData = arr_return
        },
        mms(data, period){
            let arr_ret = []
            for(let i = 0; i < data.length; i++){
                if(i < period){
                    arr_ret.push(0)
                }else{
                    let aux = 0
                    for(let j = 0; j < period; j++){
                        aux += data[i - j]
                    }
                    arr_ret.push(~~(aux/period))
                }
            }
            return arr_ret
        }
    }
}
</script>

<style scoped>
.mms{
    font-size: 12px;
}
</style>