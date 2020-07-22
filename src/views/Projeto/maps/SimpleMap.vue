<template>
<div class="mapCss">
    <l-map :zoom="zoom" :center="center" @update:center="centerUpdate" @update:zoom="zoomUpdate">
    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
    <l-geo-json :geojson="geojson"></l-geo-json>
        <l-icon-default :image-path="'../../../assets/marker.png'"></l-icon-default>
        <v-marker-cluster>
            <l-marker v-for="point in data" :key="point.regiao" :lat-lng="point.posicao">
                <l-popup>
                    <div @click="innerClick">
                        <v-card flat>
                            <v-card-text>
                                <b>Região:</b> {{ point.regiao }}
                                <b>Infectados:</b> {{ point.num }}
                                <b>Óbitos:</b> {{ point.obitos }}
                            </v-card-text>
                        </v-card>
                    </div>
                </l-popup>
            </l-marker>
        </v-marker-cluster>
    </l-map>
</div>
</template>

<script>
import { Data } from "../../../functions/index.js"
import { latLng } from "leaflet";
import { LGeoJson, LMap, LTileLayer, LMarker, LPopup, LIconDefault } from "vue2-leaflet";
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
let api_data = new Data();
export default {
name: "Example",
components: { LGeoJson, LMap, LTileLayer, LMarker, LPopup, LIconDefault, 'v-marker-cluster': Vue2LeafletMarkerCluster },
data() {
    return {
        data: null,
        last_date: null,
        zoom: 10,
        center: latLng(-15.793599, -47.814987),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
        geojson: null
    };
},
async created(){
    this.list_data();
    this.created();
},
methods: {
    async created(){
        const response = await fetch('https://raw.githubusercontent.com/dasprado12/Brasilia-RAs-georreferenciadas/master/Geojsons/All.geojson');
        this.geojson = await response.json();
    },
    async list_data(){
        // 
        let last_date = (await api_data.get_last_date()).data.split("T")[0]
        let data = (await api_data.get_region_by_date2(last_date) ).data
        this.data = data.map(function(data){
            if(!data.latitude || !data.longitude){
                data.latitude = "1.1"
                data.longitude = "1.1"
            }
            data['posicao'] = { lat: data.latitude.replace(",", "."), lng: data.longitude.replace(",", ".")}
            return data
        })
    },
    zoomUpdate(zoom) {
    this.currentZoom = zoom;
    },
    centerUpdate(center) {
    this.currentCenter = center;
    },
    showLongText() {
    this.showParagraph = !this.showParagraph;
    },
    innerClick() {
    alert("Click!");
    }
}
};
</script>

<style scoped lang="scss">
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.charts-highcharts {
}
.-map {
    width: 100%;
    height: 800px;
}
.mapCss{
    height: 500px; 
    width: 100%
}
</style>