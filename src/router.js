import Vue from "vue";
import VueRouter from "vue-router";

import Projeto from "./views/Projeto.vue";
import Equipe from "./views/Equipe.vue";

import beforeDados from "./views/beforeDados.vue"
import Dados from "./views/Dados.vue"
import Previsao from "./views/Previsao.vue"

import Contato from "./views/Contato.vue";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name: "Projeto",
      component: Projeto
    },
    {
      path: "/equipe",
      name: "Equipe",
      component: Equipe
    },
    {
      path: "/dados",
      name: "Dados",
      component: Dados
    },
    {
      path: "/previsao",
      component: beforeDados,
      children:[
        {
          path: "/previsao",
          name: "Previsao",
          component: Previsao
        }
      ]
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }];

const router = new VueRouter({
  routes
});

export default router;
