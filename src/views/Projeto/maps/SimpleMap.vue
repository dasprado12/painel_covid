<template>
<div style="height: 500px; width: 100%">
    <l-map :zoom="zoom" :center="center" :options="mapOptions" @update:center="centerUpdate" @update:zoom="zoomUpdate">
    <l-tile-layer :url="url"/>
        <l-marker v-for="point in data" :key="point" :lat-lng="point.posicao">
            <l-popup>
                <div @click="innerClick">
                    <v-card>
                        <v-card-text>
                            {{ point.regiao }}
                            {{ point.num }}
                        </v-card-text>
                    </v-card>
                </div>
            </l-popup>
        </l-marker>
    </l-map>
</div>
</template>

<script>
import { Data } from "../../../functions/index.js"
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
// import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

let api_data = new Data();

export default {
name: "Example",
components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    // 'v-marker-cluster': Vue2LeafletMarkerCluster
},
data() {
    return {
        data: null,
        zoom: 10,
        center: latLng(-15.793599, -47.914987),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
    };
},
async created(){
    this.list_data();
},
methods: {
    async list_data(){
        let data = (await api_data.get_region_by_date('2020-03-26') ).data
        console.log(data)
        this.data = data.map(function(data){
            data['posicao'] = { lat: data['latitude'], lng: data['longitude']}
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