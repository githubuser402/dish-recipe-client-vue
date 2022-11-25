import Vue from 'vue';
import VueRouter from 'vue-router';

// components

import ProductList from '@/components/ProductList.vue';
import ProductDetailed from '@/components/ProductDetailed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/product-list/',
    component: ProductList,
  },
  {
    path: '/product-list/:product_id/',
    component: ProductDetailed,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
