import Vue from 'vue';
import VueRouter from 'vue-router';

// components

import DishRecipeList from '@/components/DishRecipeList.vue';
import DishRecipeDetailed from '@/components/DishRecipeDetailed.vue';
import LoginUser from '@/components/LoginUser.vue';
import RegisterUser from '@/components/RegisterUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/recipes/',
    component: DishRecipeList,
  },
  {
    path: '/recipes/:dish_id/',
    component: DishRecipeDetailed,
  },
  {
    path: '/login/',
    component: LoginUser,
  },
  {
    path: '/register/',
    component: RegisterUser,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
