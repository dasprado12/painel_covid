<template>
    <div>
        <v-card color="grey lighten-4">
            <v-card-title> 
                <span class="font-weight-normal">Previsão de Infectados</span> 
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <one-line-chart
                    :time="dataset.dates"
                    :data="dataset.num"
                    :color="color"
                    name="Previsão Infectados"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/LineBar.vue"

export default {
    props: [ 'dataset'],
    components: {
        OneLineChart
    },
    data(){
        return {
            key: 0,
            color: [ "#eb950c", "#454545" ]
        }
    },
}
</script>

<style scoped>
.mms{
    font-size: 12px;
}
</style>