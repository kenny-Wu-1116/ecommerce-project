<template>
  <div class="rating-stars">
    <span>Rating:</span><i v-for="n in 5" :key="n" class="bi" :class="getStarClass(n)" @mouseover="setHoverRating(n)"
      @mouseleave="setHoverRating(0)">
    </i>
    <div v-if="hoverRating !== 0" class="rating-tooltip">{{ rating }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})

const hoverRating = ref(0)

const setHoverRating = (value) => {
  hoverRating.value = value
}

const getStarClass = (n) => {
  if (n <= Math.floor(props.rating)) {
    return 'bi-star-fill'
  }
  if (n === Math.ceil(props.rating) && props.rating % 1 !== 0) {
    return 'bi-star-half'
  }
  return 'bi-star'
}
</script>

<style scoped>
.rating-stars {
  position: relative;
  display: flex;
  align-items: center;
  font-size: large;
  margin-top: auto;
}

.rating-stars .bi {
  font-size: 1.5rem;
  color: #ffd700;
  cursor: pointer;
}

.rating-tooltip {
  background-color: #000;
  color: #fff;
  padding: 0px 10px;
  border-radius: 10px;
  font-size: 16px;
}

@media (max-width: 576px) {
  .rating-tooltip {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .rating-stars .bi {
    font-size: 1rem;
  }

  .rating-tooltip {
    font-size: 0.85rem;
  }

  .rating-stars {
    font-size: small;
  }
}
</style>
