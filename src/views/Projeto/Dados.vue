<template>
    <div class="home">
        <div class="brasil">
            <v-container>
                <h1 class="main-title font-weight-bold"> Brasil </h1>
                <v-divider ></v-divider>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <brasil-line/>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="regioes">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <h1 class="main-title font-weight-bold"> Regioes </h1>
                    </v-col>
                    <v-col cols="12" sm="4" md="4"/>
                    <v-col cols="12" sm="2" md="2">
                        <v-select v-model="regiao_selecionada" :items="regioes" label="Regiões"/>
                    </v-col>
                </v-row>
                <v-divider/>
                <!-- visualização dos estados -->
                <estados v-show="show" v-bind:region="regiao_selecionada"></estados>
            </v-container>
        </div>
        <div class="Mapas">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <h1 class="main-title font-weight-bold"> Mapa </h1>
                    </v-col>
                </v-row>
                <v-divider/><br>
                <v-card flat outlined>
                    <v-card-title>
                        <span class="font-weight-light"> Infectados </span>
                    </v-card-title>
                    <simple-map/>
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script>
import BrasilLine from "./visualize/BrasilLine.vue"
import Estados from "../Projeto/visualize/Regioes.vue"
import SimpleMap from "./maps/SimpleMap.vue"
import { Data } from "../../functions/index.js"

let api_data = new Data()

export default {
    name: "Home",
    components: {
        BrasilLine, Estados, SimpleMap
    },
    data(){
        return {
            selected: '2020-03-20',
            show: false,
            regioes: [ "Regioes", "DF"],
            regiao_selecionada: "",
            data_from_region: [],
            dates: [],
            dates_qty: null,
            tab: null,
            states: null,
            state: null
        }
    },
    watch:{
        regiao_selecionada (value) {
            if(value == 'Regioes'){
                this.show = false
            }else{
                this.show = true
            }
        }
    },
    mounted() {
        this.get_all_dates()
    },
    methods: {
        season (val) {
            return this.dates[val].split('T')[0].split('-')
        },
        async get_all_dates(){
            let dates = (await api_data.get_all_dates()).data.sort()
            this.dates = dates
            this.dates_qty = dates.length
        }
    }
};
</script>

<style scoped>
.main-title{
    color: rgb(73, 73, 73);
}
</style>

