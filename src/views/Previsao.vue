<template>
    <div class="dados">
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
                                    </v-col>
                                </v-layout>
                            </v-card>
                        </v-col>
                        <v-col xl="12" lg="12" md="12" sm="12" xs="12"><dia-infectados       :dataset="filteredData" /></v-col>
                    </v-layout><br>
                    
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
// import historicoInfectados from "../components/HistoricoInfectados.vue"
// import diaInfectados from "../components/DiaInfectados.vue"
import diaInfectados from "../components/PrevisaoInfectados"
// import historicoObitos from "../components/HistoricoObitos.vue"
// import diaObitos from "../components/DiaObitos.vue"
// import simpleMap from "../components/SimpleMap.vue"
// import mixInfectados from "../components/MixInfectados.vue"
// import mixObitos from "../components/MixObitos.vue"
// import treeInfectados from "../components/TreeInfectados.vue"
// import treeObitos from "../components/TreeObitos.vue"
import dataSeletor from "../components/Seletor.vue"

import { Data } from "../functions/index.js"

let api_data = new Data()


export default {
    components: {
        // historicoInfectados,
        diaInfectados,
        // historicoObitos,
        // diaObitos,
        // simpleMap,
        // mixInfectados,
        // mixObitos,
        // treeInfectados,
        // treeObitos,
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
            // obitos: null,
            Dianum: null,
            // Diaobitos: null,
            // MMnum: null,
            // MMobitos: null,
            },
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
            this.rawData.num = (await api_data.get_prevision_data()).data.map(function(item){ return item.num })
            this.rawData.dates = (await api_data.get_prevision_data()).data.map(function(item){ return item.dataExtracao })
            console.log("olha aqui")
            console.log(this.rawData.dates)
            console.log(this.rawData.num)
            this.rawData.Dianum = await this.calcDia(this.rawData.num)

            this.filteredData.amountData = (await api_data.get_hist_data()).data
            this.filteredData.num = (await api_data.get_prevision_data()).data.map(function(item){ return item.num })
            this.filteredData.dates = (await api_data.get_prevision_data()).data.map(function(item){ return item.dataExtracao })
            this.filteredData.Dianum = await this.calcDia(this.rawData.num)

            this.regions = (await api_data.get_all_regions()).data.filter(function(item){ if( item != "OESTE" && item != "SUL" &&  item != "LESTE" && item != "NORTE" && item != "CENTRAL" && item != "SUDOESTE" && item != "CENTRO SUL" ){ return item } }).sort()
        },
        filterData(val){
            this.filteredData.amountData = this.rawData.amountData.slice(val[0], val[1]+1)
            this.filteredData.dates = this.rawData.dates.slice(val[0], val[1]+1)
            this.filteredData.num = this.rawData.num.slice(val[0], val[1]+1)
            this.filteredData.Dianum = this.rawData.Dianum.slice(val[0], val[1]+1)
        },
        dateRange(val){
            this.range = val
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