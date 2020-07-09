<template>
    <div>
        <v-card flat outlined>
            <v-card-title>
                <span class="font-weight-light"> {{title}}</span>
            </v-card-title>
            <tree-map-inf v-bind:obj="data_inf" :key="key"></tree-map-inf>
        </v-card>
    </div>
</template>

<script>
import TreeMapInf from "../charts/TreeChart.vue";
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'color', 'title', 'time', 'regions' ],
    components: { TreeMapInf },
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
            let last_date = '2020-03-27'
            let data = ( await api_data.get_region_by_date(last_date) ).data
            this.data = data
            let filter_data = []
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < regions.length; j++){
                    if(data[i].regiao.toUpperCase() == regions[j]){
                        filter_data.push({ City: data[i].regiao, Count: data[i].num })
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