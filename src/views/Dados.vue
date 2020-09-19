<template>
    <div id="dados">
        <div class="regioes">
            <v-container>
                <v-card flat>
                    <v-card-title>
                        <h2 class="font-weight-bold">{{ currentState.title }}</h2> 
                        <v-icon></v-icon>
                        <v-menu open-on-hover bottom offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    text
                                    color="black"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                <v-icon> mdi-arrow-bottom-right </v-icon>
                                </v-btn>
                            </template>
                            <v-list color="#133e79">
                                <v-list-item v-for="(state, index) in states" :key="index" @click="changeState(state)">
                                    <v-list-item-title class="white--text">{{ state.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                </v-card>        
                <v-divider/>
                    <v-layout row wrap>
                        <v-col cols="12">
                            <data-seletor @changeRange="dateRange" v-bind:dates="rawData.dates"/>
                        </v-col>
                        <v-col cols="12">
                            <v-card elevation="3" color="grey lighten-4">
                                <v-layout>
                                    <v-col cols="6"></v-col>
                                    <v-divider vertical/>
                                    <v-col cols="6">
                                        <div class="teste">
                                            <span class="titleMM font-weight-light"> Média móvel: </span>
                                            <v-btn class="mmBtn" rounded small @click="changeMM(7)" >7</v-btn>
                                            <v-btn class="mmBtn" rounded small @click="changeMM(15)" >15</v-btn>
                                            <v-btn class="mmBtn" rounded small @click="changeMM(21)" >21</v-btn>
                                        </div>
                                    </v-col>
                                </v-layout>
                            </v-card>
                        </v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><historico-infectados :dataset="filteredData" /></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><dia-infectados       :dataset="filteredData" :mm="currentMM" /></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><historico-obitos     :dataset="filteredData" /></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><dia-obitos           :dataset="filteredData" :mm="currentMM" /></v-col>
                        <v-col cols="12" v-if="currentState.abrv == 'DF'"><simple-map :state="currentState"/></v-col>
                    </v-layout><br>
                    <v-layout>
                        <v-flex row wrap>
                            <v-col>
                                <h2 class="font-weight-normal">Análise por região</h2>
                            </v-col>
                            <v-col>
                                <v-combobox v-model="region" :items="regions" label="Escolha as Regiões" multiple small-chips solo dense                                >
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
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12" ><mix-infectados :uf="currentState.abrv" v-bind:regions="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12" v-if="currentState.abrv == 'DF'"><tree-infectados :uf="currentState.abrv" v-bind:regions="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12" ><mix-obitos :uf="currentState.abrv" v-bind:regions="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12" v-if="currentState.abrv == 'DF'"><tree-obitos :uf="currentState.abrv" v-bind:regions="region"/></v-col>
                    </v-row>
                    </v-container>
            </v-container>
        </div>
    </div>
</template>

<script>
import historicoInfectados from "../components/HistoricoInfectados.vue"
import diaInfectados from "../components/DiaInfectados.vue"
import historicoObitos from "../components/HistoricoObitos.vue"
import diaObitos from "../components/DiaObitos.vue"
import simpleMap from "../components/SimpleMap.vue"
import mixInfectados from "../components/MixInfectados.vue"
import mixObitos from "../components/MixObitos.vue"
import treeInfectados from "../components/TreeInfectados.vue"
import treeObitos from "../components/TreeObitos.vue"
import dataSeletor from "../components/Seletor.vue"

import { Data } from "../functions/index.js"



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
        currentState: { title: 'Distrito Federal', abrv: 'DF' },
        states: [
            { title: 'Distrito Federal', abrv: 'DF' },
            { title: 'Ceará', abrv: 'CE' }
        ],
        rawData: {
            amountData: null,
            dates: null,
            num: null,
            obitos: null,
            Dianum: null,
            Diaobitos: null,
            MMnum: null,
            MMobitos: null,},
        filteredData: {
            amountData: null,
            dates: null,
            num: null,
            obitos: null,
            Dianum: null,
            Diaobitos: null,
            MMnum: null,
            MMobitos: null,},
        currentMM: 7,
        region: [ 'Total DF' ],
        regions: null,
        isSelected: true,
        range: null,
    }),
    async mounted(){
        this.getData()
        this.getRegions()
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
        },
    },
    methods:{
        async getData(){
            let dados = (await new Data(this.currentState.abrv).get_hist_data()).data
            this.rawData.amountData = dados
            this.rawData.num = dados.map(function(item){ return item.num })
            this.rawData.obitos = dados.map(function(item){ return item.obitos })
            this.rawData.dates = dados.map(function(ret){ return ret.dataExtracao })
            this.rawData.Dianum = (await this.calcDia(this.rawData.num))
            this.rawData.Diaobitos = await this.calcDia(this.rawData.obitos)
            this.rawData.MMnum = this.calcMms(this.rawData.num, this.currentMM)
            this.rawData.MMobitos = this.calcMms(this.rawData.obitos, this.currentMM)

            this.filteredData.amountData = dados
            this.filteredData.num = dados.map(function(item){ return item.num })
            this.filteredData.obitos = dados.map(function(item){ return item.obitos })
            this.filteredData.dates = dados.map(function(ret){ return ret.dataExtracao })
            this.filteredData.Dianum = await this.calcDia(this.rawData.num)
            this.filteredData.Diaobitos = await this.calcDia(this.rawData.obitos)
            this.filteredData.MMnum = this.calcMms(this.rawData.num, this.currentMM)
            this.filteredData.MMobitos = this.calcMms(this.rawData.obitos, this.currentMM)
        },
        async getRegions(){
            this.regions = (await new Data(this.currentState.abrv).get_all_regions()).data.filter(function(item){ if( item != "OESTE" && item != "SUL" &&  item != "LESTE" && item != "NORTE" && item != "CENTRAL" && item != "SUDOESTE" && item != "CENTRO SUL" ){ return item } }).sort()
        },
        filterData(val){
            this.filteredData.amountData = this.rawData.amountData.slice(val[0], val[1]+1)
            this.filteredData.dates = this.rawData.dates.slice(val[0], val[1]+1)
            this.filteredData.num = this.rawData.num.slice(val[0], val[1]+1)
            this.filteredData.obitos = this.rawData.obitos.slice(val[0], val[1]+1)
            this.filteredData.Dianum = this.rawData.Dianum.slice(val[0], val[1]+1)
            this.filteredData.Diaobitos = this.rawData.Diaobitos.slice(val[0], val[1]+1)
            this.changeMM(this.currentMM)
        },
        dateRange(val){
            this.range = val
        },
        changeMM(option){
            this.currentMM = option
            this.filteredData.MMnum = this.calcMms(this.rawData.num, option).slice(this.range[0], this.range[1]+1)
            this.filteredData.MMobitos = this.calcMms(this.rawData.obitos, option).slice(this.range[0], this.range[1]+1)
        },
        calcMms(data, period){
            data = this.calcDia(data)
            let arr_ret = []
            for(let i = 0; i < data.length; i++){
                if(i < period){
                    arr_ret.push( data[i]/2 )
                }else{
                    let aux = 0
                    for(let j = 0; j < period; j++){
                        aux += data[i - j]
                    }
                    arr_ret.push(~~(aux/period))
                }
            }
            return arr_ret
        },
        calcDia(data){
            let arr_ret = []
            for(let i = 0; i < data.length; i++){
                if(i == 0){
                    arr_ret.push(data[i])
                }else{
                    arr_ret.push( (data[i] - data[i-1]) < 0 ? 0 : data[i] - data[i-1] )
                }
            }
            arr_ret[0] = arr_ret[1]
            return arr_ret
        },
        changeState(state){
            this.currentState.title = state.title
            this.currentState.abrv = state.abrv
            this.getData()
            this.getRegions()
        }
    }
}
</script>

<style scoped>
#dados{
    padding-top: 110px;
}
h1, h2{
    color: rgb(77, 77, 77);
}
.mmBtn{
    margin-left: 5px;
    margin-right: 5px;
}
.teste{
    text-align: center;
}
</style>