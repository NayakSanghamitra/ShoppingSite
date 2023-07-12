<template>
  <main>
    <h1 class="text-center mb-4">Cart</h1>
    <div v-if="cartItems.length === 0" class="text-center">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="card mb-3 pt-3">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center">
            <img :src="item.image" :alt="item.title" class="img-fluid cart-image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <div class="card-text">
                <div class="product-details__price mb-3">
                  Price: <span class="price">{{ item.price }}</span>
                </div>
                <button @click="removeFromCart(item.id)" class="btn btn-danger">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="total-price text-end">Total Price: {{ calculateTotalPrice }}</div>
    </div>
    <p v-if="productAdded" class="text-center text-success mt-4">Product added to cart.</p>
  </main>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref, watch } from 'vue';

export default {
  name: 'CartView',
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.getters.cartItems);
    const productAdded = ref(false);

    const removeFromCart = (productId) => {
      store.dispatch('removeFromCart', productId);
    };

    const calculateTotalPrice = computed(() => {
      return cartItems.value.reduce((total, item) => total + item.price, 0);
    });

    watch(cartItems, () => {
      if (cartItems.value.length > 0) {
        productAdded.value = true;
        setTimeout(() => {
          productAdded.value = false;
        }, 3000);
      }
    });

    return {
      cartItems,
      productAdded,
      removeFromCart,
      calculateTotalPrice,
    };
  },
};
</script>

<style scoped>
.cart-image {
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
}

.total-price {
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>