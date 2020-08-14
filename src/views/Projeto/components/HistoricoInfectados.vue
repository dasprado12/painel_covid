<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title class="font-weight-normal"> Cumulativo de infectados </v-card-title>
            <v-card-text>
                <one-line-chart
                    :time="dataset.dates"
                    :data="dataset.num"
                    :color="color"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/OneLineChart.vue"

export default {
    props: [ 'dataset' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            color: [ "#eb950c" ],
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