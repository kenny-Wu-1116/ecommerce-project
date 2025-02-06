<template>
  <div class="row ad-fade-in">
    <div v-for="ad in ads" :key="ad.id" :class="['col-12 col-md-6 col-lg-6 mb-4']">
      <NuxtLink :to="{ path: '/products', query: { category: ad.category } }" class="ad-box">
        <img :src="ad.image" alt="Ad Image" class="ad-img" />
        <div class="ad-overlay">
          <h3 class="ad-title">{{ ad.title }}</h3>
        </div>
        <div class="ad-engraving">{{ ad.title }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineProps({
  ads: Array
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.3 }
  )

  document.querySelectorAll('.ad-fade-in').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.ad-fade-in {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.6s ease-out, transform 1s ease-out;
}

.ad-fade-in.visible {
  opacity: 1;
  transform: scale(1);
}

.ad-box {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ad-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.ad-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.ad-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.ad-box:hover .ad-img {
  transform: scale(1.1);
}

.ad-box:hover .ad-overlay {
  opacity: 1;
}

.ad-engraving {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: opacity 0.3s;
  opacity: 1;
}

.ad-box:hover .ad-engraving {
  opacity: 0;
}

@media (max-width: 768px) {
  .ad-box {
    height: 250px;
  }

  .ad-title {
    font-size: 1.8rem;
  }

  .ad-engraving {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .ad-box {
    height: 200px;
  }

  .ad-title {
    font-size: 1.5rem;
  }

  .ad-engraving {
    font-size: 1rem;
  }
}
</style>
