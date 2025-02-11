<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="breadcrumb-item">
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{ productTitle }}</li>
    </ol>
  </nav>
</template>


<script setup>
defineProps({
  productTitle: String,
});
</script>

<style scoped>
.breadcrumb {
  background-color: transparent;
  font-size: 1.2rem;
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

@media (max-width: 768px) {
  .breadcrumb {
    font-size: 0.9rem;
  }
}
</style>