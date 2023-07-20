import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "productList" */ '../views/ProductList.vue'),
  },
  {
    path: '/cartpage',
    name: 'CartPage',
    component: () => import(/* webpackChunkName: "cartPage" */ '../views/CartPage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "aboutPage" */ '../views/AboutPage.vue'),
  },
  {
    path: '/products/:id',
    name: 'Products',
    component: () => import(/* webpackChunkName: "productDetails" */ '../views/ProductDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;