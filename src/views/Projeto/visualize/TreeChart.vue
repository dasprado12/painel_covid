<template>
    <div>
        <v-card>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-card-title>
                            <span class="font-weight-light"> Infectados </span>
                        </v-card-title>
                        <tree-map-inf v-bind:obj="data_inf" :key="key"></tree-map-inf>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-card-title>
                            <span class="font-weight-light"> Óbitos </span>
                        </v-card-title>
                        <tree-map-obt v-bind:obj="data_obt" :key="key"></tree-map-obt>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
import TreeMapInf from "../charts/TreeChart.vue";
import TreeMapObt from "../charts/TreeChart.vue";
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    components: { TreeMapInf, TreeMapObt },
    data(){
        return {
            data_inf: {
                color: '#28b856',
                data: []
            },
            data_obt: {
                color: '#cc2d2d',
                data: []
            },
            key: 0,
        }
    },
    async created(){
        this.get_last_date()
        this.mount_data()
    },
    methods: {
        async get_last_date(){
            let last_date = (await api_data.get_last_date()).data.split('T')[0]
            let data = ( await api_data.get_region_by_date(last_date) ).data
            for(let i = 0; i < data.length; i++){
                this.data_inf.data.push({ City: data[i].regiao, Count: data[i].num })
                this.data_obt.data.push({ City: data[i].regiao, Count: data[i].obitos })
            }
        }
    }
    
}
</script>