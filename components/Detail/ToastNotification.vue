<template>
  <div class="toast-notification">
    <div class="toast-content">
      <i class="bi bi-check-circle-fill text-success me-2"></i>
      <span>{{ message }}</span>
      <button class="btn-close" @click="$emit('close')"></button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: String,
});
</script>

<style scoped>
.toast-notification {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 1050;
  animation: fadeIn 0.3s ease;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.btn-close {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>