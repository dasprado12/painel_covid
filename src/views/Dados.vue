<template>
    <div class="dados">{{filteredData.MMnum}}
        <div class="regioes">
            <v-container>
                <h1 class="font-weight-bold">Distrito Federal</h1>
                <v-divider/>
                    <v-layout row wrap>
                        <v-col cols="12">
                            <data-seletor @changeRange="dateRange" v-bind:dates="rawData.dates"/>
                        </v-col>
                        <v-col cols="12">
                            <v-card outlined color="grey lighten-4">
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
                        <v-col cols="12"><simple-map/></v-col>
                    </v-layout><br>
                    <v-layout>
                        <v-flex row wrap>
                            <v-col>
                                <h2 class="font-weight-normal">Análise por região</h2>
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
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><mix-infectados v-bind:regions="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><tree-infectados v-bind:regions="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><mix-obitos v-bind:regions="region"/></v-col>
                        <v-col xl="6" lg="6" md="6" sm="6" xs="12"><tree-obitos v-bind:regions="region"/></v-col>
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
        },
        
    },
    methods:{
        async getData(){
            this.rawData.amountData = (await api_data.get_hist_data()).data
            this.rawData.num = (await api_data.get_hist_data()).data.map(function(item){ return item.num })
            this.rawData.obitos = (await api_data.get_hist_data()).data.map(function(item){ return item.obitos })
            this.rawData.dates = (await api_data.get_all_dates()).data
            this.rawData.Dianum = await this.calcDia(this.rawData.num)
            this.rawData.Diaobitos = await this.calcDia(this.rawData.obitos)
            this.rawData.MMnum = this.calcMms(this.rawData.num, this.currentMM)
            this.rawData.MMobitos = this.calcMms(this.rawData.obitos, this.currentMM)

            this.filteredData.amountData = (await api_data.get_hist_data()).data
            this.filteredData.num = (await api_data.get_hist_data()).data.map(function(item){ return item.num })
            this.filteredData.obitos = (await api_data.get_hist_data()).data.map(function(item){ return item.obitos })
            this.filteredData.dates = (await api_data.get_all_dates()).data
            this.filteredData.Dianum = await this.calcDia(this.rawData.num)
            this.filteredData.Diaobitos = await this.calcDia(this.rawData.obitos)
            this.filteredData.MMnum = this.calcMms(this.rawData.num, this.currentMM)
            this.filteredData.MMobitos = this.calcMms(this.rawData.obitos, this.currentMM)

            this.regions = (await api_data.get_all_regions()).data.filter(function(item){ if( item != "OESTE" && item != "SUL" &&  item != "LESTE" && item != "NORTE" && item != "CENTRAL" && item != "SUDOESTE" && item != "CENTRO SUL" ){ return item } }).sort()
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
        }
    }
}
</script>

<style scoped>
h1, h2{
    color: rgb(77, 77, 77);
}
.mmBtn{
    margin-left: 10px;
    margin-right: 10px;
}
.teste{
    text-align: center;
}
</style>