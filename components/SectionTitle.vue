<template>
  <div class="titlecontainer mt-5">
    <h1 ref="sectionTitle" class="text-center mb-3 section-title fade-in-scale">
      <span class="line"></span>
      <i :class="icon"></i>
      {{ title }}
      <span class="line"></span>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: String,
  icon: String
})

const sectionTitle = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  if (sectionTitle.value) {
    observer.observe(sectionTitle.value)
  }
})
</script>

<style scoped>
.titlecontainer {
  padding: 0px 0px 20px 0px;
}

.fade-in-scale {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 0.6s ease-in-out, transform 0.9s ease-in-out;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title .line {
  height: 1px;
  background-color: #000;
  margin: 0 10px;
  width: 20%;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
}
</style>