(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04b7":function(t,e,a){t.exports=a.p+"img/brasao-unb.cbd91930.jpg"},1771:function(t,e,a){var n={"./andre.jpg":"394a","./as_bas_PB.jpg":"acfe","./brasao-ufc.png":"6557","./brasao-unb.jpg":"04b7","./brasil-map.png":"c75a","./brasil-map1.png":"778f","./daniel.jpg":"9a67","./francisco.jpg":"7fc5","./graph-network.png":"b5cd","./leonardo.jpg":"1c1f","./logo.png":"cf05","./logo.svg":"9b19","./lucas_coelho.jpg":"c1e3","./marker.png":"3b84","./natalia.jpg":"9c8f","./nayara.jpg":"41d5","./paulo.jpg":"7e17","./profile.png":"c3e7","./regions":"1dda","./regions.json":"1dda","./timoteo.jpg":"527f","./unb-icc.jpeg":"416c"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="1771"},"1c1f":function(t,e,a){t.exports=a.p+"img/leonardo.de5c17f5.jpg"},"1dda":function(t){t.exports=JSON.parse("[]")},2851:function(t,e,a){"use strict";var n=a("7ff0"),r=a.n(n);r.a},"2cb5":function(t,e,a){},"32d3":function(t,e,a){},"394a":function(t,e,a){t.exports=a.p+"img/andre.a7a04935.jpg"},"3b70":function(t,e,a){"use strict";var n=a("892f"),r=a.n(n);r.a},"3b84":function(t,e,a){t.exports=a.p+"img/marker.3af80a39.png"},"416c":function(t,e,a){t.exports=a.p+"img/unb-icc.5db1008d.jpeg"},"41d5":function(t,e,a){t.exports=a.p+"img/nayara.d92d7d7e.jpg"},4437:function(t,e,a){},4571:function(t,e,a){"use strict";var n=a("2cb5"),r=a.n(n);r.a},4624:function(t,e,a){"use strict";var n=a("4cda"),r=a.n(n);r.a},"4cda":function(t,e,a){},"527f":function(t,e,a){t.exports=a.p+"img/timoteo.0afcdafc.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},o=[],i={name:"App",components:{},data:function(){return{}},created:function(){console.log("https://simop.redes.unb.br")}},s=i,c=(a("bd9b"),a("2877")),u=a("6544"),l=a.n(u),d=a("7496"),p=Object(c["a"])(s,r,o,!1,null,"097a7ae4",null),f=p.exports;l()(p,{VApp:d["a"]});var m=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"main_project"},[a("Toolbar"),a("v-content",{staticClass:"backgroundColor"},[a("router-view",{staticClass:"view"})],1),a("Footer")],1)},v=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background_color"},[a("v-toolbar",{staticClass:"main_toolbar",attrs:{flat:""}},[a("v-toolbar-title",{staticClass:"font-weight-light"},[a("b",[t._v("| Logo do Projeto |")])]),a("v-spacer"),a("v-toolbar-items",t._l(t.pages,(function(e){return a("v-btn",{key:e.title,attrs:{to:e.router,text:""}},[a("span",{staticClass:"font-weight-thin"},[a("b",[t._v(t._s(e.title))])])])})),1)],1),a("v-divider")],1)},_=[],b={data:function(){return{pages:[{title:"Projeto",router:"/",color:"white"},{title:"Dados",router:"/dados",color:"green lighten-2"},{title:"Equipe",router:"/equipe",color:"green lighten-2"},{title:"Contato",router:"/contato",color:"green lighten-2"}]}}},x=b,w=(a("ee49"),a("8336")),j=a("ce7e"),C=a("2fa4"),y=a("71d9"),O=a("2a7f"),k=Object(c["a"])(x,h,_,!1,null,"4bd14a4b",null),V=k.exports;l()(k,{VBtn:w["a"],VDivider:j["a"],VSpacer:C["a"],VToolbar:y["a"],VToolbarItems:O["a"],VToolbarTitle:O["b"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("br"),n("br"),n("div",{staticClass:"observacoes"},[n("v-divider"),t._m(0)],1),n("div",{staticClass:"parceiros"},[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("v-spacer"),n("div",{staticClass:"column"},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("6557")}})]),n("div",{staticClass:"column"},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("04b7")}})])],1)],1)],1)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"observacoes_texto font-weight-light"},[t._v(" Este projeto é uma parceria entre pequisadores da "),a("b",[t._v("Universidade de Brasília (UnB)")]),t._v(" e pesquisadores da "),a("b",[t._v("Universidade Federal do Ceará (UFC)")]),t._v("."),a("br"),t._v(" Todos os dados aqui expostos foram retirados dos portais das "),a("b",[t._v("Secretarias de Saúde dos Estados")]),t._v(" e estão disponíveis para download via API."),a("br"),t._v(" Caso encontre algum erro, contate-nos na aba "),a("b",[t._v("'Contatos'")])])}],R={data:function(){return{logos:[{alt:"Universidade Federal do Ceará",src:"../assets/brasao-ufc.png",link:"/"},{alt:"Universidade de Braília",src:"../assets/brasao-unb.jpg",link:"/"}]}}},P=R,I=(a("3b70"),a("b0af")),S=a("99d9"),$=Object(c["a"])(P,E,T,!1,null,"6882ea92",null),U=$.exports;l()($,{VCard:I["a"],VCardTitle:S["b"],VDivider:j["a"],VSpacer:C["a"]});var F={components:{Toolbar:V,Footer:U},data:function(){return{}}},D=F,M=(a("4571"),a("a75b")),q=Object(c["a"])(D,g,v,!1,null,"004ac7af",null),B=q.exports;l()(q,{VApp:d["a"],VContent:M["a"]});var A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[a("p",{attrs:{className:"box"}},[t._v("Projeto Painel Covid-19 ")])]),a("p",{staticClass:"p"},[t._v(" O projeto do Painel Covid-19 é uma iniciativa do Latitude - Laboratório de Tecnologias de Tomada de Decisão (ENE/FT/UnB) em parceria com a Universidade Federal do Ceará (UFC). O projeto tem por objetivo auxiliar a comunidade na analise dos dados da evolução do Covid-19 de forma clara atraves de gráficos que demonstram o número de obitos e infectados. ")]),a("p",{staticClass:"p"},[t._v(" Os dados são coletados através de API's ou por scrapping do site da Secretária de Saúde Pública de cada estado e do Distrito Federal. Esses dados são utilizados para gerar os gráficos apresentados no site. ")])])}],z={name:"Home",components:{}},J=z,G=(a("a10f"),Object(c["a"])(J,A,N,!1,null,"37b6f62b",null)),H=G.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"equipe"},[t._m(0),n("v-container",[n("v-row",{attrs:{"no-gutters":""}},t._l(t.equipe,(function(e){return n("v-col",{key:e.name,attrs:{cols:"4"}},[n("v-card",{attrs:{flat:""}},[n("v-img",{attrs:{src:a("1771")("./"+e.fig),"max-width":"200","max-height":"250"}}),n("div",{staticClass:"text-img"},[n("div",{staticClass:"text-img"},[t._v(t._s(e.name))]),n("div",{staticClass:"text-img"},[t._v(t._s(e.role))]),n("div",{staticClass:"text-img"},[t._v(t._s(e.un)+" ")])])],1)],1)})),1)],1)],1)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titulo_principal"},[a("br"),a("h1",{},[t._v("Nossa Equipe ")])])}],Q={data:function(){return{}},computed:{equipe:function(){return[{name:"Rafael T. de Sousa Júnior",role:"Prof. Dr. Adjunto",un:"ENE/FT/UnB",fig:"timoteo.jpg"},{name:"Francisco L. Caldas",role:"Doutorando",un:"ENE/FT/UnB",fig:"francisco.jpg"},{name:"Paulo Henrique",role:"Mestrando",un:"ENE/FT/UnB",fig:"paulo.jpg"},{name:"Lucas Coelho",role:"Mestrando",un:"ENE/FT/UnB",fig:"lucas_coelho.jpg"},{name:"Jonathas Alves",role:"Mestrando",un:"ENE/FT/UnB",fig:"profile.png"},{name:"Daniel Prado",role:"Graduando",un:"ENE/FT/UnB",fig:"daniel.jpg"},{name:"André Ribeiro",role:"Graduando",un:"ENE/FT/UnB",fig:"andre.jpg"},{name:"Natália A. Marques",role:"Graduando",un:"ENE/FT/UnB",fig:"natalia.jpg"}]}}},W=Q,X=(a("ce03"),a("62ad")),Y=a("a523"),tt=a("adda"),et=a("0fd9"),at=Object(c["a"])(W,Z,K,!1,null,"03eb583d",null),nt=at.exports;l()(at,{VCard:I["a"],VCol:X["a"],VContainer:Y["a"],VImg:tt["a"],VRow:et["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dados"},[a("div",{staticClass:"regioes"},[a("v-container",[a("h1",{staticClass:"font-weight-bold"},[t._v("Região")]),a("v-divider"),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("h2",{staticClass:"font-weight-normal"},[t._v("Historico")]),a("v-divider"),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("historico-infectados",{attrs:{region:t.region}})],1),a("v-flex",{attrs:{xs12:""}},[a("historico-obitos",{attrs:{region:t.region}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{"d-flex":"",xs12:"",sm6:"",md6:""}},[a("v-card",{attrs:{width:"100%"}},[a("v-card-title",{staticClass:"yellow darken-2 title",attrs:{primary:""}},[t._v("Mapa")]),a("v-divider"),a("v-card-text",[a("simple-map")],1)],1)],1)],1),a("br"),a("v-layout",[a("v-flex",{attrs:{row:"",wrap:""}},[a("v-col",[a("h2",{staticClass:"font-weight-normal"},[t._v("Por região")])]),a("v-col",[a("v-select",{attrs:{dense:"",items:t.regions,attach:"",chips:"",multiple:""},model:{value:t.region,callback:function(e){t.region=e},expression:"region"}})],1)],1)],1),a("v-divider"),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("mix-infectados",{attrs:{regions:t.region}})],1),a("v-col",{attrs:{cols:"6"}},[a("tree-infectados",{attrs:{regions:t.region}})],1),a("v-col",{attrs:{cols:"6"}},[a("mix-obitos",{attrs:{regions:t.region}})],1),a("v-col",{attrs:{cols:"6"}},[a("tree-obitos",{attrs:{regions:t.region}})],1)],1)],1)],1)],1)],1)])},ot=[],it=(a("96cf"),a("1da1")),st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{color:""}},[a("v-card-title",{staticClass:"green lighten-4"},[t._v(" Infectados ")]),a("v-card-text",[a("one-line-chart",{key:t.key,attrs:{time:t.time,data:t.data}})],1)],1)],1)},ct=[],ut=(a("d81d"),a("ac1f"),a("1276"),a("d4ec")),lt=a("bee2"),dt=a("ade3"),pt=a("bc3a"),ft=a.n(pt),mt="https://simop.redes.unb.br/api/regions",gt="https://simop.redes.unb.br/apiv2/regiao/",vt={all_data:mt,many_regions:mt+"/listMany",all_regions:mt+"/list",all_dates:mt+"/dates",last_date:mt+"/newestDate"},ht=function(){function t(){Object(ut["a"])(this,t),Object(dt["a"])(this,"get_all_data",(function(){return ft.a.get(vt.all_data)})),Object(dt["a"])(this,"get_hist_data",(function(){return ft.a.get(mt+"?regiao=Total DF")})),Object(dt["a"])(this,"get_all_regions",(function(){return ft.a.get(vt.all_regions)})),Object(dt["a"])(this,"get_all_dates",(function(){return ft.a.get(vt.all_dates)})),Object(dt["a"])(this,"get_last_date",(function(){return ft.a.get(vt.last_date)})),Object(dt["a"])(this,"get_data_by_region",(function(t){return ft.a.get(mt+"?regiao="+t)})),Object(dt["a"])(this,"get_region_by_date",(function(t){return ft.a.get(mt+"?dataExtracao="+t)})),Object(dt["a"])(this,"get_region_by_date2",(function(t){return ft.a.get(gt+"?dataExtracao="+t)}))}return Object(lt["a"])(t,[{key:"get_many_data",value:function(t,e){return t||(t="num"),ft.a.get(vt.many_regions+"/".concat(t)+"?regiao="+e)}}]),t}(),_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-apex-charts",{attrs:{width:"100%",type:"line",options:t.options,series:t.series}})],1)},bt=[],xt=a("1321"),wt=a.n(xt),jt={props:["data","time"],components:{VueApexCharts:wt.a},data:function(){return{numId:0}},computed:{options:function(){return{stroke:{curve:"smooth"},colors:["#00bf5d"],chart:{id:"vuechart-example1"},xaxis:{categories:this.time}}},series:function(){return[{name:"Infectados",data:this.data}]}},beforeMount:function(){this.key++},methods:{}},Ct=jt,yt=Object(c["a"])(Ct,_t,bt,!1,null,null,null),Ot=yt.exports,kt=new ht,Vt={props:["region"],components:{OneLineChart:Ot},data:function(){return{color:"#01fe43",time:null,data:null,key:0}},created:function(){this.historic_data(),this.aux++},methods:{historic_data:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,kt.get_hist_data();case 2:return a=e.sent.data,e.next=5,kt.get_all_dates();case 5:n=e.sent.data,a=a.map((function(t){return t.num})),t.time=n.map((function(t){return t.split("T")[0]})),t.data=a;case 9:case"end":return e.stop()}}),e)})))()}}},Et=Vt,Tt=Object(c["a"])(Et,st,ct,!1,null,null,null),Rt=Tt.exports;l()(Tt,{VCard:I["a"],VCardText:S["a"],VCardTitle:S["b"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{color:""}},[a("v-card-title",{staticClass:"red darken-2"},[t._v(" Óbitos ")]),a("v-card-text",[a("one-line-chart",{key:t.key,attrs:{time:t.time,data:t.data,color:t.color}})],1)],1)],1)},It=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-apex-charts",{key:t.key,attrs:{width:"100%",type:"line",options:t.options,series:t.series}})],1)},$t=[],Ut={props:["data","time"],components:{VueApexCharts:wt.a},data:function(){return{key:0}},computed:{options:function(){return{stroke:{curve:"smooth"},colors:["#bf0000"],chart:{id:"vuechart-example"},xaxis:{categories:this.time}}},series:function(){return[{name:"Infectados",data:this.data}]}},created:function(){this.key++},methods:{}},Ft=Ut,Lt=Object(c["a"])(Ft,St,$t,!1,null,null,null),Dt=Lt.exports,Mt=new ht,qt={props:["region"],components:{OneLineChart:Dt},data:function(){return{color:"#01fe43",time:null,data:null,key:0}},created:function(){this.historic_data(),this.aux++},methods:{historic_data:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Mt.get_hist_data();case 2:return a=e.sent.data,e.next=5,Mt.get_all_dates();case 5:n=e.sent.data,a=a.map((function(t){return t.obitos})),t.time=n.map((function(t){return t.split("T")[0]})),t.data=a;case 9:case"end":return e.stop()}}),e)})))()}}},Bt=qt,At=Object(c["a"])(Bt,Pt,It,!1,null,null,null),Nt=At.exports;l()(At,{VCard:I["a"],VCardText:S["a"],VCardTitle:S["b"]});var zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("simple-map")],1)},Jt=[],Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mapCss"},[a("l-map",{attrs:{zoom:t.zoom,center:t.center},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[a("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),a("l-geo-json",{attrs:{geojson:t.geojson}}),a("l-icon-default",{attrs:{"image-path":"../../../assets/marker.png"}}),a("v-marker-cluster",t._l(t.data,(function(e){return a("l-marker",{key:e.regiao,attrs:{"lat-lng":e.posicao}},[a("l-popup",[a("div",{on:{click:t.innerClick}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("b",[t._v("Região:")]),t._v(" "+t._s(e.regiao)+" "),a("b",[t._v("Infectados:")]),t._v(" "+t._s(e.num)+" "),a("b",[t._v("Óbitos:")]),t._v(" "+t._s(e.obitos)+" ")])],1)],1)])],1)})),1)],1)],1)},Ht=[],Zt=(a("d3b7"),a("5319"),a("e11e")),Kt=a("044a"),Qt=a("2699"),Wt=a("a40a"),Xt=a("4e2b"),Yt=a("f60f"),te=a("9762"),ee=a("ca9f"),ae=a.n(ee),ne=new ht,re={name:"Example",components:{LGeoJson:Kt["a"],LMap:Qt["a"],LTileLayer:Wt["a"],LMarker:Xt["a"],LPopup:Yt["a"],LIconDefault:te["a"],"v-marker-cluster":ae.a},data:function(){return{data:null,last_date:null,zoom:10,center:Object(Zt["latLng"])(-15.793599,-47.814987),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",currentZoom:11.5,currentCenter:Object(Zt["latLng"])(47.41322,-1.219482),geojson:null}},created:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.list_data(),t.created();case 2:case"end":return e.stop()}}),e)})))()},methods:{created:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/dasprado12/Brasilia-RAs-georreferenciadas/master/Geojsons/All.geojson");case 2:return a=e.sent,e.next=5,a.json();case 5:t.geojson=e.sent;case 6:case"end":return e.stop()}}),e)})))()},list_data:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.get_last_date();case 2:return a=e.sent.data.split("T")[0],e.next=5,ne.get_region_by_date2(a);case 5:n=e.sent.data,t.data=n.map((function(t){return t.latitude&&t.longitude||(t.latitude="1.1",t.longitude="1.1"),t["posicao"]={lat:t.latitude.replace(",","."),lng:t.longitude.replace(",",".")},t}));case 7:case"end":return e.stop()}}),e)})))()},zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},innerClick:function(){alert("Click!")}}},oe=re,ie=(a("2851"),Object(c["a"])(oe,Gt,Ht,!1,null,"3ae320f2",null)),se=ie.exports;l()(ie,{VCard:I["a"],VCardText:S["a"]});var ce={components:{SimpleMap:se},data:function(){return{}}},ue=ce,le=Object(c["a"])(ue,zt,Jt,!1,null,null,null),de=le.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{flat:"",outlined:""}},[a("v-card-title",[a("span",{staticClass:"font-weight-light"},[t._v("Infectados")])]),t._v(" "),a("v-divider"),a("line-chart",{key:t.numId,attrs:{time:t.time,data:t.data}})],1),a("span",{staticClass:"font-weight-light"},[t._v("Histórico")])],1)},fe=[],me=(a("0d03"),a("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-apex-charts",{attrs:{type:t.type,options:t.options,series:t.series}})],1)}),ge=[],ve={components:{VueApexCharts:wt.a},props:["time","data"],data:function(){return{type:"line",options:{stroke:{curve:"smooth"},chart:{id:"vuechart-example"},xaxis:{categories:this.time}},series:this.data,numId:0}}},he=ve,_e=Object(c["a"])(he,me,ge,!1,null,null,null),be=_e.exports,xe=new ht,we={props:["type","regions"],components:{lineChart:be},data:function(){return{time:[],data:null,items:[],numId:0}},mounted:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.get_many_data();case 1:case"end":return e.stop()}}),e)})))()},watch:{regions:function(t){var e=t.toString();this.get_many_data(e)}},methods:{get_many_data:function(t){var e=this;return Object(it["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,xe.get_all_regions();case 2:return e.items=a.sent.data,a.next=5,xe.get_many_data(e.type,t);case 5:return e.data=a.sent.data,a.next=8,xe.get_all_dates();case 8:e.time=a.sent.data.map((function(t){return t.split("T")[0]})),e.numId++;case 10:case"end":return a.stop()}}),a)})))()}}},je=we,Ce=Object(c["a"])(je,pe,fe,!1,null,null,null),ye=Ce.exports;l()(Ce,{VCard:I["a"],VCardTitle:S["b"],VDivider:j["a"]});var Oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{flat:"",outlined:""}},[a("v-card-title",[a("span",{staticClass:"font-weight-light"},[t._v("Óbitos")])]),t._v(" "),a("v-divider"),a("line-chart",{key:t.numId,attrs:{time:t.time,data:t.data}})],1),a("span",{staticClass:"font-weight-light"},[t._v("Histórico")])],1)},ke=[],Ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vue-apex-charts",{attrs:{type:t.type,options:t.options,series:t.series}})],1)},Ee=[],Te={components:{VueApexCharts:wt.a},props:["time","data"],data:function(){return{type:"line",options:{stroke:{curve:"smooth"},chart:{id:"vuechart-example"},xaxis:{categories:this.time}},series:this.data,numId:0}}},Re=Te,Pe=Object(c["a"])(Re,Ve,Ee,!1,null,null,null),Ie=Pe.exports,Se=new ht,$e={props:["type","regions"],components:{lineChart:Ie},data:function(){return{time:[],data:null,items:[],numId:0}},mounted:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.get_many_data();case 1:case"end":return e.stop()}}),e)})))()},watch:{regions:function(t){var e=t.toString();this.get_many_data(e)}},methods:{get_many_data:function(t){var e=this;return Object(it["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Se.get_all_regions();case 2:return e.items=a.sent.data,a.next=5,Se.get_many_data("obitos",t);case 5:return e.data=a.sent.data,a.next=8,Se.get_all_dates();case 8:e.time=a.sent.data.map((function(t){return t.split("T")[0]})),e.numId++;case 10:case"end":return a.stop()}}),a)})))()}}},Ue=$e,Fe=Object(c["a"])(Ue,Oe,ke,!1,null,null,null),Le=Fe.exports;l()(Fe,{VCard:I["a"],VCardTitle:S["b"],VDivider:j["a"]});var De=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{flat:"",outlined:""}},[a("v-card-title",[a("span",{staticClass:"font-weight-light"},[t._v("Regiões com mais casos")])]),a("v-divider"),a("tree-map-inf",{key:t.key,attrs:{obj:t.data_inf}})],1)],1)},Me=[],qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control_wrapper"},[a("ejs-treemap",{staticClass:"treemap",attrs:{height:"100%",width:"100%",dataSource:t.dataSource,weightValuePath:t.weightValuePath,leafItemSettings:t.leafItemSettings}})],1)},Be=[],Ae=a("ce94");n["a"].use(Ae["a"]);var Ne={props:["obj"],data:function(){return{}},computed:{dataSource:function(){return this.obj.data},weightValuePath:function(){return"Count"},leafItemSettings:function(){return{labelPath:"City",labelFormat:"${City}<br>${Count} casos",gap:5,fill:"green"}}}},ze=Ne,Je=Object(c["a"])(ze,qe,Be,!1,null,null,null),Ge=Je.exports,He=new ht,Ze={props:["title","time","regions"],components:{TreeMapInf:Ge},data:function(){return{data:null,data_inf:{color:this.color,data:[]},filter_data:[],last_date:null,key:0}},created:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.get_data(t.regions);case 1:case"end":return e.stop()}}),e)})))()},methods:{get_data:function(t){var e=this;return Object(it["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,He.get_last_date();case 2:return n=a.sent.data.split("T")[0],a.next=5,He.get_region_by_date(n);case 5:for(r=a.sent.data,e.data=r,o=[],i=0;i<r.length;i++)for(s=0;s<t.length;s++)r[i].regiao==t[s]&&o.push({City:r[i].regiao,Count:r[i].num});e.data_inf.data=o,e.key++;case 11:case"end":return a.stop()}}),a)})))()}},watch:{regions:function(t){this.get_data(t)}}},Ke=Ze,Qe=Object(c["a"])(Ke,De,Me,!1,null,null,null),We=Qe.exports;l()(Qe,{VCard:I["a"],VCardTitle:S["b"],VDivider:j["a"]});var Xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{flat:"",outlined:""}},[a("v-card-title",[a("span",{staticClass:"font-weight-light"},[t._v("Regiões com mais Óbitos")])]),a("v-divider"),a("tree-map-obt",{key:t.key,attrs:{obj:t.data_inf}})],1)],1)},Ye=[],ta=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control_wrapper"},[a("ejs-treemap",{attrs:{id:"treemap2",height:"100%",width:"100%",dataSource:t.dataSource,weightValuePath:t.weightValuePath,leafItemSettings:t.leafItemSettings}})],1)},ea=[];n["a"].use(Ae["a"]);var aa={props:["obj"],data:function(){return{}},computed:{dataSource:function(){return this.obj.data},weightValuePath:function(){return"Count"},leafItemSettings:function(){return{labelPath:"City",labelFormat:"${City}<br>${Count} casos",gap:5,fill:"red"}}}},na=aa,ra=Object(c["a"])(na,ta,ea,!1,null,null,null),oa=ra.exports,ia=new ht,sa={props:["color","title","time","regions"],components:{TreeMapObt:oa},data:function(){return{data:null,data_inf:{color:this.color,data:[]},filter_data:[],last_date:null,key:0}},created:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.get_data(t.regions);case 1:case"end":return e.stop()}}),e)})))()},methods:{get_data:function(t){var e=this;return Object(it["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,ia.get_last_date();case 2:return n=a.sent.data.split("T")[0],a.next=5,ia.get_region_by_date(n);case 5:for(r=a.sent.data,e.data=r,o=[],i=0;i<r.length;i++)for(s=0;s<t.length;s++)r[i].regiao==t[s]&&o.push({City:r[i].regiao,Count:r[i].obitos});e.data_inf.data=o,e.key++;case 11:case"end":return a.stop()}}),a)})))()}},watch:{regions:function(t){this.get_data(t)}}},ca=sa,ua=Object(c["a"])(ca,Xe,Ye,!1,null,null,null),la=ua.exports;l()(ua,{VCard:I["a"],VCardTitle:S["b"],VDivider:j["a"]});var da=new ht,pa={components:{historicoInfectados:Rt,historicoObitos:Nt,simpleMap:de,mixInfectados:ye,mixObitos:Le,treeInfectados:We,treeObitos:la},data:function(){return{dates:null,region:[],regions:null,lorem:"Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."}},mounted:function(){this.get_info()},methods:{get_info:function(){var t=this;return Object(it["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,da.get_all_dates();case 2:return t.dates=e.sent.data,e.next=5,da.get_all_regions();case 5:t.regions=e.sent.data,t.max=t.dates.length;case 7:case"end":return e.stop()}}),e)})))()},position:function(t){return this.dates[t]}}},fa=pa,ma=(a("4624"),a("0e8f")),ga=a("a722"),va=a("b974"),ha=Object(c["a"])(fa,rt,ot,!1,null,"50a6b5fa",null),_a=ha.exports;l()(ha,{VCard:I["a"],VCardText:S["a"],VCardTitle:S["b"],VCol:X["a"],VContainer:Y["a"],VDivider:j["a"],VFlex:ma["a"],VLayout:ga["a"],VRow:et["a"],VSelect:va["a"]});var ba=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contato"})},xa=[],wa={},ja=wa,Ca=(a("a19a"),Object(c["a"])(ja,ba,xa,!1,null,"3ffff37a",null)),ya=Ca.exports;n["a"].use(m["a"]);var Oa=[{path:"/",component:B,children:[{path:"/",name:"Projeto",component:H},{path:"/equipe",name:"Equipe",component:nt},{path:"/dados",name:"Dados",component:_a},{path:"/contato",name:"Contato",component:ya}]}],ka=new m["a"]({routes:Oa}),Va=ka,Ea=a("f309");n["a"].use(Ea["a"]);var Ta=new Ea["a"]({});a("6cc5");delete L.Icon.Default.prototype._getIconUrl,L.Icon.Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),n["a"].use(Ae["a"]),n["a"].config.productionTip=!1,n["a"].component("l-map",Qt["a"]),n["a"].component("l-tile-layer",Wt["a"]),n["a"].component("l-marker",Xt["a"]),new n["a"]({router:Va,vuetify:Ta,render:function(t){return t(f)}}).$mount("#app")},6557:function(t,e,a){t.exports=a.p+"img/brasao-ufc.7ffb26aa.png"},"778f":function(t,e,a){t.exports=a.p+"img/brasil-map1.1156f66b.png"},"7e17":function(t,e,a){t.exports=a.p+"img/paulo.7dfeaeef.jpg"},"7fc5":function(t,e,a){t.exports=a.p+"img/francisco.2e75056a.jpg"},"7ff0":function(t,e,a){},"892f":function(t,e,a){},"9a67":function(t,e,a){t.exports=a.p+"img/daniel.2853caa5.jpg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},"9c8f":function(t,e,a){t.exports=a.p+"img/natalia.6ebcc6ea.jpg"},a10f:function(t,e,a){"use strict";var n=a("bc33"),r=a.n(n);r.a},a19a:function(t,e,a){"use strict";var n=a("aea0"),r=a.n(n);r.a},acfe:function(t,e,a){t.exports=a.p+"img/as_bas_PB.e62677bb.jpg"},aea0:function(t,e,a){},b5cd:function(t,e,a){t.exports=a.p+"img/graph-network.1b3d963f.png"},bc33:function(t,e,a){},bd9b:function(t,e,a){"use strict";var n=a("32d3"),r=a.n(n);r.a},c1e3:function(t,e,a){t.exports=a.p+"img/lucas_coelho.7755c393.jpg"},c3e7:function(t,e,a){t.exports=a.p+"img/profile.e75b0883.png"},c75a:function(t,e,a){t.exports=a.p+"img/brasil-map.b394e84f.png"},ce03:function(t,e,a){"use strict";var n=a("fcc5"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},ee49:function(t,e,a){"use strict";var n=a("4437"),r=a.n(n);r.a},fcc5:function(t,e,a){}});
//# sourceMappingURL=app.afe3f0ef.js.map