<template>
    <div class="summary-card no-border-radius">
      <div class="card-body text-center">
        <div class="d-flex justify-content-between mb-3">
          <span>Subtotal:</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <span>Shipping:</span>
          <span>$10.00</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <span>Items Count:</span>
          <span>{{ totalItems }}</span>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <span>Unique Products:</span>
          <span>{{ uniqueProductsCount }}</span>
        </div>
        <hr class="my-3" />
        <div class="d-flex justify-content-between">
          <span class="fw-bold">Total:</span>
          <span class="fw-bold">${{ (subtotal + 10).toFixed(2) }}</span>
        </div>
        <button class="btn btn-dark btn-md w-75 mt-3" disabled>
          Checkout
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    subtotal: Number,
    totalItems: Number,
    uniqueProductsCount: Number,
  });
  </script>

<style scoped>

.summary-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fefefe;
  padding: 20px;
}

.card-body span {
  font-size: 1rem;
}

.btn {
  font-size: 0.9rem;
}

</style>