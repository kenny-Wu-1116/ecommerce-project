<template>
  <div class="empty-cart-message">
    <h3 class="text-center fw-bold">
      Your cart is empty.
    </h3>
    <div class="text-center">
      <NuxtLink to="/products" class="btn btn-dark mt-3">
        <span>Go Shopping</span> <i class="fas fa-arrow-right ms-2"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.empty-cart-message {
  padding: 50px;
  background: #f9f9f9;
  border: 1px dashed #ccc;
  border-radius: 8px;
}

.btn {
  font-size: 1rem;
}
</style>