import { createStore, createLogger  } from 'vuex'


const store = createStore({
  plugins: [createLogger()],
  state: {
    users: [],
    products: [],
    cartItems: []
  },
  mutations: {
    setUsers(state, users){
      state.users = users;
    },
    setProducts(state, products){
      state.products = products;
      // not sure how to proceed here
    },
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
  },    
  actions: {
    async setUsers({commit}){
      const users = window.localStorage.getItem("users");
      if(users){
        commit("setUsers", JSON.parse(users));
      }else{
        try {
          await fetch("https://fakestoreapi.com/products")
              .then(data => data.json())
              .then(data => {
                commit("setUsers", data.results);
                window.localStorage.setItem("users", JSON.stringify(data.results));
              });
        } catch (error) {
          console.log(error);
        }
      }
    },
    
    async setProducts({commit}){
      const products = window.localStorage.getItem("products");
      if(products){
        commit("setProducts", JSON.parse(products));
      }else{
        try {
          await fetch("https://fakestoreapi.com/products")
              .then(data => data.json())
              .then(data => {
                commit("setProducts", data);
                window.localStorage.setItem("products", JSON.stringify(data));
              });
        } catch (error) {
          console.log(error);
        }
      }
    },
    addToCart({ commit }, product) {
      const productCopy = { ...product }; // Make a copy of the product
      commit('addToCart', productCopy);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
  },

  getters: {
    cartItems: state => state.cartItems,
    cartTotal: state => state.cartItems.length,
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store;
(async () => await store.dispatch("setUsers"))();
(async () => await store.dispatch("setProducts"))();


