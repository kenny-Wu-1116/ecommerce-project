<template>
  <div class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Welcome to Our Shop</h1>
        <p>Discover a curated selection of high-quality second-hand treasures, where pre-loved items find new homes!
          Shop smart, reduce waste, and enjoy a reliable and seamless shopping experience with great value deals.</p>
        <NuxtLink to="/products" class="btn btn-primary">
          Start Shopping <i class="bi bi-arrow-right"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: url('/img/6.jpg') center/cover no-repeat;
  height: 100vh;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1.5s ease-out forwards;
}

.hero-text {
  font-family: 'Poppins', sans-serif;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero-text .btn {
  font-size: 1.2rem;
  padding: 12px 30px;
  background-color: white;
  color: black;
  border-radius: 50px;
  border: none;
  transition: background 0.3s ease, transform 0.2s ease;
}

.hero-text .btn:hover {
  background-color: #f8c146;
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 992px) {
  .hero-text h1 {
    font-size: 2.2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .hero-text .btn {
    font-size: 1rem;
  }
}

@media (max-width: 992px) {
  .hero-text h1 {
    font-size: 2.2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .hero-text .btn {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 0.8rem;
  }

  .hero-text .btn {
    font-size: 0.8rem;
  }
}
</style>
