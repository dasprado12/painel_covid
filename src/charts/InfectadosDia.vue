<template>
    <div id="app">
        <vue-apex-charts 
            width="100%"
            :options="options" 
            :series="series"
        ></vue-apex-charts>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    props: [ 
        'mms', 'data', 'time'
    ],
    components: {
        VueApexCharts
    },
    data(){
        return {
            numId: 0
        }
    },
    computed:{
        options(){
            return {
                bar: {
                    colors: 'blue'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: [ 0,4 ]
                },
                colors: [ "#eb950c", "#454545" ],
                chart: { 
                    id: 'vuechart-example1' 
                },
                xaxis: {
                    type: 'datetime', 
                    categories: this.time 
                },
                noData: {
                    text: "Carregando..."
                },
            }
        },
        series(){
            return [{
                    name: 'Infectados',
                    type: 'bar',
                    data: this.data 
                },{
                    name: 'MM Infectados',
                    type: 'line',
                    data: this.mms
                }]
        }
    },
    beforeMount(){
        this.key++
    },
    methods: {
    }
}
</script>