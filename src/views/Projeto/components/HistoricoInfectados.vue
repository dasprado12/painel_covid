<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title class="font-weight-normal"> Total - Infectados </v-card-title>
            <v-card-text>
                <one-line-chart
                    v-bind:time="dataset.dates"
                    v-bind:data="dataset.num"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/OneLineChartInfectados.vue"

export default {
    props: [ 'dataset' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            filteredTime: null,
            filteredData: null,
        }
    },
    computed: {
        teste(){
            return this.dataset.map(function(item){return item})
        }
    },
    watch: {
        dataset(){
            console.log('oi')
        },
    },
}
</script>