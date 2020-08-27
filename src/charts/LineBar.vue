<template>
    <div id="app">
        <vue-apex-charts 
            width="100%"
            type="line"
            :options="options" 
            :series="series"
        ></vue-apex-charts>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    props: [ 
        'mms', 'data', 'time', 'color', 'name'
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
                noData: {
                    text: 'Carregando...',
                    align: 'center',
                    verticalAlign: 'middle',
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: undefined,
                        fontSize: '14px',
                        fontFamily: undefined
                    }
                },
                dataLabels: {
                    enabled: false
                },
                annotations: {
                    xaxis: [
                        {
                        x: new Date().getTime(),
                        borderColor: '#775DD0',
                        label: {
                            style: {
                            },
                            text: 'Hoje'
                        }
                        }
                    ]
                },
                stroke: {
                    curve: 'smooth',
                    width: [ 0,2 ]
                },
                colors: this.color,
                chart: { id: 'vuechart-example1' },
                xaxis: { 
                    type: 'datetime',
                    categories: this.time,
                },
            }
        },
        series(){
            return [{
                    type: 'column',
                    name: this.name,
                    data: this.data 
                },{
                    type: 'line',
                    name: `MM ${this.name}`,
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