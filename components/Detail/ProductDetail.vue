<template>
  <div class="product-detail mb-3 shadow-sm p-3 border">
    <div class="row g-0">
      <div class="col-md-6">
        <img :src="product.thumbnail" class="img-fluid product-image" :alt="product.title">
      </div>
      <div class="col-md-6">
        <div class="product-info d-flex flex-column justify-content-between h-100">
          <h1 class="product-title mb-3 display-5">{{ product.title }}</h1>
          <p class="product-description text-muted">{{ product.description }}</p>
          <h2 class="product-price text-primary">${{ product.price }}</h2>
          <RatingStars :rating="product.rating" />
          <div class="mt-4 quantity-box">
            <label for="quantity" class="form-label">數量:</label>
            <select id="quantity" class="form-select" :value="modelValue"
              @change="$emit('update:modelValue', parseInt($event.target.value, 10))">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
          <div class="mt-4 d-flex flex-column flex-md-row align-items-center">
            <button class="btn btn-outline-dark btn-lg w-100" @click="$emit('addToCart', product, modelValue)">
              <i class="bi bi-cart"></i>Add to Cart
            </button>
            <NuxtLink to="/cart" class="btn btn-dark btn-lg w-100 text-center mt-2 mt-md-0">
              <i class="bi bi-arrow-right-circle me-1"></i>Go to Cart
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
  modelValue: Number,
});
</script>


<style scoped>
.product-detail {
  max-width: 1100px;
  margin: auto;
  border-radius: 12px;
}

.product-detail .product-image {
  max-height: 600px;
  object-fit: cover;
  width: 100%;
}

.product-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.product-description {
  font-size: 1.3rem;
}

.product-price {
  font-size: 2.5rem;
  color: #007bff;
}

.quantity-box {
  display: flex;
  gap: 10px;
}

.quantity-box label {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.quantity-box select {
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 1.1rem;
  transition: border-color 0.3s ease;
}

.form-select {
  max-width: 120px;
}

.btn-outline-dark:hover {
  background-color: #000;
  color: #fff;
}

.btn-dark {
  background-color: #000;
  color: #fff;
  transition: background-color 0.3s;
}

.btn-dark:hover {
  background-color: #333;
}

.product-info .d-flex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 1024px) {
  .product-info .product-title {
    font-size: 1.8rem;
  }

  .product-info .product-description {
    font-size: 1.1rem;
  }

  .product-info .product-price {
    font-size: 2rem;
  }

  .btn-outline-dark {
    font-size: 0.9rem;
  }

  .btn-dark {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .product-info .product-price {
    font-size: 1.8rem;
  }

  .product-info .product-title {
    font-size: 1.5rem;
  }
}
</style>