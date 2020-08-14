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
                    :mms="mms(dataset.num, 7)"
                    :time="dataset.dates"
                    :data="dia(dataset.num)"
                    :color="color"
                    name="Infectados"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/LineBar.vue"

export default {
    props: [ 'dataset' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            key: 0,
            color: [ "#eb950c", "#454545" ]
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
            data = this.dia(data)
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