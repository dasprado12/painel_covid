<template>
    <div>
        <div class="infectados">
            <v-row>
                <v-col cols="6">
                    <many-line-chart
                        v-bind:title="titleInf"
                        v-bind:type="num" 
                        v-bind:last_time="last_time"
                        v-bind:regions="regions"
                    />
                </v-col>
                <v-col cols="6">
                    <tree-chart-inf 
                        v-bind:color="green"
                        v-bind:title="titleInf"
                        v-bind:last_time="last_time"
                        v-bind:regions="regions"
                    />
                </v-col>
            </v-row>
        </div>
        <div class="obitos">
            <v-row>
                <v-col cols="6">
                    <many-line-chart 
                        v-bind:title="titleObt"
                        v-bind:type="obitos"
                        v-bind:last_time="last_time"
                        v-bind:regions="regions"
                    />
                </v-col>
                <v-col cols="6">
                    <tree-chart-inf 
                        v-bind:color="red"
                        v-bind:title="titleObt"
                        v-bind:last_time="last_time"
                        v-bind:regions="regions"
                    />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import ManyLineChart from "../visualize/RegionLineChart.vue"
import TreeChartInf from "../visualize/TreeChartInf.vue"

export default {
    components: { ManyLineChart, TreeChartInf },
    props: [ 'regions', 'last_time' ],
    data(){
        return {
            green: 'green',
            red: 'red',
            titleInf: "Infectados por Região",
            titleObt: "Óbitos por Região",
            num: 'num',
            obitos: 'obitos'
        }
    }
}
</script>