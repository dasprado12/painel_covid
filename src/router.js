import Vue from "vue";
import VueRouter from "vue-router";

import Projeto from "./views/Projeto.vue";
import Equipe from "./views/Equipe.vue";

import beforeDados from "./views/beforeDados.vue"
import Dados from "./views/Dados.vue"

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
      component: beforeDados,
      children: [
        {
          path: "/dados",
          name: "Dados",
          component: Dados
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