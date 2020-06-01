<template>
    <div id="app">
        <vue-apex-charts 
            width="100%"
            type="line" 
            :options="options" 
            :series="series"
            :key="numId"
        ></vue-apex-charts>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    props: [ 
        'infected', 'time', 'death'
    ],
    components: {
        VueApexCharts
    },
    data(){
        return {
            selected: ['Infectados', 'Obitos'],
            nulo: [0],
            filtrado_inf: {
                data: [],
                time: [],
                name: 'chart'
            },
            filtrado_obt: {
                data: [],
                time: [],
                name: 'chart'
            },
            options: {
                annotations: {
                    yaxis: [
                        {
                            y: 600,
                            borderColor: '#00E396',
                            label: {
                                borderColor: '#00E396',
                                style: {
                                    color: '#111111',
                                    background: '#dadada'
                                },
                                text: 'Capacidade do sistema de saúde'
                            }
                        }
                    ]
                },
                stroke: {
                    curve: 'smooth',
                },
                colors: [ '#2E93fA', '#c21f1f' ],
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: this.time
                }
            },
            series: [
                {
                    name: 'Infectados',
                    data: this.infected
                },
                {
                    name: 'Óbitos',
                    data: this.death
                }
            ],
            numId: 0
        }   
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