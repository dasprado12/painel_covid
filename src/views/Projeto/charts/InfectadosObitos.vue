<template>
    <div id="app">
        <vue-apex-charts 
            width="100%"
            type="bar" 
            :options="options" 
            :series="series"
        ></vue-apex-charts>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    props: [ 
        'data', 'time'
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
                colors: [ "#bf000050" ],
                chart: { id: 'vuechart-example1' },
                xaxis: { categories: this.time }
            }
        },
        series(){
            return [{
                    name: 'Infectados',
                    data: this.data 
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