<template>
    <div class="home">
        <div class="brasil">
            <v-container>
                <h1 class="main-title font-weight-light"> Brasil </h1>
                <v-divider ></v-divider>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <v-card>
                            <brasil-line/>
                        </v-card>
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
                        <h1 class="main-title font-weight-light"> Regioes </h1>
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
                        <h1 class="main-title font-weight-light"> Mapa </h1>
                    </v-col>
                    <v-col cols="12" sm="4" md="4"/>
                    <v-col cols="12" sm="2" md="2">
                    </v-col>
                </v-row>
                <v-divider/>
                <v-card>
                    <v-card-title>
                        <span class="font-weight-light"> Brasil </span>
                    </v-card-title>
                    <v-card-text>
                        <simple-map/>
                    </v-card-text>
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script>
import BrasilLine from "./visualize/BrasilLine.vue"
import Estados from "../Projeto/visualize/Regioes.vue"
import SimpleMap from "./maps/SimpleMap.vue"

export default {
    name: "Home",
    components: {
        BrasilLine, Estados, SimpleMap
    },
    data(){
        return {
            show: false,
            regioes: [ "Regioes", "DF"],
            regiao_selecionada: "",
            data_from_region: [],
            dates: [],
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
    methods: {

    }
};
</script>

<style scoped>
.main-title{
    color: rgb(73, 73, 73);
}
</style>

