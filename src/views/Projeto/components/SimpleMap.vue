<template>
    <div>
        <v-card color="grey lighten-4" flat>
            <v-card-title><span>Infectados e Óbitos - {{dia}}/{{mes}}/{{ano}}</span></v-card-title>
            <simple-map></simple-map>
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
            ano: ''    
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