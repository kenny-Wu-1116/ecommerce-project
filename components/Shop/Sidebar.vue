<template>
  <div class="search-container mb-3">
    <input :value="searchQuery" @input="$emit('update:search-query', $event.target.value)"
      class="form-control search-box" placeholder="Search for products..." />
  </div>
  <div class="list-group">
    <button @click="$emit('update:selected-category', '')"
      class="list-group-item list-group-item-action d-flex align-items-center" :class="{ active: !selectedCategory }">
      <i class="fas fa-list-ul me-2"></i>
      {{ getCategoryDisplayName("all") }}
    </button>
    <button v-for="category in categories" :key="category" @click="$emit('update:selected-category', category)"
      class="list-group-item list-group-item-action d-flex align-items-center"
      :class="{ active: selectedCategory === category }">
      <i class="fas" :class="categoryIcon(category)"></i>
      {{ getCategoryDisplayName(category) }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  selectedCategory: {
    type: String,
    default: "",
  },
  searchQuery: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:search-query", "update:selected-category"]);

const categoryIcon = (category) => {
  const icons = {
    smartphones: "fa-mobile-alt",
    laptops: "fa-laptop",
    fragrances: "fa-wine-bottle",
    skincare: "fa-spa",
    groceries: "fa-shopping-basket",
    "home-decoration": "fa-home",
    furniture: "fa-couch",
    beauty: "fa-magic",
    "kitchen-accessories": "fa-utensils",
    "mens-shirts": "fa-tshirt",
    "mens-shoes": "fa-shoe-prints",
    "mens-watches": "bi bi-watch",
    "mobile-accessories": "fa-headphones-alt",
  };
  return icons[category] || "fa-box";
};

const getCategoryDisplayName = (category) => {
  const categoryNames = {
    all: "All",
    laptops: "Laptops",
    fragrances: "Fragrances",
    skincare: "Skincare",
    groceries: "Groceries",
    "home-decoration": "Home Decoration",
    furniture: "Furniture",
    beauty: "Beauty Products",
    "kitchen-accessories": "Kitchen Accessories",
    "mens-shirts": "Men's Shirts",
    "mens-shoes": "Men's Shoes",
    "mens-watches": "Men's Watches",
    "mobile-accessories": "Mobile Accessories",
  };
  return categoryNames[category] || "Unknown Category";
};

</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.search-box {
  padding: 10px 15px;
  border-radius: 50px;
  border: 1px solid black;
  transition: all 0.3s ease;
  font-size: 0.8rem;
}

.search-box:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(134, 140, 146, 0.5);
}

.search-container {
  top: 0;
  z-index: 1000;
  background-color: white;
}

.list-group-item,
.list-group-item-action {
  font-size: 1rem;
}

.list-group-item-action {
  border-radius: 0;
  border: 1px solid #ddd;
}

.list-group-item-action:hover,
.list-group-item-action.active {
  background-color: #f8f9fa;
}

.list-group-item-action.active {
  background-color: black;
  color: white;
}

.list-group-item-action .fas {
  margin-right: 10px;
  font-size: 1.1rem;
}

@media (max-width: 1024px) {

  .list-group-item,
  .list-group-item-action {
    font-size: 0.7rem;
  }
}

@media (max-width: 768px) {
  .search-container {
    margin-top: 0;
  }

  .list-group-item,
  .list-group-item-action {
    font-size: 0.8rem;
  }
}
</style>