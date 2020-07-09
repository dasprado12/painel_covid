<template>
    <div id="app">
        <vue-apex-charts 
            width="100%"
            :type="type" 
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
            selected: ['Infectados', 'Obitos'],
            nulo: [0],
            options: {
                stroke: {
                    curve: 'smooth'
                },
                colors: [ '#2E93fA', '#c21f1f' ],
                chart: {
                    id: 'vuechart-example',
                    
                },
                xaxis: {
                    categories: [1, 2, 3]
                }
            },
            series: [
                {
                    name: 'Infectados',
                    data: [20, 22, 23]
                }
            ],
            numId: 0
        }
    },
    created(){
    },
    methods: {

    }
}
</script>

<style scoped>
#RA_name{
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 25px;
}

.selector{
    align-content: center;
    text-align: center;
}
</style>