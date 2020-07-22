<template>
    <div id="map" class="mapCss">
    </div>
</template>

<script>
import { Data } from "../../../functions/index.js"
import * as L from "leaflet";
let api_data = new Data()

export default {
    props: [ 'date' ],
    name: "Example",
    data() {
        return {
            map:null,
            tileLayer:null,
            layers:[
                {id:0,
                active: true,
                features:[],
                }
            ],
            marker:null,
            geojson: null,
            numId: 0
        };
    },
    mounted(){
        this.createMap();
        this.manipulate();
    },
    async created(){

        this.list_data();
        this.created();
    },
    computed: {
        data(){
            return [{"_id":"5ec4225498bbbca607865cd6","regiao":"Águas Claras","latitude":-15.835754999999999,"longitude":-48.023703999999995,"num":16,"porcentagem":9.4,"incidencia":10.38,"obitos":0,"porcentagem obitos":0,"dataExtracao":"2020-03-26T00:00:00.000Z"},{"_id":"5ec4225498bbbca607865cd7","regiao":"Recanto Das Emas","latitude":-15.916970000000001,"longitude":-48.101851,"num":0,"porcentagem":0,"incidencia":0,"obitos":0,"porcentagem obitos":0,"dataExtracao":"2020-03-26T00:00:00.000Z"},{"_id":"5ec4225498bbbca607865cd8","regiao":"Samambaia","latitude":-15.874647,"longitude":-48.101735,"num":2,"porcentagem":1.2,"incidencia":0.82,"obitos":0,"porcentagem obitos":0,"dataExtracao":"2020-03-26T00:00:00.000Z"}, {"_id":"5ec4225498bbbca607865cde","regiao":"Sudoeste/Octogonal","latitude":-15.791981,"longitude":-47.929973,"num":19,"porcentagem":11.1,"incidencia":34.38,"obitos":0,"porcentagem obitos":0,"dataExtracao":"2020-03-26T00:00:00.000Z"},{"_id":"5ec4225498bbbca607865cf3","regiao":"Jardim Botânico","latitude":-15.855691,"longitude":-47.809974,"num":3,"porcentagem":1.8,"incidencia":5.16,"obitos":0,"porcentagem obitos":0,"dataExtracao":"2020-03-26T00:00:00.000Z"},{"_id":"5ec4225498bbbca607865cd9","regiao":"Taguatinga","latitude":-15.829303,"longitude":-48.055925,"num":6,"porcentagem":3.5,"incidencia":6.88,"obitos":0,"porcentagem obitos":0,"dataExtracao":"2020-03-26T00:00:00.000Z"}]
        }
    },
    methods: {
        getIncidencia(geoName, data){
            let incid
                data.forEach(function(point){
                        let name = point.regiao.replace(/\s/g,'')
                        let nameReady = name.replace('/', "-")
                            if(geoName=== nameReady){
                                alert(geoName);
                            incid = point.incidencia
                            return incid
                            }
                            else{ incid = 0}
                    })
                    return incid;
        },
        async addGeojson(){
            let geo = this.geojson
            let map = this.map
            let myStyle
            let data = this.data
                    let leve={
                "color":"#ffbaba",
                "fillColor":"#ffbaba",
                "opacity":"0.2"
            }
            let middle={
                "color":"#ff7b7b",
                "fillOpacity":"0.8"
            }
            let muitoGrave={
                "color":"#a70000",
                "fillColor":"#a70000",
                "fillOpacity":"0.8"
            }
            let incid=0;
            geo.features.forEach(function(geojson){
            let geoName= geojson.name
            console.log(incid)
                data.forEach(function(point){
                    let name = point.regiao.replace(/\s/g,'')
                    let nameReady = name.replace('/', "-")
                        if(geoName=== nameReady){
                        incid = point.incidencia
                        }
                })
                if (parseFloat(incid) <= 5){
                    myStyle = leve;
                }
                else if(parseFloat(incid) <= 10){
                    // alert(geoName)
                    myStyle =middle;
                }
                else{
                    myStyle = muitoGrave
                }
                // layer.addData(geojson.features, {style: myStyle})
                incid=0;
                console.log(incid)
                L.geoJSON(geojson.features,{style: myStyle}).addTo(map)
            })
        },
        async createMap(){
            this.map = L.map('map').setView([-15.793599, -47.814987], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
        },
        async created(){
            const response = await fetch('https://raw.githubusercontent.com/dasprado12/Brasilia-RAs-georreferenciadas/master/Geojsons/All.geojson');
            this.geojson = await response.json();
        },
        async manipulate(){
            let mapa = this.map
            let array=[]
                    let icon = new L.Icon.Default();
                    icon.options.shadowSize = [0, 0];
            this.data.forEach(function(point){
                // let mark = {
                //         key: point.regiao,
                //         type:"marker",
                //         posicao: point.posicao,
                //     }
                let mark = L.marker(point.posicao).addTo(mapa);
                    array.push(mark)
                    console.log(mark)
                // this.layers[0].features.push(mark)
            })
            this.layers[0].features = array;
        },
        async list_data(){
            let last_date = (await api_data.get_last_date()).data.split("T")[0]
            let data = (await api_data.get_region_by_date2(last_date) ).data
            this.data = data.map(function(data){
                if(!data.latitude || !data.longitude){
                    data.latitude = "1.1"
                    data.longitude = "1.1"
                }
                data['posicao'] = { lat: data.latitude.toString().replace(",", "."), lng: data.longitude.toString().replace(",", ".")};
            })
            // this.manipulate(data);
            this.data = data
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
    },
    watch:{
        geojson: function(){
            // let map = this.map
            // this.geoLayer = L.geoJSON().addTo(map);
            this.addGeojson();
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