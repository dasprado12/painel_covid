<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title> 
                <span class="font-weight-normal"> Óbitos por dia</span> 
                <v-spacer></v-spacer>
                <span class="font-weight-thin mms">Média Móvel: {{mm}} dias</span>
            </v-card-title>
            <v-card-text>
                <one-line-chart
                    :mms="dataset.MMobitos"
                    :time="dataset.dates"
                    :data="dataset.Diaobitos"
                    :color="color"
                    name="Óbitos"
                    :key="key"
                />
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import OneLineChart from "../charts/LineBar.vue"

export default {
    props: [ 'dataset', 'mm' ],
    components: {
        OneLineChart
    },
    data(){
        return {
            key: 0,
            color: [ "#e8a7aa", "#454545" ]
        }
    },
}
</script>

<style scoped>
.mms{
    font-size: 12px;
}
</style>