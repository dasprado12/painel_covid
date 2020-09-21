<template>
    <div class="dados">
        <div class="regioes">
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <h1 class="font-weight-bold">Distrito Federal - Algoritmo</h1>
                        <v-divider/>
                            <v-layout row wrap>
                                <v-col cols="12">
                                    <data-seletor v-bind:dates="null"/>
                                </v-col>
                                    <v-col cols="12">
                                    <previsao 
                                        :datas="cePrediction.datas"
                                        :obitos="cePrediction.obitos"
                                        :projecao="cePrediction.predObitos"
                                        :key="key"
                                    />
                                </v-col>
                            </v-layout><br>
                            
                            <v-divider/>
                    </v-col>
                    <v-col cols="6">
                        <h1 class="font-weight-bold">Distrito Federal - Exponencial</h1>
                        <v-divider/>
                        <v-layout row wrap>
                            <v-col cols="12">  
                                <data-seletor @changeRange="dateRange" v-bind:dates="rawData.dates"/>
                            </v-col>
                            <v-col cols="12"><dia-infectados :dataset="filteredData" /></v-col>
                        </v-layout><br>
                        <v-divider/>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                
                    
            </v-container>
            <v-container>
                
            </v-container>
        </div>
    </div>
</template>

<script>
import previsao from "../charts/Previsao.vue"
import diaInfectados from "../components/PrevisaoInfectados.vue"
import dataSeletor from "../components/Seletor.vue"

import { Data } from "../functions/index.js"

let api_data = new Data()


export default {
    components: {
        previsao,
        diaInfectados,
        dataSeletor,
    },
    data: () => ({
        key: 0,
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
                Dianum: null,
            },
            currentMM: 7,
            regions: null,
            isSelected: true,
            range: null,
            cePrediction: {
                datas: [],
                obitos: [],
                predObitos: [],
            }
    }),
    async created(){
        this.getData()
        this.getPrediction()
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
        async getPrediction(){
            let dataPrediction = (await api_data.get_prediction_ce()).data
            this.cePrediction.datas = await dataPrediction.map(function(item) { return item.data })
            this.cePrediction.obitos = await dataPrediction.map(function(item){ if(item.obitos == "-"){ return null }else{ return item.obitos} })
            this.cePrediction.predObitos = await dataPrediction.map(function(item){ if(item.predicao_obitos == "-"){ return null }else{ return item.predicao_obitos }  })
            this.key++
        },
        async getData(){
            this.rawData.amountData = (await api_data.get_hist_data()).data
            this.rawData.num = (await api_data.get_prevision_data()).data.map(function(item){ return item.num })
            this.rawData.dates = (await api_data.get_prevision_data()).data.map(function(item){ return item.dataExtracao })
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
.regioes{
    padding-top: 120px;
}
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