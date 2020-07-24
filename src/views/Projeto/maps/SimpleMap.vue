<template>
    <div class="mapCss">
        <l-map :zoom="zoom" :center="center" @update:center="centerUpdate" @update:zoom="zoomUpdate">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
        <span v-for="item in geojson" :key="item">
            <l-geo-json :geojson="item" :options="item.style" ></l-geo-json>
        </span>
            <l-icon-default :image-path="'../../../assets/marker.png'"></l-icon-default>
            <v-marker-cluster>
                <l-marker v-for="point in points" :key="point.regiao" :lat-lng="point.posicao">
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
name: "SimpleMap",
props: [ 'type' ],  
components: { 
        LGeoJson, 
        LMap, 
        LTileLayer, 
        LMarker, 
        LPopup, 
        LIconDefault, 'v-marker-cluster': Vue2LeafletMarkerCluster 
    },
data() {
    return {
        data: null,
        geojson: null,
        last_date: null,
        zoom: 10,
        colors: {
            num: [ '#dbffe2', '#9ae3a8', '#65c978', '#3eb053', '#188c2d' ],
            obitos: [ '#e8b3b3', '#e8b3b3', '#c95757', '#9e2b2b', '#780404' ]
        },
        center: latLng(-15.793599, -47.814987),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
    };
},
async created(){
    this.created();
},
methods: {
    async created(){
        const response = await fetch('https://raw.githubusercontent.com/dasprado12/Brasilia-RAs-georreferenciadas/master/Geojsons/All.geojson');
        let geojson = await response.json() 
        let last_date = (await api_data.get_last_date()).data.split("T")[0]
        let data = (await api_data.get_region_by_date(last_date) ).data
        this.data = data
        for(let i = 0; i < geojson.length; i++){
            for(let j = 0; j < data.length; j++){
                if(geojson[i].name == data[j].regiao){
                    if(data[j][this.type] < 10){
                        geojson[i]['style'] = { color: this.colors[this.type][0], weight: 1 }
                    }else if(data[j][this.type] >= 10 && data[j][this.type] < 20 ){
                        geojson[i]['style'] = { color: this.colors[this.type][1], weight: 1 }
                    }else if(data[j][this.type] >= 20 && data[j][this.type] < 30){
                        geojson[i]['style'] = { color: this.colors[this.type][2], weight: 1 }
                    }else if(data[j][this.type] >= 30 && data[j][this.type] < 40 ){
                        geojson[i]['style'] = { color: this.colors[this.type][3], weight: 1 }
                    }else if(data[j][this.type] >= 40){
                        geojson[i]['style'] = { color: this.colors[this.type][4], weight: 1 }
                    }else{
                        geojson[i]['style'] = { color: "#828282" }
                    }
                }
            }
        }
        this.geojson = geojson
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