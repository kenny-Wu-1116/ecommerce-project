<template>
  <div class="container pt-5">
    <SectionTitle title="Cart" icon="bi bi-cart" />
    <div class="row">
      <div class="col-12 col-md-8 mb-4 mb-md-0">
        <div v-if="cartStore.cart.length > 0">
          <CartProductCard v-for="item in cartStore.cart" :key="item.id" :item="item"
            @updateQuantity="(quantity) => updateQuantity(item, quantity)" @remove="() => removeFromCart(item)" />
        </div>
        <div v-else>
          <CartEmptyCartMessage />
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="sticky-top p-2" style="top: 80px;">
          <CartSummaryCard :subtotal="cartStore.totalPrice" :totalItems="cartStore.totalItems"
            :uniqueProductsCount="cartStore.uniqueProductsCount" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';


const cartStore = useCartStore();

const updateQuantity = (item, newQuantity) => {
  if (newQuantity > 0) {
    cartStore.updateQuantity(item.id, newQuantity);
  }
};

const removeFromCart = (item) => {
  cartStore.removeFromCart(item.id);
};
</script>


<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.product-card .form-select {
  width: 100px;
  /* 調整商品數量框的寬度 */
}

.empty-cart-message {
  padding: 50px;
  background: #f9f9f9;
  border: 1px dashed #ccc;
  border-radius: 8px;
}

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

.content {
  display: flex;
  flex-direction: row;
  /* 預設在大螢幕上保持橫向排列 */
  align-items: center;
  width: 100%;
}

.btn-wrap {
  margin-left: auto;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    /* 在手機上將按鈕和選擇框垂直排列 */
    align-items: flex-start;
    /* 按鈕靠左對齊 */
  }

  .product-card {
    padding: 10px;
    /* 確保在小屏幕上有適當的內邊距 */
  }

  .form-select {
    width: 100%;
    /* 在手機上讓選擇框充滿寬度 */
  }

  .btn-wrap {
    margin-top: 10px;
    /* 在手機上為按鈕和選擇框之間增加間距 */
    margin-left: 0;
    /* 移除左邊的自動邊距 */
  }
}
</style>
