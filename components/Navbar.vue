<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
    <div class="container">
      <NuxtLink class="navbar-brand fw-bold" to="/">
        E-commerce</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <NuxtLink class="nav-link" :class="{ 'active-link': isActive('/') }" to="/">Home <i class="bi bi-house"></i>
            </NuxtLink>
          </li>
          <li class="nav-item mx-3">
            <NuxtLink class="nav-link" :class="{ 'active-link': isActive('/products') }" to="/products">Products <i
                class="bi bi-box-seam"></i>
            </NuxtLink>
          </li>
          <li class="nav-item mx-3 position-relative">
            <NuxtLink class="nav-link" :class="{ 'active-link': isActive('/cart') }" to="/cart">cart <i
                class="bi bi-cart"></i>
              <span v-if="uniqueProductsCount > 0"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ uniqueProductsCount }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <HeroSection v-if="route.path === '/'" />
</template>

<script setup>
import { useCartStore } from '~/stores/cart';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const cartStore = useCartStore();

const uniqueProductsCount = computed(() => cartStore.uniqueProductsCount);

const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1030;
  background-color: black;
  color: white;
}

.navbar-brand {
  font-weight: bold;
  font-size: 2.2rem;
}

.nav-link {
  font-size: 1.2rem;
  display: inline-block;
  width: fit-content;
}

.nav-link.active-link {
  font-weight: bold;
  color: white;
  border-bottom: 1px solid white;
}

.bi-cart {
  font-size: 1.2rem;
}

.badge {
  font-size: 0.7rem;
  border-radius: 50%;
}

.nav-item {
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (max-width: 992px) {
  .navbar-brand {
    font-size: 1.8rem;
  }

  .nav-link {
    font-size: 1rem;
  }

  .navbar-nav {
    text-align: right;
  }
}

@media (max-width: 768px) {
  .navbar-toggler {
    margin-top: 5px;
  }

  .navbar-nav {
    text-align: right;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .navbar-nav {
    text-align: right;
  }

  .nav-item {
    margin: 0.5rem 0;
  }

}
</style>