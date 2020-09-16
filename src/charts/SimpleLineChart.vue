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
        'data', 'time', 'color', 'label'
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
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: [ 2 ]
                },
                colors: this.color,
                chart: {
                    type: 'area',
                    id: 'vuechart-example1', 
                },
                xaxis: { 
                    type: 'datetime',
                    categories: this.time,
                    tickAmount: 6,
                    labels: {
                        datetimeFormatter: {
                            year: 'yyyy'
                        }
                    }
                }
            }
        },
        series(){
            return [{
                    name: this.label,
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