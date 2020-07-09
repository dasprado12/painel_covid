<template>
    <div class="dados">
        <div class="regioes">
            <v-container>
                <h1 class="font-weight-bold">Região</h1>
                <v-divider/>
                <v-container fluid grid-list-md>
                    <h2 class="font-weight-normal">Historico</h2>
                    <v-divider/>
                    <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md6>
                            <v-layout row wrap>
                                <v-flex d-flex>
                                    <v-layout row wrap>
                                    <v-flex xs12 >
                                        <historico-infectados v-bind:region="region"/>
                                    </v-flex>
                                    <v-flex xs12 >
                                        <historico-obitos v-bind:region="region"/>
                                    </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex d-flex xs12 sm6 md6>
                            <v-card width="100%">
                                <v-card-title primary class="yellow darken-2 title">Mapa</v-card-title>
                                <v-divider/>
                                <v-card-text>
                                    <simple-map/>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout><br>
                    <v-layout>
                        <v-flex row wrap>
                            <v-col>
                                <h2 class="font-weight-normal">Por região</h2>
                            </v-col>
                            <v-col>
                                <v-select dense v-model="region" :items="regions" attach chips multiple/>
                            </v-col>
                        </v-flex>
                    </v-layout>
                    <v-divider/>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <mix-infectados v-bind:regions="region"/>
                            </v-col>
                            <v-col cols="6">
                                <tree-infectados v-bind:regions="region"/>
                            </v-col>
                            <v-col cols="6">
                                <mix-obitos v-bind:regions="region"/>
                            </v-col>
                            <v-col cols="6">
                                <tree-obitos v-bind:regions="region"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-container>
            </v-container>
        </div>
    </div>
</template>

<script>
import historicoInfectados from "./components/HistoricoInfectados.vue"
import historicoObitos from "./components/HistoricoObitos.vue"
import simpleMap from "./components/SimpleMap.vue"
import mixInfectados from "./components/MixInfectados.vue"
import mixObitos from "./components/MixObitos.vue"
import treeInfectados from "./components/TreeInfectados.vue"
import treeObitos from "./components/TreeObitos.vue"

import { Data } from "../../functions/index.js"
let api_data = new Data()

export default {
    components: {
        historicoInfectados,
        historicoObitos,
        simpleMap,
        mixInfectados,
        mixObitos,
        treeInfectados,
        treeObitos
    },
    data: () => ({
        dates: null,
        region: [],
        regions: null,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }),
    mounted(){
        this.get_info()
    },
    methods:{
        async get_info(){
            this.dates = (await api_data.get_all_dates()).data
            this.regions = (await api_data.get_all_regions()).data
            this.max = this.dates.length
        },
        position(val){
            return this.dates[val]
        }
    }
}
</script>

<style scoped>
h1, h2{
    color: rgb(77, 77, 77);
}
</style>