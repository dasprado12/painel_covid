<template>
    <div class="home">
        <v-tabs v-model="tab" centered>
            <v-tab key="Brasil">Brasil</v-tab>
                <v-divider class="mx-4" inset vertical/>
            <v-tab key="Estados">Estados</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item key="Brasil">
                <brasil></brasil>
            </v-tab-item>
            <v-tab-item key="Estados">
                <estados></estados>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import Brasil from "./components/Brasil.vue";
import Estados from "./components/Estados.vue";
export default {
    name: "Home",
    components: {
        Brasil,
        Estados
    },
    data(){
        return {
            regions: [],
            dates: [],
            tab: null,
            states: null,
            state: null
        }
    },
    computed:{

    },
    created(){
        // this.filter_regions()
        // this.filter_dates()
    },
    methods: {
        // filter_regions(){
        //     let regioes = []
        //     let data = null
        //     for(let i = 0; i < this.data.length; i++){
        //         data = this.data[i].regiao.toUpperCase()
        //         regioes.indexOf(data) === -1 ? regioes.push(data) : console.log("This item already exists");
        //     }
        //     this.regions = regioes
        // },
        // filter_dates(){
        //     let data = null
        //     let retorno = []
        //     for(let i = 0; i < this.data.length; i++){
        //         data = this.data[i].dataExtracao
        //         retorno.indexOf(data) === -1 ? retorno.push(data) : console.log("This item already exists");
        //     }
        //     this.dates = retorno
        // }
    }
};
</script>

<style scoped>
</style>

