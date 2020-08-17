<template>
    <div>
        <v-card outlined color="grey lighten-4">
            <v-card-title class="font-weight-light"> Regiões com mais óbitos </v-card-title>
                <tree-map-inf 
                    :data="amountData"
                    :regions="amountRegions"
                    :colors="colors"
                    v-bind:obj="data_inf" 
                    :key="key"
                />
        </v-card>
    </div>
</template>

<script>
import TreeMapInf from "../charts/PieChart.vue";
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'regions' ],
    components: { TreeMapInf },
    data(){
        return {
            filter_data: [],
            amountData: [],
            amountRegions: [],
            colors: [ '#e85046', '#e88746', '#e8c046', '#851c3b', '#481c85'  ],
            key: 0,
        }
    },
    async created(){
        this.get_data(this.regions)
    },
    methods: {
        async get_data(regions){
            let last_date = (await api_data.get_last_date()).data.split("T")[0]
            let data = ( await api_data.get_region_by_date(last_date) ).data
            this.amountData = []
            this.amountRegions = []
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < regions.length; j++){
                    if(data[i].regiao == regions[j]){
                        this.amountData.push(data[i].obitos)
                        this.amountRegions.push(data[i].regiao)
                    }
                }
            }
            this.key++
        },
    },
    watch:{
        regions(val){
            this.get_data(val)
        }
    }
    
}
</script>