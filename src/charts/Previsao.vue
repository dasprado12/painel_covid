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
    props: [ 'datas', 'obitos', 'projecao'],
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
                    id: 'vuechart-example' ,
                    animations: {
                        enabled: false
                    }
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