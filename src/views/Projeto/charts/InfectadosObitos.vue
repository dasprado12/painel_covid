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
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                colors: [ "#e8a7aa", "#82c7ff" ],
                chart: { id: 'vuechart-example1' },
                xaxis: { categories: this.time }
            }
        },
        series(){
            return [{
                    type: 'bar',
                    name: 'Óbitos',
                    data: this.data 
                },{
                    type: 'line',
                    name: 'MM Óbitos',
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