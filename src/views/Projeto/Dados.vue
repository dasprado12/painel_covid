<template>
    <div class="dados">
        <div class="regioes">
            <v-container>
                <h1 class="font-weight-bold">Região - DF</h1>
                <teste></teste>
                <v-divider/>
                    <v-layout row wrap>
                        <v-col cols="12">
                            <data-seletor @changeRange="dateRange" v-bind:dates="rawData.dates"/>
                        </v-col>
                        <v-col cols="12">
                            <v-card outlined color="grey lighten-4">
                                <v-layout>
                                    <v-col cols="6">oi</v-col>
                                    <v-divider vertical/>
                                    <v-col cols="6">
                                        Média móvel:
                                        <v-btn small @click="changeMM(7)" >7</v-btn>
                                        <v-btn small @click="changeMM(15)" >15</v-btn>
                                        <v-btn small @click="changeMM(21)" >21</v-btn>
                                    </v-col>
                                </v-layout>
                            </v-card>
                        </v-col>
                        <v-col xl="3" lg="6" md="6" sm="6" xs="12"><historico-infectados :dataset="filteredData" /></v-col>
                        <v-col xl="3" lg="6" md="6" sm="6" xs="12"><dia-infectados :dataset="filteredData" :mm="currentMM" /></v-col>
                        <v-col xl="3" lg="6" md="6" sm="6" xs="12"><historico-obitos :dataset="filteredData" /></v-col>
                        <v-col xl="3" lg="6" md="6" sm="6" xs="12"><dia-obitos :dataset="filteredData" :mm="currentMM" /></v-col>
                        <v-col cols="12"><simple-map/></v-col>
                    </v-layout><br>
                    <v-layout>
                        <v-flex row wrap>
                            <v-col>
                                <h2 class="font-weight-normal">Por região</h2>
                            </v-col>
                            <v-col>
                                <v-combobox
                                    v-model="region"
                                    :items="regions"
                                    label="Escolha as Regiões"
                                    multiple
                                    small-chips
                                    solo
                                    dense
                                >
                                    <template v-slot:selection="{ item, parent }">
                                        <v-chip color="blue lighten-3" label small>
                                            <span class="pr-2">
                                                {{ item }}
                                            </span>
                                            <v-icon small @click="parent.selectItem(item)">mdi-close</v-icon>
                                        </v-chip>
                                    </template>
                                </v-combobox>
                            </v-col>
                        </v-flex>
                    </v-layout>
                    <v-divider/>
                    <v-container>
                    <v-row row wrap v-show="isSelected">
                        <v-col cols="12" xs="12" sm="6" md="6" lg="6">
                            <mix-infectados :key="numId" v-bind:regions="region"/>
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
// import GJMap from './components/GJMap.vue' 

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
    },
    data: () => ({
        rawData: {
            amountData: null,
            dates: null,
            num: null,
            obitos: null,
        },
        filteredData: {
            amountData: null,
            dates: null,
            num: null,
            obitos: null,
        },
        currentMM: 7,
        region: [ 'Total DF' ],
        regions: null,
        isSelected: true,
        range: null,
        numId: 0,
        activator: null,
        index: -1,
        nonce: 1,
    }),
    async created(){
        this.getData()

    },
    watch: {
        region(val){
            if(val.length == 0){
                this.isSelected = false
            }else{
                this.isSelected = true
            }
        },
        range(val){
            this.filterData(val)
            this.numId++
        },
        watch: {
            model (val, prev) {
                if (val.length === prev.length) return
                this.model = val.map(v => {
                    if (typeof v === 'string') {
                        v = {
                            text: v,
                            color: this.colors[this.nonce - 1],
                        }
                        this.items.push(v)
                        this.nonce++
                    }
                    return v
                })
            },
        },
    },
    methods:{
        async getData(){
            this.rawData.amountData = (await api_data.get_hist_data()).data
            this.rawData.num = (await api_data.get_hist_data()).data.map(function(item){ return item.num })
            this.rawData.obitos = (await api_data.get_hist_data()).data.map(function(item){ return item.obitos })
            this.rawData.dates = (await api_data.get_all_dates()).data

            this.filteredData.amountData = (await api_data.get_hist_data()).data
            this.filteredData.num = (await api_data.get_hist_data()).data.map(function(item){ return item.num })
            this.filteredData.obitos = (await api_data.get_hist_data()).data.map(function(item){ return item.obitos })
            this.filteredData.dates = (await api_data.get_all_dates()).data
            
            this.regions = (await api_data.get_all_regions()).data.filter(function(item){ if( item != "OESTE" && item != "SUL" &&  item != "LESTE" && item != "NORTE" && item != "CENTRAL" && item != "SUDOESTE" && item != "CENTRO SUL" ){ return item } })
        },
        filterData(val){
            this.filteredData.amountData = this.rawData.amountData.slice(val[0], val[1]+1)
            this.filteredData.dates = this.rawData.dates.slice(val[0], val[1]+1)
            this.filteredData.num = this.rawData.num.slice(val[0], val[1]+1)
            this.filteredData.obitos = this.rawData.obitos.slice(val[0], val[1]+1)
        },
        dateRange(val){
            this.range = val
        },
        changeMM(option){
            this.currentMM = option
        }
    }
}
</script>

<style scoped>
h1, h2{
    color: rgb(77, 77, 77);
}
</style>