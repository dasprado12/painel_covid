<template>
    <div>
        <v-card color="grey lighten-4">
            <v-card-title class="font-weight-light"> Regiões com mais óbitos </v-card-title>
                <tree-map-inf 
                    :data="amountData"
                    :regions="amountRegions"
                    :colors="colors"
                    :key="key"
                />
        </v-card>
    </div>
</template>

<script>
import TreeMapInf from "../charts/PieChart.vue";
import { Data } from "../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'uf', 'regions' ],
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
            let last_date = (await new Data(this.uf).get_last_date()).data.split("T")[0]
            let data = ( await api_data.get_region_by_date(last_date) ).data
            this.amountData = []
            this.amountRegions = []
            for(let i = 0; i < regions.length; i++){
                for(let j = 0; j < data.length; j++){
                    if(regions[i] == data[j].regiao){
                        this.amountData.push(data[j].obitos)
                        this.amountRegions.push(data[j].regiao)
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