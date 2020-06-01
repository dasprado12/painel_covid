<template>
    <div>
        <line-chart
            v-bind:data_inf="filtrado_inf.data"
            v-bind:time_inf="filtrado_inf.time"
            v-bind:name_inf="filtrado_inf.name"
            v-bind:data_obt="filtrado_obt.data"
            v-bind:time_obt="filtrado_obt.time"
            v-bind:name_obt="filtrado_obt.name"
            :key="numId"
        />
    </div>
</template>

<script>
import data from "../../../../example/index.js"

import lineChart from "./LineChart.vue"

export default {
    props: [ 'city' ],
    components: { lineChart },
    data(){
        return {
            dados: data.DF,
            filtrado_inf: {
                data: [],
                time: [],
                name: 'chart'
            },
            filtrado_obt: {
                data: [],
                time: [],
                name: 'chart'
            }
        }
    },
    created(){
        this.filter_data()
    },
    methods: {
        filter_data(){
            this.filtrado_inf = {
                data: [],
                time: [],
                name: 'chart'
            },
            this.filtrado_obt = {
                data: [],
                time: [],
                name: 'chart'
            }
            for(let i = 0; i < this.dados.length; i++){
                if(this.dados[i].regiao.toUpperCase() == this.city){
                    this.selecionado = this.dados[i].regiao
                    this.filtrado_inf.data.push(this.dados[i].num)
                    this.filtrado_inf.time.push(this.dados[i].dataExtracao)
                    this.filtrado_inf.name = this.dados[i].regiao
                    this.filtrado_obt.data.push(this.dados[i].obitos)
                    this.filtrado_obt.time.push(this.dados[i].dataExtracao)
                    this.filtrado_obt.name = this.dados[i].regiao
                }
            }
            this.numId++
        }
    }
}
</script>