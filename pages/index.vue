<template>
  <div class="container">
    <SectionTitle title="Popular Products" icon="bi bi-fire" />
    <HomePopularProducts :products="sections[0]?.products" />

    <SectionTitle title="Luxury Finds" icon="bi bi-gem" />
    <div v-if="featuredProducts.length > 0">
      <HomeLuxuryfinds :featuredProducts="featuredProducts" />
    </div>

    <SectionTitle title="Limited Time Sale" icon="bi bi-hourglass-split" />
    <HomeLimitedTimeAds :ads="ads" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sections = ref([{ title: '熱門商品', products: [] }])
const featuredProducts = ref([])
const ads = ref([])

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/products?limit=112')
  const data = await response.json()
  sections.value[0].products = data.products.sort((a, b) => b.rating - a.rating).slice(0, 4)

  const categories = ['mens-watches']
  const featuredData = await Promise.all(
    categories.map(async (category) => {
      const res = await fetch(`https://dummyjson.com/products/category/${category}`)
      const categoryData = await res.json()
      return categoryData.products
    })
  )
  featuredProducts.value = featuredData.flat().slice(0, 5)

  ads.value = [
    { id: 1, image: '/img/l1.jpg', title: 'Laptops', category: 'laptops' },
    { id: 2, image: '/img/m2.jpg', title: 'Mobile Accessories', category: 'mobile-accessories' },
    { id: 3, image: '/img/s3.jpg', title: "Men's Shoes", category: 'mens-shoes' },
    { id: 4, image: '/img/t4.jpg', title: "Men's Shirts", category: 'mens-shirts' }
  ]
})
</script>

<style scoped>
.container {
  padding: 0px 15px;
}
</style>