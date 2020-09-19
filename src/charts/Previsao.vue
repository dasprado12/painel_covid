<template>
    <div id="app">
        <v-card color="grey lighten-4">
            <v-card-title>
                <span class="font-weight-normal">Previsão de Óbitos</span> 
            </v-card-title>
            <v-card-text>
                <vue-apex-charts 
                    type="area" 
                    :options="options" 
                    :series="series"
                    :key="key"
                />  
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        VueApexCharts
    },
    props: [ 'datas', 'obitos', 'projecao', 'exponencial'],
    data(){
        return {
            key: 0,
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
                    categories: this.datas,
                    tickAmount: 6,
                    labels: {
                        datetimeFormatter: {
                            year: 'yyyy'
                        }
                    } 
                }
            },
            numId: 0,
        }
    },
    computed:{
        series(){
            return [{
                    name: "Óbitos",
                    data: this.obitos
                },
                {
                    name: "Projeção - óbitos",
                    data: this.projecao
                }
            ]
        }
    }
}
</script>