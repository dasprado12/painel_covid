<template>
    <div >
      
	    <script src="../../../exemple/index.js"></script>
      <div id = "MyDiv"> </div>
      
    </div>
</template>

<script>
import locations from "../../../example/index.js"
import plotly from "../../../utils/plotly.js"
//const teste = locations.DF[0].num
var total_casos = 0
var total_obitos = 0
locations.DF.forEach(iten => {
    total_casos += iten.num
    total_obitos+= iten.obitos   
})

var labelRa = ["", locations.DF[0].regiao, locations.DF[1].regiao, locations.DF[2].regiao, locations.DF[3].regiao, locations.DF[4].regiao, locations.DF[5].regiao, locations.DF[6].regiao, locations.DF[7].regiao, locations.DF[8].regiao, locations.DF[9].regiao, locations.DF[10].regiao, locations.DF[11].regiao, locations.DF[12].regiao, locations.DF[13].regiao, locations.DF[14].regiao, locations.DF[15].regiao, locations.DF[16].regiao, locations.DF[17].regiao, locations.DF[18].regiao, locations.DF[19].regiao, locations.DF[20].regiao, locations.DF[21].regiao, locations.DF[22].regiao, locations.DF[23].regiao, locations.DF[24].regiao, locations.DF[25].regiao, locations.DF[26].regiao, locations.DF[27].regiao, locations.DF[28].regiao, locations.DF[29].regiao, locations.DF[30].regiao, locations.DF[31].regiao, locations.DF[32].regiao, locations.DF[33].regiao, locations.DF[34].regiao,  locations.DF[35].regiao,  locations.DF[36].regiao,  locations.DF[37].regiao,  locations.DF[38].regiao,  locations.DF[39].regiao, locations.DF[40].regiao];
var DF_parent = ["", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF", "DF", "DF","DF","DF", "DF", "DF","DF", "DF", "DF","DF"];

var data = [
  {
    type: "treemap",
    name: "Casos",
    text:"Casos do DF",
    branchvalues: "total",
    labels: labelRa,
    parents: DF_parent,
    domain: { x: [0, 0.48] },
    values: [locations.DF[0].num, locations.DF[1].num, locations.DF[2].num, locations.DF[3].num, locations.DF[4].num, locations.DF[5].num, locations.DF[6].num, locations.DF[7].num, locations.DF[8].num, locations.DF[9].num, locations.DF[10].num, locations.DF[11].num, locations.DF[12].num, locations.DF[13].num, locations.DF[14].num, locations.DF[15].num, locations.DF[16].num, locations.DF[17].num, locations.DF[18].num, locations.DF[19].num, locations.DF[20].num, locations.DF[21].num, locations.DF[22].num, locations.DF[23].num, locations.DF[24].num, locations.DF[25].num, locations.DF[26].num, locations.DF[27].num, locations.DF[28].num, locations.DF[29].num, locations.DF[30].num, locations.DF[31].num, locations.DF[32].num, locations.DF[33].num, locations.DF[34].num, locations.DF[35].num, locations.DF[36].num, locations.DF[37].num, locations.DF[38].num, locations.DF[39].num, locations.DF[40].num],
    textinfo: "label+value+percent parent+percent text+parent",


    outsidetextfont: { size: 20, color: "#377eb8" },
    marker: { line: { width: 2 } },
    pathbar: { visible: false },
  },

  { 
    type: "treemap",
    name: "Obitos",
    branchvalues: "total",
    labels: labelRa,
    parents: DF_parent,
    values: [locations.DF[0].obitos, locations.DF[1].obitos, locations.DF[2].obitos, locations.DF[3].obitos, locations.DF[4].obitos, locations.DF[5].obitos, locations.DF[6].obitos, locations.DF[7].obitos, locations.DF[8].obitos, locations.DF[9].obitos, locations.DF[10].obitos, locations.DF[11].obitos, locations.DF[12].obitos, locations.DF[13].obitos, locations.DF[14].obitos, locations.DF[15].obitos, locations.DF[16].obitos, locations.DF[17].obitos, locations.DF[18].obitos, locations.DF[19].obitos, locations.DF[20].obitos, locations.DF[21].obitos, locations.DF[22].obitos, locations.DF[23].obitos, locations.DF[24].obitos, locations.DF[25].obitos, locations.DF[26].obitos, locations.DF[27].obitos, locations.DF[28].obitos, locations.DF[29].obitos, locations.DF[30].obitos, locations.DF[31].obitos, locations.DF[32].obitos, locations.DF[33].obitos, locations.DF[34].obitos, locations.DF[35].obitos, locations.DF[36].obitos, locations.DF[37].obitos, locations.DF[38].obitos, locations.DF[39].obitos, locations.DF[40].obitos],
    textinfo: "label+value+percent",
    domain: { x: [0.52, 1] },
    outsidetextfont: { size: 20, color: "#377eb8" },
    marker: { line: { width: 2 } },
    pathbar: { visible: false },
  },
  
];
var layout = {
  annotations: [
    {
      showarrow: false,
      showlegend: true,
      legend:{
        x: 1,
        y: 0.5,
      },
      text: "Número de Casos de Covid-19 no DF:  " +  total_casos, 
      x: 0.25,
      xanchor: "center",
      y: 1.1,
      yanchor: "bottom",
      
    },

    {
      showarrow: false,
      showlegend: true,
      legend:{
        x: 1,
        y: 0.5,
      },
      text: "Número de Obitos de Covid-19 no DF: " + total_obitos,
      x: 0.75,
      xanchor: "center",
      y: 1.1,
      yanchor: "bottom",
    },
  ],

};

Plotly.newPlot("myDiv", data, layout,);

</script>



