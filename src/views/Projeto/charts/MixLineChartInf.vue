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
            options: {  stroke: { curve: 'smooth'}, chart: { id: 'vuechart-example', },
                xaxis: { categories: this.time }
            },
            series: this.data,
            numId: 0
        }
    },
}
</script>