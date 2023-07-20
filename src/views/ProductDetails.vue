<template>
  <section class="product-details">
    <div class="product-details__header">
      <h2 class="product-details__title">{{ product.title }}</h2>
    </div>
    <div class="product-details__content">
      <div class="product-details__image-container">
        <img
          :src="product.image"
          :alt="product.title"
          class="product-details__image"
        />
      </div>
      <div class="product-details__info">
        <div class="product-details__price">
          Price: <span class="price">{{ product.price }}</span>
        </div>
        <div class="product-details__category">
          Category: <span class="category">{{ product.category }}</span>
        </div>
        <div class="product-details__rating mb-3">
          Rating:
          <span class="rating">
            <span v-for="i in Math.floor(product.rating.rate)" :key="i">
              <i class="bi bi-star-fill"></i>
            </span>
            <span
              v-if="
                product.rating.rate - Math.floor(product.rating.rate) >= 0.5
              "
            >
              <i class="bi bi-star-half"></i>
            </span>
            <span v-for="i in Math.floor(5 - product.rating.rate)" :key="i">
              <i class="bi bi-star"></i>
            </span>
          </span>
        </div>
        <div class="product-details__description">
          <h3>Description:</h3>
          <p>{{ product.description }}</p>
        </div>
        <button
          @click="addToCartAndRedirect(product)"
          class="add-to-cart-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  name: "ProductDetails",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const products = computed(() => store.state.products);
    const productId = Number(route.params.id);
    const product = computed(() =>
      products.value.find((product) => product.id === productId)
    );
    const addToCart = (product) => {
      store.dispatch("addToCart", product);
    };
    const addToCartAndRedirect = (product) => {
      addToCart(product);
      router.push("/cartpage");
    };

    return {
      product,
      addToCart,
      addToCartAndRedirect,
    };
  },
};
</script>

<style scoped>
.product-details {
  padding: 7.5rem;
  text-align: center;
}

.product-details__header {
  margin-bottom: 2rem;
}

.product-details__title {
  font-size: 2rem;
}

.product-details__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.product-details__image-container {
  width: 300px;
  margin-right: 2rem;
}

.product-details__image {
  width: 100%;
  border-radius: 4px;
}

.product-details__info {
  width: 100%;
  max-width: 400px;
  text-align: left;
}

.product-details__price,
.product-details__category,
.product-details__rating {
  margin-bottom: 1rem;
}

.product-details__description {
  margin-top: 2rem;
}

.product-details__description h3 {
  margin-bottom: 0.5rem;
}

.add-to-cart-button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #45a049;
}
.product-details__rating {
  font-weight: bold;
}
.product-details__rating i {
  color: gold;
  font-size: 1.2rem;
  margin-right: 2px;
}
</style>
