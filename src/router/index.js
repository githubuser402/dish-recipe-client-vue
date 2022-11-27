import Vue from 'vue';
import VueRouter from 'vue-router';

// components

// import ProductList from '@/components/ProductList.vue';
// import ProductDetailed from '@/components/ProductDetailed.vue';
import DishRecipeList from '@/components/DishRecipeList.vue';
import DishRecipeDetailed from '@/components/DishRecipeDetailed.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/products/',
  //   component: ProductList,
  // },
  // {
  //   path: '/products/:product_id/',
  //   component: ProductDetailed,
  // },
  {
    path: '/recipes/',
    component: DishRecipeList,
  },
  {
    path: '/recipes/:dish_id/',
    component: DishRecipeDetailed,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
