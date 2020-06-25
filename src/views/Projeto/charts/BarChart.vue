<template>
  <div id="app">
    <vue-apex-charts
      width="100%"
      type="bar"
      height="auto"
      :options="options"
      :series="series"
      :key="numId"
    ></vue-apex-charts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  props: ["infected", "time", "death", "region"],
  components: {
    VueApexCharts
  },
  data() {
    return {
      nulo: [0],
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "100%"
          }
        },
        colors: ["#2E93fA", "#c21f1f"],
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: this.region
        }
      },
      series: [
        {
          name: "Infectados",
          data: this.infected
        },
        {
          name: "Óbitos",
          data: this.death
        }
      ],
      numId: 0
    };
  }
};
</script>

<style scoped>
#RA_name {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 25px;
}

.selector {
  align-content: center;
  text-align: center;
}
</style>
