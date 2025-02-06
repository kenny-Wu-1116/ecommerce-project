<template>
  <div class="container pt-5">
    <SectionTitle title="Products" icon="bi bi-box-seam" />

    <div class="row mb-4">
      <div class="col-12 d-md-none mb-3">
        <button class="btn btn-dark w-100" @click.stop="toggleSidebar">
          <i class="bi bi-filter"></i> 篩選商品
        </button>
      </div>

      <div v-if="isSidebarOpen" class="overlay" @click="closeSidebar"></div>

      <div class="mobile-sidebar" :class="{ 'show': isSidebarOpen }" @click.stop>
        <button class="btn-close" @click="closeSidebar"></button>
        <ShopSidebar :categories="uniqueCategories" :selected-category="selectedCategory" :search-query="searchQuery"
          @update:selected-category="updateCategory" @update:search-query="updateSearch" />
      </div>

      <div class="col-md-3 d-none d-md-block sidebar">
        <ShopSidebar :categories="uniqueCategories" :selected-category="selectedCategory" :search-query="searchQuery"
          @update:selected-category="updateCategory" @update:search-query="updateSearch" />
      </div>

      <div class="col-12 col-md-9">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <ShopBreadcrumb />
          <div class="ToggleView">
            <ShopToggleView :isCardView="isCardView" @update:isCardView="isCardView = $event" />
          </div>
        </div>
        <div class="row">
          <template v-if="isCardView">
            <div v-for="product in filteredProducts" :key="product.id" class="col-6 col-md-6 col-lg-4 mb-4">
              <ShopProductCard :product="product" />
            </div>
          </template>
          <template v-else>
            <div v-for="product in filteredProducts" :key="product.id" class="col-12 mb-4">
              <ShopProductListItem :product="product" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const searchQuery = ref("");
const selectedCategory = ref(route.query.category || "");
const isCardView = ref(true);
const isSidebarOpen = ref(false);

const { data: products } = await useFetch("https://dummyjson.com/products?limit=112");

const uniqueCategories = computed(() => {
  const categories = products.value.products.map((product) => product.category);
  return [...new Set(categories)];
});

const filteredProducts = computed(() => {
  let filtered = products.value.products;
  if (searchQuery.value) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  if (selectedCategory.value) {
    filtered = filtered.filter((product) => product.category === selectedCategory.value);
  }
  return filtered;
});

watch(
  () => route.query.category,
  (newCategory) => {
    selectedCategory.value = newCategory || "";
  }
);

const updateCategory = (category) => {
  selectedCategory.value = category;
};

const updateSearch = (query) => {
  searchQuery.value = query;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<style scoped>
/* 遮罩背景 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1049;
}

/* 側邊欄（手機版） */
.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background: #fff;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  z-index: 1050;
  overflow-y: auto;
  transform: translateX(-100%);
  /* 預設隱藏 */
  transition: transform 0.3s ease-in-out;
}

/* 顯示時滑入 */
.mobile-sidebar.show {
  transform: translateX(0);
}

/* 關閉按鈕 */
.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  cursor: pointer;
}

/* 桌機版側邊欄 */
.sidebar {
  position: sticky;
  top: 90px;
  height: 600px;
}

@media (max-width: 992px) {
  .sidebar {
    position: sticky;
    top: 90px;
    height: 70vh;
    overflow-y: auto;
  }
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>