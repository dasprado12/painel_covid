<template>
    <v-card outlined color="grey lighten-4">
        <v-card-title class="font-weight-normal"> Infectados e Óbitos </v-card-title>
        <v-card-text>
            <g-j-map v-bind:data="data"/>
        </v-card-text>
    </v-card>
</template>

<script>
import GJMap from "../maps/GJMap.vue"
import { Data } from "../functions/index.js"

let api_data = new Data()

export default {
    components: {
        GJMap
    },
    data(){
        return {
            data: null,
        }
    },
    async mounted(){

        this.data = (await api_data.get_region_by_date('20202-03-27')).data
    }
}
</script>