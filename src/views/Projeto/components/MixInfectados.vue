<template>
    <div>
        <v-card flat outlined> 
            <v-card-title>
                <span class="font-weight-light">Infectados</span>
            </v-card-title> <v-divider/>
            <line-chart
                v-bind:time="time"
                v-bind:data="data"
                :key="numId"
            />
        </v-card>
        <span class="font-weight-light">Histórico</span>
    </div>
</template>

<script>
import lineChart from "../charts/MixLineChartInf"
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
    props: [ 'type', 'regions' ],
    components: { lineChart },
    data(){
        return {
            time: [],
            data: null,
            items: [],
            numId: 0
        }
    },
    async mounted(){    
        this.get_many_data()
    },
    watch: {
        regions(val){
            let string = val.toString()
            this.get_many_data(string)
        }
    },
    methods: {
        async get_many_data(string){
            this.items = (await api_data.get_all_regions()).data
            this.data = (await api_data.get_many_data(this.type, string)).data
            this.time = (await api_data.get_all_dates()).data.map(function(item){ return item.split("T")[0] })
            this.numId++
        }
    }       
}
</script>