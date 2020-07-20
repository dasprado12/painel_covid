<template>
    <div class="contato">
        <div class="titulo_principal"><br>
            <h2 class=""> Fale Conosco: </h2>
        </div>
        <div class="content">
            <v-row>
                <v-col cols="6">
                    <v-card>
                        <v-card-title><v-span class="font-weight-light">Envie-nos sua dúvida</v-span></v-card-title>
                        <v-card-text>
                            <v-text-field label="Nome"/>
                            <v-text-field label="E-mail"/>
                            <v-text-field label="Sobre o que gostaria de falar"/>
                            <v-textarea label="Descreva detalhadamente sua dúvida"></v-textarea>
                        </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn outlined>Enviar</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.contato{
    margin-left: 10%;
    margin-right: 10%;
}
.titulo_principal{
    margin-right: 10%;
    margin-left: 10%;
    text-align: center;
}
.content{
    display: flex;
}
</style>