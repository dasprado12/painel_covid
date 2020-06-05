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
                v-bind:type="regions"
                :key="numId"
            />
        </v-card>
    </div>
</template>

<script>
export default {
    props: [ 'region' ],
    data(){
        return {
            regions: [ ],
            items: [
                "ÁGUAS CLARAS", "RECANTO DAS EMAS", "SAMAMBAIA", "TAGUATINGA", "VICENTE PIRES", "CENTRAL", "SUDOESTE", "PLANO PILOTO", "SUDOESTE/OCTOGONAL", "LAGO NORTE", "LAGO SUL", "VARJÃO DO TORTO", "CENTRO SUL", "CANDANGOLÂNDIA", "PARKWAY", "GUARÁ", "NÚCLEO BANDEIRANTE", "RIACHO FUNDO I", "RIACHO FUNDO II", "SCIA (ESTRUTURAL)", "CRUZEIRO", "NORTE", "FERCAL", "PLANALTINA", "SOBRADINHO I", "SOBRADINHO II", "GAMA", "SANTA MARIA", "LESTE", "JARDIM BOTÂNICO", "ITAPOÃ", "PARANOÁ", "SÃO SEBASTIÃO", "SUL", "OESTE", "BRAZLÂNDIA", "CEILÂNDIA", "POPULAÇÃO PRIVADA DE LIBERDADE", "S I A", "RA EM INVESTIGAÇÃO"
            ],
        }
    }
}
</script>