<template>
    <div>
        <v-card color="grey lighten-4" flat>
            <v-card-title>
                <span>Infectados/Óbitos - {{dia}}/{{mes}}/{{ano}}</span>
                <v-spacer/>
                <v-switch 
                    color="red"
                    v-model="switch1" flat 
                    :label="`${currentOption.name.toString()}`"
                />
            </v-card-title>
            <simple-map v-bind:type="currentOption.val" :key="numId"></simple-map>
        </v-card>
    </div>
</template>

<script>
import SimpleMap from "../maps/SimpleMap.vue"
import { Data } from "../../../functions/index.js"

let api_data = new Data()

export default {
    components: {
        SimpleMap
    },
    data(){
        return {
            dia: '',
            mes: '',
            ano: '',
            type: 'obitos',
            switch1: false,
            currentOption: { name: "Infectados", val: "num" },
            numId: 0
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
    }, 
    methods: {
        async last_date(){
            let ultimoDia = (await api_data.get_last_date()).data.split("T")[0]
            this.dia = ultimoDia.substr(8,10)
            this.mes = ultimoDia.substr(5,2)
            this.ano = ultimoDia.substr(0,4)
            this.ultimoDia=ultimoDia
        }
    }
}
</script>