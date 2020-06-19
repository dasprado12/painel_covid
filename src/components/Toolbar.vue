<template>
    <div class="background_color">
        <v-toolbar  flat class="main_toolbar">
                <v-toolbar-title class="font-weight-light"><b>| Logo do Projeto |</b></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn :to="item.router" v-for="item in pages" :key="item.title" text>
                    <span class="font-weight-thin"><b>{{ item.title }}</b></span>
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
            ]
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