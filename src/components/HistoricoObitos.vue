<template>
    <div>
        <v-card elevation="3" color="grey lighten-4">
            <v-card-title class="font-weight-normal"> Cumulativo de óbitos </v-card-title>
            <v-card-text>
                <one-line-chart
                    :time="dataset.dates"
                    :data="dataset.obitos"
                    :color="color"
                    :label="label"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/SimpleLineChart.vue"

export default {
    props: [ 'dataset' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            label: "Óbitos",
            color: [ "#bf0000" ],
            filteredTime: null,
            filteredData: null,
        }
    },
    computed: {
        teste(){
            return this.dataset.map(function(item){return item})
        }
    },
}
</script>