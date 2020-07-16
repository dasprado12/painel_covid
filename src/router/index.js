import Vue from "vue";
import VueRouter from "vue-router";

import LayoutProjeto from "../views/Projeto.vue";
import Projeto from "../views/Projeto/Projeto.vue";
import Equipe from "../views/Projeto/Equipe.vue";

import beforeDados from "../views/Projeto/beforeDados.vue"
import Dados from "../views/Projeto/Dados.vue"

import Contato from "../views/Projeto/Contato.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LayoutProjeto,
    children: [
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
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
