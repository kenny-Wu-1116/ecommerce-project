<template>
  <div class="container mt-5 pt-5" v-if="!productStore.loading && productStore.product">
    <DetailBreadcrumb :productTitle="productStore.product.title" />
    <DetailProductDetail :product="productStore.product" v-model="selectedQuantity" @addToCart="addToCart" />
    <DetailRelatedProducts :products="productStore.relatedProducts" />
    <DetailToastNotification v-if="showToast" :message="toastMessage" @close="() => (showToast = false)" />
  </div>

  <div class="container mt-5 pt-5" v-else>
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const cartStore = useCartStore()
const productStore = useProductStore()
const selectedQuantity = ref(1)
const showToast = ref(false)
const toastMessage = ref('')

const addToCart = (product, quantity) => {
  const parsedQuantity = parseInt(quantity, 10)
  cartStore.addToCart({ ...product, quantity: parsedQuantity })
  toastMessage.value = '已成功加入購物車!'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 1500)
}

onMounted(() => {
  productStore.fetchProduct(route.params.id)
})

watch(route, () => {
  productStore.fetchProduct(route.params.id)
})
</script>

<style scoped>
.toast-notification {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 1050;
  animation: fadeIn 0.3s ease;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.btn-close {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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


.container {
  max-width: 1100px;
}

.breadcrumb {
  background-color: transparent;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  padding-left: 0;
}

.breadcrumb-item+.breadcrumb-item::before {
  content: ">";
}

.breadcrumb-item a {
  text-decoration: none;
  color: #007bff;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: black;
}

.breadcrumb-item.active a {
  pointer-events: none;
}

.product-detail {
  max-width: 1100px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  font-size: 1.1rem;
}

.product-price {
  font-size: 2.5rem;
  color: #007bff;
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

.form-select {
  max-width: 120px;
}

.product-info .d-flex {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.related-products {
  margin-top: 3rem;
}

.related-products h2 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.related-products h2.fade-in {
  opacity: 1;
  transform: translateY(0);
}

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

@media (max-width: 576px) {
  .card-body {
    padding: 5px;
  }

  .related-products .card-img-top {
    height: 150px;

  }
}

@media (max-width: 768px) {
  .product-card .row {
    flex-direction: column;
  }

  .card-body .d-flex {
    flex-direction: column;
    align-items: stretch;
  }

  .card-body .btn-lg {
    width: 100%;
  }

  .form-select {
    max-width: 100%;
  }

  .display-6 {
    font-size: 2rem;
    color: #007bff;
  }

}

@media (max-width: 576px) {
  .breadcrumb {
    font-size: 1rem;
  }

  .card-title {
    font-size: 2rem;
  }

  .card-text {
    font-size: 1rem;
  }

  .display-6 {
    font-size: 1.5rem;
    color: #007bff;
  }
}
</style>
