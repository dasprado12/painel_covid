<template>
  <div>
    <v-card flat outlined>
      <v-card-title>
        <span class="font-weight-light">Cidades</span>
        <v-spacer></v-spacer>
        <v-select dense v-model="regions" :items="items" attach chips />
      </v-card-title>
      <v-divider></v-divider>
      <line-chart
        v-bind:infected="infectados"
        v-bind:time="dates"
        v-bind:death="obitos"
        v-bind:type="type"
        :key="numId"
      />
      <!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="changeChart('line')">Line</v-btn>
                <v-btn text @click="changeChart('bar')">Bar</v-btn>
            </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
import lineChart from "../charts/LineChart.vue";
import { Data } from "../../../functions/index.js";

let api_data = new Data();

export default {
  props: ["region"],
  components: { lineChart },
  data() {
    return {
      regions: [],
      data: null,
      items: null,
      type: "line",
      infectados: [null],
      dates: [null],
      obitos: [null],
      numId: 0
    };
  },
  async mounted() {
    this.get_regions();
    this.get_data("");
  },
  watch: {
    regions(val) {
      this.get_data(val);
    }
  },
  methods: {
    async get_data(region) {
      let data = (await api_data.get_data_by_region(region)).data;
      let infectados = [];
      let dates = [];
      let obitos = [];
      for (let i = 0; i < data.length; i++) {
        infectados.push(data[i].num);
        dates.push(
          new Date(data[i].dataExtracao)
            .toISOString()
            .split("T")[0]
            .slice(5)
        );
        obitos.push(data[i].obitos);
      }
      this.infectados = infectados;
      this.dates = dates;
      this.obitos = obitos;
      this.numId++;
    },
    async get_regions() {
      this.items = (await api_data.get_all_regions()).data;
    },
    changeChart(item) {
      this.type = item;
      this.numId++;
    }
  }
};
</script>
