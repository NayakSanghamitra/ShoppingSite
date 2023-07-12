<template>
  <header class="header" :class="themeColor">
    <div class="header__logo">
      <img src="@/assets/images.jpg" alt="SN Logo" />
    </div>
    <button class="theme-color-button" @click="toggleThemeColor">
      Toggle Color
    </button>
    <nav class="header__nav">
      <RouterLink class="header__nav__link" to="/">
        Home
      </RouterLink>
      <RouterLink class="header__nav__link" to="/cartpage">
        Cart
      </RouterLink>
      <RouterLink class="header__nav__link" to="/about">
        About
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "AppHeader",
  setup() {
    const themeColor = ref('black'); // Initial theme color is black

    const toggleThemeColor = () => {
      themeColor.value = themeColor.value === 'black' ? 'green' : 'black';
    };

    return {
      themeColor,
      toggleThemeColor,
    };
  },
};
</script>

<style scoped>
.header {
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header.black {
  background-color: black;
  color: white;
}

.header.green {
  background-color: green;
  color: white;
}

.header__logo img {
  height: 30px; /* Adjust the height as needed */
}

.header__nav {
  text-align: right;
  position: relative;
}

.header__nav__link {
  text-decoration: none;
  color: inherit;
  margin-right: 1rem; /* Add margin-right for space between the navigation links */
}

.theme-color-button {
  margin-top: 1rem;
}
</style>