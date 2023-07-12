import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import CartPage from "../views/CartPage.vue"
import AboutPage from "../views/AboutPage.vue"
import SignUp from "../views/SignUp.vue"
import ProductDetails from "../views/ProductDetails.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/cartpage',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/signup', 
    name: 'SignUp',
    component: SignUp
  },
  // {
  //   path: '/users/:username',
  //   name: "Users",
  //   component: AppUser,
  //   children: [
  //       {
  //         path: "/user/:username/info",
  //         name: "Info",
  //         component: UserInfo
  //       }
  //   ]
  // },
  {
    path: '/products/:id',
    name: "Products",
    component: ProductDetails,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
