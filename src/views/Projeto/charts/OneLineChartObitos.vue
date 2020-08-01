<template>
    <div id="app">
        <vue-apex-charts 
            width="100%"
            type="area" 
            :options="options" 
            :series="series"
            :key="key"
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
            key: 0,
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
                chart: { id: 'vuechart-example' },
                xaxis: { categories: this.time }
            }
        },
        series(){
            return [{
                    name: 'Óbitos',
                    data: this.data
                }]
        }
    },
    created(){
        this.key++
    },
    methods: {
    }
}
</script>