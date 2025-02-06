<template>
  <div class="product-card mb-3 p-3 d-flex align-items-center">
    <img :src="item.thumbnail" class="img-fluid rounded me-3" :alt="item.title"
      style="width: 100px; height: 100px; object-fit: cover;" />
    <div class="flex-grow-1">
      <h5 class="text mb-1">{{ item.title }}</h5>
      <p class="fw-bold mb-1 text-price">Price: ${{ item.price.toFixed(2) }}</p>
      <div class="content">
        <select class="form-select form-select-sm me-2" v-model="item.quantity" @change="onQuantityChange">
          <option v-for="n in 100" :key="n" :value="n">{{ n }}</option>
        </select>
        <div class="btn-wrap">
          <NuxtLink :to="`/products/${item.id}`" class="btn btn-secondary btn-sm me-2">
            View Product
          </NuxtLink>
          <button class="btn btn-danger btn-sm" @click="onRemove">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
const emit = defineEmits(["updateQuantity", "remove"]);

const onQuantityChange = () => {
  emit("updateQuantity", parseInt(props.item.quantity));
};

const onRemove = () => {
  emit("remove");
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
  align-items: center;
  width: 100%;
}

.btn-wrap {
  margin-left: auto;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-card .text {
    font-size: 1.1rem;
  }

  .product-card {
    padding: 10px;
  }

  .form-select {
    width: 100%;
  }

  .btn-wrap {
    margin-top: 10px;
    margin-left: 0;
  }
}
</style>