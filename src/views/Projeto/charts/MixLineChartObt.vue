<template>
    <div id="app">
        <vue-apex-charts :type="type" :options="options" :series="series"/>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        VueApexCharts
    },
    props: [ 'time', 'data' ],
    data(){
        return {
            type: 'line', 
            options: { 
                colors: [ '#a3212188', '#96a32188', '#bd821c88', '#1394ab88', '#8d13ab88',  ], 
                stroke: { 
                    curve: 'smooth'
                }, 
                chart: {  
                    id: 'vuechart-example', 
                },
                xaxis: { 
                    type: 'datetime',
                    categories: this.time
                }
            },
            series: this.data,
            numId: 0
        }
    },
}
</script>