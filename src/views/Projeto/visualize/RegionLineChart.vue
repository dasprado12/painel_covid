<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="font-weight-light">Cidades</span>

                <v-select dense v-model="regions" :items="items" attach chips/>
            </v-card-title>
            <v-divider></v-divider>
            <line-chart
                v-bind:infected="infectados"
                v-bind:time="dates"
                v-bind:death="obitos"
                v-bind:type="type"
                :key="numId"
            />
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="changeChart('line')">Line</v-btn>
                <v-btn text @click="changeChart('bar')">Bar</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import lineChart from "../charts/LineChart.vue"
import { Data } from "../../../example/functions.js";

let newData = new Data();

export default {
    props: [ 'region' ],
    components: { lineChart },
    data(){
        return {
            regions: [ ],
            data: null,
            items: [ 
                "ÁGUAS CLARAS", "RECANTO DAS EMAS", "SAMAMBAIA", "TAGUATINGA", "VICENTE PIRES", "CENTRAL", "SUDOESTE", "PLANO PILOTO", "SUDOESTE/OCTOGONAL", "LAGO NORTE", "LAGO SUL", "VARJÃO DO TORTO", "CENTRO SUL", "CANDANGOLÂNDIA", "PARKWAY", "GUARÁ", "NÚCLEO BANDEIRANTE", "RIACHO FUNDO I", "RIACHO FUNDO II", "SCIA (ESTRUTURAL)", "CRUZEIRO", "NORTE", "FERCAL", "PLANALTINA", "SOBRADINHO I", "SOBRADINHO II", "GAMA", "SANTA MARIA", "LESTE", "JARDIM BOTÂNICO", "ITAPOÃ", "PARANOÁ", "SÃO SEBASTIÃO", "SUL", "OESTE", "BRAZLÂNDIA", "CEILÂNDIA", "POPULAÇÃO PRIVADA DE LIBERDADE", "S I A", "RA EM INVESTIGAÇÃO" 
            ],
            type: 'line',
            infectados: [null],
            dates: [null],
            obitos: [null],
            numId: 0
        }
    },
    mounted() {
        this.get_region('')
    },
    watch: {
        regions(val){
            this.get_region(val)
        }
    },
    methods: {
        get_region(region){
            let data = newData.get_by_region(region)
            let infectados = []
            let dates = []
            let obitos = []
            for(let i = 0; i < data.length; i++){
                infectados.push(data[i].num)
                dates.push( new Date( data[i].dataExtracao).toISOString().split('T')[0].slice(5) )
                obitos.push(data[i].obitos)
            }
            this.infectados = infectados
            this.dates = dates
            this.obitos = obitos
            this.numId++
        },
        changeChart(item){
            this.type = item
            this.numId++
        }
    }       
}
</script>