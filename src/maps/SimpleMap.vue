<template>
    <div class="mapCss">
        <div class="legenda">
            <v-card elevation="5">
                <v-row>
                    <v-col cols="6">
                        <v-card-title class="`white--text`">
                            <h5>{{currentOption.name}}</h5>
                        </v-card-title>
                        <v-card-text>
                            <span class="legenda-texto"> <b>Infected:</b> {{currentOption.num}} </span><br>
                            <span class="legenda-texto"> <b>Deaths:</b> {{currentOption.obitos}} </span>
                        </v-card-text>
                    </v-col>
                    <v-col cols="6">
                            <v-card-text>
                                <div v-for="(item,idx) in legenda()" :key="idx">
                                    <span v-if="idx==0"> <v-badge :color="getColor(type, idx)"/> <span class="simple-space"/> 0 - {{item.menor-1}}  </span>
                                    <span v-if="idx>=1 && idx <=3"> <v-badge :color="getColor(type, idx)"/> <span class="simple-space"/> {{item.maior}} - {{item.menor-1}}  </span>
                                    <span v-if="idx==4"> <v-badge :color="getColor(type, idx)"/> <span class="simple-space"/> {{item.maior}} - >  </span>
                                </div>
                            </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="legenda2">
            <v-card flat color="transparent">
                
            </v-card>
        </div>
        <l-map :zoom="zoom" :center="center" @update:center="centerUpdate" @update:zoom="zoomUpdate">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            <l-geo-json 
                v-for="item in geojson" 
                :geojson="item" 
                :options="item.style" 
                :key="item.name"
                @mouseover="mouseOver(item)"
            />                
            <l-icon-default :image-path="'../../../assets/marker.png'"></l-icon-default>
                <v-marker-cluster>
                    <l-marker  v-for="point in filteredData" :key="point.regiao" :lat-lng="point.posicao">
                        <l-popup>
                            <div @click="innerClick">
                                <v-card flat>
                                    <v-card-title><b>Região:</b> {{ point.regiao }}</v-card-title>
                                    <v-card-text>
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
import { Data } from "../functions/index.js"
import { latLng } from "leaflet";
import { LGeoJson, LMap, LTileLayer, LMarker, LPopup, LIconDefault } from "vue2-leaflet";
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

let api_data = new Data();


export default {
name: "SimpleMap",
props: [ 'showPoints', 'type' ],  
components: { LGeoJson, LMap, LTileLayer, LMarker, LPopup, LIconDefault, 'v-marker-cluster': Vue2LeafletMarkerCluster,
},
data() {
    return {
        data: null,
        filteredData: null,
        geojson: null,
        last_date: null,
        zoom: 10,
        colors: {
            num:    [ '#edded1', '#e3bd9d', '#d4935d', '#d16b17', '#854007' ],
            obitos: [ '#f2e6e6', '#edbbbb', '#d67c7c', '#b33e3e', '#660404' ]
        },
        center: latLng(-15.793599, -47.814987),
        currentZoom: 11.5,
        currentCenter: latLng(47.41322, -1.219482),
        range: {
            num: [ 1000, 2000, 3000, 4000 ],
            obitos:[ 10, 20, 30, 40 ]
        },
        currentOption: {
            name: '',
            num: '',
            obitos: '',
            color: null
        }
    }
},
async mounted(){
    this.create();
    this.setCurrent({style:{color:''}, data:{regiao:'Região', num:'--------', obitos: '---------' }})
},
methods: {
    async create(){
        const response = await fetch('https://raw.githubusercontent.com/dasprado12/Brasilia-RAs-georreferenciadas/master/Geojsons/All.geojson');
        let geojson = await response.json() 
        let last_date = (await api_data.get_last_date()).data.split("T")[0]
        this.range = {
            num: [ 1000, 2000, 3000, 4000 ],
            obitos:[ 10, 20, 30, 40 ]
        }//(await api_data.get_incid()).data.map(function(item){return ~~item})
        let data = (await api_data.get_region_by_date(last_date) ).data.map(function(data){
            if(!data.latitude || !data.longitude){
                data.latitude = "1.1"
                data.longitude = "1.1"
            }
            data['posicao'] = { lat: data.latitude, lng: data.longitude}
            return data
        })
        this.data = data
        for(let i = 0; i < geojson.length; i++){
            for(let j = 0; j < data.length; j++){
                if(geojson[i].name == data[j].regiao){
                    geojson[i]['data'] = { "regiao": data[j].regiao, "num": data[j].num, "obitos": data[j].obitos   }
                    if(data[j][this.type] < this.range[this.type][0]){
                        geojson[i]['style'] = { color: this.colors[this.type][0], weight: 2 }
                    }else if(data[j][this.type] >= this.range[this.type][0] && data[j][this.type] < this.range[this.type][1] ){
                        geojson[i]['style'] = { color: this.colors[this.type][1], weight: 2 }
                    
                    }else if(data[j][this.type] >= this.range[this.type][1] && data[j][this.type] < this.range[this.type][2]){
                        geojson[i]['style'] = { color: this.colors[this.type][2], weight: 2 }
                    
                    }else if(data[j][this.type] >= this.range[this.type][2] && data[j][this.type] < this.range[this.type][3] ){
                        geojson[i]['style'] = { color: this.colors[this.type][3], weight: 2 }
                    
                    }else if(data[j][this.type] >= this.range[this.type][3]){
                        geojson[i]['style'] = { color: this.colors[this.type][4], weight: 2 }
                    
                    }else{
                        geojson[i]['style'] = { color: "#828282" }
                    }
                }
            }
        }
        this.geojson = geojson
    },
    legenda(){
        let ret = this.range[this.type]
        let arr_ret = []
        for(let i = 0; i < ret.length; i++){
            if(i==0){
                arr_ret.push({'menor': ret[i]})
            }else if(i == 1){
                arr_ret.push({'maior': ret[i-1], 'menor': ret[i]})
            }else if(i == 2){
                arr_ret.push({'maior': ret[i-1], 'menor': ret[i]})
            }else if(i == 3){
                arr_ret.push({'maior': ret[i-1], 'menor': ret[i]})
                arr_ret.push({'maior': ret[i]})
            }
        }
        return arr_ret
    },
    getColor(tipo, posicao){
        return this.colors[this.type][posicao]
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
    },
    showPopup(val){
        alert(val)
    },
    mouseOver(item){
        this.setCurrent(item)
    },
    setCurrent(item){
        this.currentOption.color = item.style.color
        this.currentOption.name = item.data.regiao
        this.currentOption.num = item.data.num
        this.currentOption.obitos = item.data.obitos
    },
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
.cardColor{
    background-color: rgb(240, 240, 240);
}
.legenda{
    margin-left: 25px;
    margin-top: 305px;
    position: absolute;
    z-index: 500;
    color: rgb(202, 109, 109);
}

.text-legend{
    position: absolute;
    z-index: 500;
}

.simple-space{
    padding-left: 20px;
}

.currentColor{
    position: absolute;
}

</style>