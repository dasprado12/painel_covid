<template>
    <div>
        <v-card flat outlined>
            <v-card-title>
                <span class="font-weight-light">Regiões com mais Óbitos</span>
            </v-card-title>
            <v-divider/>
            <tree-map-obt v-bind:obj="data_inf" :key="key"/>
        </v-card>
    </div>
</template>

<script>
import TreeMapObt from "../charts/TreeChartObitos.vue";
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'color', 'title', 'time', 'regions' ],
    components: { TreeMapObt },
    data(){
        return {
            data: null,
            data_inf: {
                color: this.color,
                data: []
            },
            filter_data: [],
            last_date: null, 
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
            this.data = data
            let filter_data = []
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < regions.length; j++){
                    if(data[i].regiao == regions[j]){
                        filter_data.push({ City: data[i].regiao, Count: data[i].obitos })
                    }
                }
            }
            this.data_inf.data=filter_data
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