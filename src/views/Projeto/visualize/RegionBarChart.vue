<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="font-weight-light">Cidades</span>
                <v-spacer/>
                <v-select dense v-model="regions" :items="items" attach chips multiple/>
            </v-card-title>
            <v-divider></v-divider>
            <bar-chart
                v-bind:infected="infectados"
                v-bind:time="dates"
                v-bind:death="obitos"
                v-bind:region="regions"
                :key="numId"
            />
            <v-card-actions>
                <v-pagination
                    v-model="page"
                    :length="3"
                    :total-visible="7"
                ></v-pagination>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import data from "../../../example/index.js"
import dates from "../../../example/dates.js"
import barChart from "../charts/BarChart.vue";

export default {
    props: [ 
    ],
    components: { 
        barChart
    },
    data(){
        return {
            drawer: true,
            regions: [ ],
            items: [
                "ÁGUAS CLARAS", "RECANTO DAS EMAS", "SAMAMBAIA", "TAGUATINGA", "VICENTE PIRES", "CENTRAL", "SUDOESTE", "PLANO PILOTO", "SUDOESTE/OCTOGONAL", "LAGO NORTE", "LAGO SUL", "VARJÃO DO TORTO", "CENTRO SUL", "CANDANGOLÂNDIA", "PARKWAY", "GUARÁ", "NÚCLEO BANDEIRANTE", "RIACHO FUNDO I", "RIACHO FUNDO II", "SCIA (ESTRUTURAL)", "CRUZEIRO", "NORTE", "FERCAL", "PLANALTINA", "SOBRADINHO I", "SOBRADINHO II", "GAMA", "SANTA MARIA", "LESTE", "JARDIM BOTÂNICO", "ITAPOÃ", "PARANOÁ", "SÃO SEBASTIÃO", "SUL", "OESTE", "BRAZLÂNDIA", "CEILÂNDIA", "POPULAÇÃO PRIVADA DE LIBERDADE", "S I A", "RA EM INVESTIGAÇÃO"
            ],
            name: 'DF',
            selected: [],
            dates: dates.dates,
            dados: data.DF,
            dados_filtrados: {
                infectados: [],
                dia: [],
                obitos: []
            },
            infectados: [],
            dia: [],
            obitos: [],
            numId: 0
        }
    },
    computed: {
    },
    mounted(){
        this.filter_data()
        this.numId++
    },
    methods: {
        filter_data(){
            let day = "2020-04-22T00:00:00.000Z"

            //para cada regiao
            for(let i = 0; i < this.regions.length; i++ ){
                let infectados = 0
                let obitos = 0
                for(let j = 0; j < this.dados.length; j++){
                    //compara se a regiao coincide

                    if( this.regions[i] == this.dados[j].regiao.toUpperCase() ){
                        console.log(this.dados[j].dataExtracao);
                        //compara se a data coincide
                        if(day == this.dados[j].dataExtracao){
            
                        infectados += this.dados[j].num
                        obitos += this.dados[j].obitos
                        console.log("obitos "+ obitos);
                        }
                    }
                }
                this.dados_filtrados.infectados.push(infectados)
                this.dados_filtrados.obitos.push(obitos)
            }
            this.infectados = this.dados_filtrados.infectados
            this.obitos = this.dados_filtrados.obitos
        }
    },
    watch: {
        regions: function(val) {
            console.log(val)
            this.dados_filtrados = {
                infectados: [],
                dia: [],
                obitos: []
            }
            this.filter_data()
            this.numId++
        }
    }
}
</script>

<style scoped>
.selector{
    text-align: center;
    align-content: center;
}
</style>


