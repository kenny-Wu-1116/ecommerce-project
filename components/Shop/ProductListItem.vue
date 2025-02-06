<template>
  <NuxtLink :to="'/products/' + product.id"
    class="product-list-item product-list-card flex-row align-items-center shadow-sm">
    <img :src="product.thumbnail" class="list-thumbnail" :alt="product.title" />
    <div class="list-body d-flex flex-column justify-content-center p-3">
      <h5 class="mb-1">{{ product.title }}</h5>
      <p class="mb-1 text-primary fw-bold">${{ product.price }}</p>
      <RatingStars :rating="product.rating" />
    </div>
    <div class="view-more-overlay">Learn more</div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.product-list-item {
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.3s;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  color: #000;
}

.product-list-card {
  border-radius: 10px;
}

.product-list-item:hover {
  background-color: gray;
  transform: scale(1.01);
}

.product-list-item:hover .view-more-overlay {
  opacity: 1;
  transform: translateY(0);
}

.list-thumbnail {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-right: 1px solid #ddd;
  transition: transform 0.3s, filter 0.3s;
}

.list-body {
  flex: 1;
  padding-left: 15px;
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

.list-thumbnail {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-right: 1px solid #ddd;
}

.list-body {
  flex: 1;
  padding-left: 15px;
}

.list-body h5 {
  margin-bottom: 5px;
}

.list-body p {
  margin-bottom: 5px;
  color: #007bff !important;
}

@media (max-width: 768px) {

  .list-thumbnail {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 576px) {
  .list-thumbnail {
    width: 100px;
    height: 100px;
  }
}
</style>