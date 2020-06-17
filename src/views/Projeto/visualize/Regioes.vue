<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12">
                <tree-chart v-bind:region="region"></tree-chart>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="6">
                <region-line-chart
                    v-bind:region="region"
                />
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <region-bar-chart
                    v-bind:region="region"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import data from "../../../example/index.js"
import RegionBarChart from "./RegionBarChart.vue"
import RegionLineChart from "./RegionLineChart.vue"
import TreeChart from "./TreeChart.vue"

export default {
    props: [ 'region' ],
    components: { RegionBarChart, RegionLineChart, TreeChart },
    data() {
        return {
            data: null
        }
    },
    watch: {
        region(value){
            console.log('Regiao Pesquisada:' + value)
            this.get_data(value)
        }
    },
    methods: {
        get_data(region){
            console.log('oi'+region)
            this.data = data.DF
        }
    }
}
</script>