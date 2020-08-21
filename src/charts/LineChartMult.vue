<template>
    <div id="app">
        <vue-apex-charts 
            type="area" 
            :options="options" 
            :series="series"
        />
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        VueApexCharts
    },
    props: [ 'time', 'data', 'colors' ],
    data(){
        return {
            options: { 
                dataLabels: {
                    enabled: false,
                }, 
                stroke: { 
                    curve: 'smooth'
                }, 
                chart: { 
                    id: 'vuechart-example' 
                },
                colors: this.colors,
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
            },
            numId: 0
        }
    },
    computed:{
        series(){
            return this.data
        }
    }
}
</script>