<template>
    <div class="dados">
        <v-app v-show="!show" id="inspire">
            <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                    <v-toolbar flat>
                        <v-toolbar-title>Formulário de Login</v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-divider/>
                    <v-card-text>
                        <v-form>
                        <v-text-field
                            label="Login"
                            v-model="login"
                            name="login"
                            prepend-icon="mdi-email"
                            type="text"
                        />

                        <v-text-field
                            id="password"
                            label="Password"
                            v-model="password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                        />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn @click="loginForm()" color="green">Login</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </v-content>
            <v-snackbar v-model="snackbar">
                Email ou senha incorretos
                <v-btn color="red" text @click="snackbar = false">
                    Close
                </v-btn>
            </v-snackbar>
        </v-app>
        <router-view 
            v-show="show"
            :key="keyId"
        ></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            login: '',
            password: '',
            snackbar: false,
            isDisplay: true,
            show: false,
            keyId: 0
        }
    },
    methods: {
        loginForm(){
            if(this.login == 'admin' && this.password == 'admin'){
                this.show = true
                this.keyId++
            }else{
                this.snackbar = true;
            }
        }
    }
}
</script>

<style scoped>
.dados{
    /* background-color: rgb(133, 133, 212); */
    height: 10em;
    height: 100%;
    position: relative;
}
.infos{
    font-size: 23px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
</style>