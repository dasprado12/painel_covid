<template>
    <div>
        <v-card color="grey lighten-4">
            <v-card-title class="font-weight-light"> Regiões com mais infectados </v-card-title>
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
    props: [ 'regions' ],
    components: { TreeMapInf },
    data(){
        return {
            data: null,
            filter_data: [],
            last_date: null, 
            amountData: [],
            amountRegions: [],
            key: 0,
        }
    },
    computed: {
        colors(){
            let colors = [ "#2b5875", "#c2c41b", "#00a830", "#a80076", "#e30909", "#09e3dc", "#e39309" ]
            return colors
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
            for(let i = 0; i < regions.length; i++){
                for(let j = 0; j < data.length; j++){
                    if(regions[i] == data[j].regiao){
                        this.amountData.push(data[j].num)
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