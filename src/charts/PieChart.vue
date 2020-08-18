<template>
    <div id="chart">
        <vue-apex-charts
            type="donut" 
            :options="chartOptions" 
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
    props: [ 'colors', 'data', 'regions' ],
    data(){
        return {
            series: this.data.reverse(),
            chartOptions: {
                chart: {
                    type: 'pie',
                },
                colors: this.colors,
                labels: this.regions.reverse(),
                responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
                }]
            },
        }
    }
}
</script>