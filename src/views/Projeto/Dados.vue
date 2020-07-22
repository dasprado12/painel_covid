<template>
    <div class="dados">
        <div class="regioes">
            <v-container>
                <h1 class="font-weight-bold">Região - DF</h1>
                <v-divider/>
                    <v-layout row wrap>
                        <v-col cols="12">
                            <data-seletor :key="numId" @changeRange="dateRange" v-bind:dates="dates" ></data-seletor>
                        </v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><historico-infectados v-bind:range="range" v-bind:region="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><dia-infectados v-bind:range="range" v-bind:region="region"></dia-infectados></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><historico-obitos v-bind:range="range" v-bind:region="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><dia-obitos v-bind:range="range" v-bind:region="region"/></v-col>
                        <v-col cols="6"><simple-map/></v-col>
                        <v-col cols="6"><g-j-map></g-j-map></v-col>
                    </v-layout>
                    <v-layout>
                        <v-flex row wrap>
                            <v-col>
                                <h2 class="font-weight-normal">Por região</h2>
                            </v-col>
                            <v-col>
                                <v-select label="Escolha as Regiões" dense v-model="region" :items="regions" attach chips multiple/>
                            </v-col>
                        </v-flex>
                    </v-layout>
                    <v-divider/>
                    <v-container>

                    <v-row row wrap v-show="isSelected">
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                            <mix-infectados v-bind:regions="region"/>
                        </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                            <tree-infectados v-bind:regions="region"/>
                        </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                            <mix-obitos v-bind:regions="region"/>
                        </v-col>
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                            <tree-obitos v-bind:regions="region"/>
                        </v-col>
                    </v-row>
                    </v-container>
            </v-container>
        </div>
    </div>
</template>

<script>
import historicoInfectados from "./components/HistoricoInfectados.vue"
import diaInfectados from "./components/DiaInfectados.vue"
import historicoObitos from "./components/HistoricoObitos.vue"
import diaObitos from "./components/DiaObitos.vue"
import simpleMap from "./components/SimpleMap.vue"
import mixInfectados from "./components/MixInfectados.vue"
import mixObitos from "./components/MixObitos.vue"
import treeInfectados from "./components/TreeInfectados.vue"
import treeObitos from "./components/TreeObitos.vue"
import dataSeletor from "./components/Seletor.vue"
import GJMap from './components/GJMap.vue' 

import { Data } from "../../functions/index.js"
let api_data = new Data()

export default {
    components: {
        historicoInfectados,
        diaInfectados,
        historicoObitos,
        diaObitos,
        simpleMap,
        mixInfectados,
        mixObitos,
        treeInfectados,
        treeObitos,
        dataSeletor,
        GJMap
    },
    data: () => ({
        dates: null,
        data: null,
        region: [],
        regions: null,
        isSelected: false,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
        range: null,
        numId: 0
    }),
    async mounted(){
        this.get_info()
    },
    watch: {
        region(val){
            if(val.length == 0){
                this.isSelected = false
            }else{
                this.isSelected = true
            }
        }
    },
    methods:{
        async get_info(){
            this.dates = (await api_data.get_all_dates()).data
            this.regions = (await api_data.get_all_regions()).data
            this.data = (await api_data.get_all_data()).data
            this.max = this.dates.length
            this.numId++
        },
        position(val){
            return this.dates[val]
        },
        dateRange(val){
            this.range = val
        }
    }
}
</script>

<style scoped>
h1, h2{
    color: rgb(77, 77, 77);
}
</style>