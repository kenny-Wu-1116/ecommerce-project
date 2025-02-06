<template>
  <button @click="$emit('update:isCardView', true)" :class="{ active: isCardView }"
    class="btn btn-outline-secondary me-2">
    <i class="fas fa-th-large"></i>
  </button>
  <button @click="$emit('update:isCardView', false)" :class="{ active: !isCardView }" class="btn btn-outline-secondary">
    <i class="fas fa-th-list"></i>
  </button>
</template>

<script setup>
defineProps({
  isCardView: Boolean
});
defineEmits(['update:isCardView']);
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.btn-outline-secondary.active {
  background-color: black;
  color: white;
  border-color: black;
}
</style>