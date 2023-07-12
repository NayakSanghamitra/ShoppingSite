<template>
  <main>
    <div class="about-section">
      <div class="about-content">
        <h1 class="about-heading">About SN</h1>
        <p class="about-description">
          SN is your ultimate destination for online shopping. We offer a wide selection of products from leading brands, ensuring quality and reliability for our customers.
        </p>
        <p class="about-description">
          At SN, we believe that shopping should be an enjoyable experience. With our user-friendly interface, secure transactions, and efficient delivery, we make it easy for you to find and purchase your desired items.
        </p>
        <p class="about-description">
          Our dedicated team works tirelessly to bring you the latest trends and best deals across various categories. From fashion and electronics to home essentials and beyond, we've got everything you need in one place.
        </p>
      </div>
      <div class="about-image">
        <img src="about-image.jpg" alt="About SN">
      </div>
    </div>

    <div class="steps-section">
      <h2 class="steps-heading">How It Works</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-image">
            <img src="step-1.jpg" alt="Step 1">
          </div>
          <div class="step-description">
            <h3 class="step-title">Step 1: Explore</h3>
            <p class="step-content">
              Visit the Home page to explore our vast collection of products. Browse through different categories and discover items that catch your interest.
            </p>
          </div>
        </div>
        <div class="step">
          <div class="step-image">
            <img src="step-2.jpg" alt="Step 2">
          </div>
          <div class="step-description">
            <h3 class="step-title">Step 2: Product Details</h3>
            <p class="step-content">
              Click on the title or image of a product to view its detailed information. Get a closer look, read reviews, and make an informed decision before adding it to your cart.
            </p>
          </div>
        </div>
        <div class="step">
          <div class="step-image">
            <img src="step-3.jpg" alt="Step 3">
          </div>
          <div class="step-description">
            <h3 class="step-title">Step 3: Add to Cart</h3>
            <p class="step-content">
              Once you've found the perfect item, simply click the "Add to Cart" button to include it in your shopping cart. Review your selection and proceed to checkout when you're ready.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7.5rem;
  background-color: #f8f8f8;
}

.about-content {
  flex: 1;
  margin-right: 2rem;
}

.about-heading {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.steps-section {
  padding: 3rem 0;
  background-color: #fff;
}

.steps-heading {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-image img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.step-content {
  font-size: 1.2rem;
  text-align: center;
}
</style>