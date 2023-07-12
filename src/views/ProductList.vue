<template>
  <main>
    <div class="filters">
      <input type="text" v-model="searchQuery" placeholder="Search by title" class="filter-input" />
      <select v-model="categoryFilter" class="filter-select" >
        <option value="">All categories</option>
        <option v-for="category in uniqueCategories" :value="category" :key="category">{{ category }}</option>
      </select>
      <input type="number" v-model="priceFilter" placeholder="Filter by price" class="filter-input" />
      <input type="number" v-model="ratingFilter" placeholder="Filter by rating" class="filter-input" />
    </div>
    
    <article class="products mt-6">
    <template v-if="filteredProducts.length > 0">
      <section class="card-body products__item"  v-for="product in filteredProducts" :key="product.id" >
        <!-- Product item content -->
        <RouterLink :to="`/products/${product.id}`">
          <!-- <div class="fade">
            {{product.title}}
          </div> -->
          <img class="products__thumbnail" :src="product.image" :alt="product.title" />
          <span class="text_title">{{ product.title }}</span>
        </RouterLink>
      </section> 
    </template>
    <span v-else class="text-center">No Product Available</span>
    </article>
  </main>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export default {
  name: 'AppUserList',
  components: {},
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);

    const searchQuery = ref('');
    const categoryFilter = ref('');
    const priceFilter = ref('');
    const ratingFilter = ref('');

    const filteredProducts = computed(() => {
      return products.value.filter(product => {
        // Apply search filter
        if (searchQuery.value && !product.title.includes(searchQuery.value)) {
          return false;
        }
        // Apply category filter
        if (categoryFilter.value && product.category !== categoryFilter.value) {
          return false;
        }
        // Apply price filter
        if (priceFilter.value && product.price !== Number(priceFilter.value)) {
          return false;
        }
        // Apply rating filter
        if (ratingFilter.value && product.rating.rate !== Number(ratingFilter.value)) {
          return false;
        }
        return true;
      });
    });

    const uniqueCategories = computed(() => {
      const categories = new Set();
      products.value.forEach(product => categories.add(product.category));
      return Array.from(categories);
    });

    return {
      products,
      searchQuery,
      categoryFilter,
      priceFilter,
      ratingFilter,
      filteredProducts,
      uniqueCategories,
    };
  },
};
</script>

<style scoped>
.products {

  display: grid;
  grid-gap: 8rem;
  grid:
    repeat(auto-fill, minmax(10rem, 1fr))
    / repeat(auto-fill, minmax(10rem, 1fr));
  grid-auto-rows: minmax(10rem, 1fr);
}

.products__thumbnail {
  width: 100%;
  display: block;
  height: auto;
}

.products__item {
  position: relative;
  cursor: pointer;
}

.fade {
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.products__item:hover .fade {
  opacity: 1;
  visibility: visible;
}
.filters {
  display: flex;
  padding-top: 7.5rem;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-radius:10px;
}

.no-products {
  margin-top: 1rem;
  text-align: center;
}

.filter-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.filter-select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;
}

</style>