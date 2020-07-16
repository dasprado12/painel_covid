<template>
    <div :class="backgroundColor">
        <v-toolbar flat :class="backgroundColor">
                <v-toolbar-title class="font-weight-light"><b :class="textColor">| Logo do Projeto |</b></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn :to="item.router" v-for="item in pages" :key="item.title" text>
                    <span class="font-weight-thin"><b :class="textColor">{{ item.title }}</b></span>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-divider/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pages: [
                { title: "Projeto", router: "/", color: "white" },
                { title: "Dados", router: "/dados", color: "green lighten-2" },
                { title: "Equipe", router: "/equipe", color: "green lighten-2" },
                { title: "Contato", router: "/contato", color: "green lighten-2" }
            ],
            backgroundColor: 'green darken-1',
            textColor: 'black--text'
        }
    },
    computed: {
        currentRoute(){
            return this.$route.name;
        }
    },
    mounted(){
        if(this.$route.name == "Dados"){
                this.textColor = 'white--text'
                this.backgroundColor = "grey darken-3"
        }
    },
    watch:{
        currentRoute(value){
            if(value == "Projeto" || value == "Equipe" || value == "Contato"){
                this.backgroundColor = "green darken-1"
                this.textColor = "black--text"
            }else if(value == "Dados"){
                this.textColor = 'white--text'
                this.backgroundColor = "grey darken-3"
            }
        }
    }
}
</script>

<style scoped>
.main_toolbar{
    margin-left: 7%;
    margin-right: 7%;
}
</style>