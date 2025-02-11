<template>
  <div class="container">
    <SectionTitle title="Popular Products" icon="bi bi-fire" />
    <HomePopularProducts :products="productStore.allProducts.slice(0, 4)" />

    <SectionTitle title="Luxury Finds" icon="bi bi-gem" />
    <HomeLuxuryfinds :featuredProducts="productStore.getProductsByCategory('mens-watches').slice(0, 5)" />

    <SectionTitle title="Limited Time Sale" icon="bi bi-hourglass-split" />
    <HomeLimitedTimeAds :ads="productStore.ads" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped>
.container {
  padding: 0px 15px;
}
</style>