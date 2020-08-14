<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title> 
                <span class="font-weight-normal">Infectados por dia</span> 
                <v-spacer></v-spacer>
                <span class="font-weight-thin mms">Média Móvel: 7 dias</span>
            </v-card-title>
            <v-card-text>
                <one-line-chart
                    v-bind:mms="mms(dataset.num, 7)"
                    v-bind:time="dataset.dates"
                    v-bind:data="dia(dataset.num)"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/InfectadosObitos.vue"

export default {
    props: [ 'dataset' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            key: 0
        }
    },
    methods: {
        dia(data){
            let arr_ret = []
            for(let i = 0; i < data.length; i++){
                if(i == 0){
                    arr_ret.push(data[i])
                }else{
                    arr_ret.push( (data[i] - data[i-1]) < 0 ? 0 : data[i] - data[i-1] )
                }
            }
            arr_ret[0] = arr_ret[1]
            return arr_ret
        },
        mms(data, period){
            let arr_ret = []
            data = this.dia(data)
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