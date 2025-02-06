<template>
  <div ref="popularProductsSection" class="mb-5 section fade-in-bottom">
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-6 col-md-6 col-lg-3 mb-4">
        <NuxtLink :to="'/products/' + product.id" class="card h-100 shadow-sm d-flex flex-column product-card">
          <div class="card-img-container">
            <img :src="product.thumbnail" class="card-img-top" alt="Product Image" />
          </div>
          <hr class="my-0" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text text-primary fw-bold">${{ product.price }}</p>
            <RatingStars :rating="product.rating" />
          </div>
          <div class="view-more-overlay">
            <span class="view-more-text">Learn more</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  products: Array
})

const popularProductsSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  if (popularProductsSection.value) {
    observer.observe(popularProductsSection.value)
  }
})
</script>

<style scoped>
.fade-in-bottom {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.product-card {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.2s, background-color 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  background-color: gray;
  transform: scale(1.03);
}

.product-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.1rem;
}

.product-price {
  font-size: 1rem;
}

.view-more-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(20px);
}

.product-card:hover .view-more-overlay {
  opacity: 1;
  transform: translateY(0);
}

.card-body {
  padding-top: 15px;
  transition: background-color 0.3s;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  color: #007bff !important;
}

hr {
  margin: 0;
  border: none;
  border-top: 1px solid #ababab;
}

@media (max-width: 576px) {
  .card-body {
    padding: 5px;
  }

  .card-body .card-title {
    font-size: 1rem;
  }
}
</style>