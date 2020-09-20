<template>
    <div>
        <v-card color="grey lighten-4" >
            <v-card-title> 
                {{state.title}}
                <v-divider vertical class="mx-3 mb-3 mt-3"/>
                <span>Infected/Deaths - {{dia}}/{{mes}}/{{ano}}</span>
                <v-spacer/>
                <v-switch 
                    color="red"
                    v-model="switch1" flat 
                    :label="`${currentOption.name.toString()}`"
                />
            </v-card-title>
            {{incid}}
            <span v-if="state.abrv == 'CE'">
                <v-card outlined>
                    <v-card-title>
                        <v-spacer/>
                        Sem visualização
                        <v-spacer/>
                    </v-card-title>
                </v-card>
            </span>
            <span v-else>
                <simple-map 
                    v-bind:showPoints="showPoints" 
                    v-bind:type="currentOption.val" 
                    :key="numId"
                ></simple-map>
            </span>
        </v-card>
    </div>
</template>

<script>
import SimpleMap from "../maps/SimpleMap.vue"
import { Data } from "../functions/index.js"

// let api_data = new Data()

export default {
    props: [ 'state' ],
    components: {
        SimpleMap,
    },
    data(){
        return {
            dia: '',
            mes: '',
            ano: '',
            type: 'obitos',
            switch1: false,
            showPoints: true,
            currentOption: { name: "Infected", val: "num" },
            numId: 0,
            incid: null
        }
    },
    watch:{
        switch1(val){
            if(val == false){
                this.currentOption = { name: "Infectados", val: "num" }
            }else{
                this.currentOption = { name: "Óbitos", val: "obitos" }
            }
            this.numId++
        }
    },
    mounted(){
        this.last_date()
        this.getIncid()
    }, 
    methods: {
        async last_date(){
            let ultimoDia = (await new Data('DF').get_last_date()).data.split("T")[0]
            console.log("Último dia é: " + ultimoDia)
            this.dia = ultimoDia.substr(8,10)
            this.mes = ultimoDia.substr(5,2)
            this.ano = ultimoDia.substr(0,4)
            this.ultimoDia=ultimoDia
        },
        changeVisibility(){
            this.showPoints = !this.showPoints
            this.numId++
        },
        // async getIncid(){
        //     this.incid = ( await api_data.get_incid() .data)
        // }
    }
}
</script>