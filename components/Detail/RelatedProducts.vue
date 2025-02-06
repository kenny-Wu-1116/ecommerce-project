<template>
  <div class="related-products mt-5">
    <SectionTitle title="Related Products" icon="bi bi-arrow-right-circle" />
    <div class="row gx-4 gy-4 related-product">
      <div v-for="relatedProduct in products" :key="relatedProduct.id" class="col-6 col-sm-6 col-md-4 col-lg-3">
        <NuxtLink :to="`/products/${relatedProduct.id}`" class="card h-100 shadow-sm d-flex flex-column">
          <img :src="relatedProduct.thumbnail" class="card-img-top" :alt="relatedProduct.title" />
          <hr class="my-0" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ relatedProduct.title }}</h5>
            <p class="card-text text-primary fw-bold">${{ relatedProduct.price }}</p>
            <RatingStars :rating="relatedProduct.rating" />
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
import { onMounted } from 'vue';

defineProps({
  products: Array,
});

const observeRelatedProducts = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.related-product').forEach((product) => {
    observer.observe(product);
  });

};

onMounted(() => {
  observeRelatedProducts();
});
</script>

<style scoped>
.related-products .card {
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

.related-products .card:hover {
  background-color: gray;
  transform: scale(1.03);
}

.related-products .card-img-top {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.related-products .card-body {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.related-products .card-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.related-products .card-text {
  font-size: 1rem;
  color: #007bff !important;
}

.related-products hr {
  margin: 0;
  border: none;
  border-top: 1px solid #ddd;
}

.related-product {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.related-product.fade-in {
  opacity: 1;
  transform: translateY(0);
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

.related-products .card:hover .view-more-overlay {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .related-products .card-body {
    padding: 5px;
  }
}
</style>