<template>
  <div>
    <v-map :zoom="10" :center="initialLocation">
      <v-icondefault :image-path="'/statics/leafletImages/'"></v-icondefault>
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-marker-cluster>
        <v-marker v-for="c in cases" :lat-lng="c.latlng" :key="c">
          <v-popup :content="c.tooltipContent"></v-popup>
        </v-marker>
      </v-marker-cluster>
    </v-map>
  </div>
</template>

<script>
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

export default {
  components: {
    "v-marker-cluster": Vue2LeafletMarkerCluster
  },
  data() {
    return {
      cases: [{ latlng: [123, 123], tooltipContent: "oi" }]
    };
  }
};
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
