<template>
    <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        <!-- Text Logo - Use this if you don't have a graphic logo -->
        <a class="navbar-brand logo-text page-scroll" href="index.html">SIMOP | UnB</a>
        <!-- Image Logo -->
        <!--<a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a> -->
        
        <!-- Mobile Menu Toggle Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <!-- end of mobile menu toggle button -->

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#header">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#features">SOBRE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#preview">DETALHES</a>
                </li>
                <!-- Dropdown Menu -->          
                <li class="nav-item dropdown"> 
                    <a class="nav-link dropdown-toggle page-scroll" href="#details" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">GRÁFICOS</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="terms-conditions.html"><span class="item-text">ATUAL</span></a>
                        <div class="dropdown-items-divide-hr"></div>
                        <a class="dropdown-item" href="privacy-policy.html"><span class="item-text">PREVISÃO</span></a>
                    </div>
                </li> 
                <!-- end of dropdown menu -->

                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#contact">CONTATO</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            pages: [
                { title: "Projeto", router: "/", color: "white" },
                { title: "Dados", router: "/dados", color: "green lighten-2" },
                { title: "Previsão", router: "/previsao", color: "green lighten-2" },
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