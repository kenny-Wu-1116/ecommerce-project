<template>
  <footer class="footer bg-dark text-white mt-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-5 col-md-6 mb-2">
          <h5 class="fw-bold mb-4">About Us</h5>
          <p><i class="bi bi-geo-alt-fill me-2 fs-6"></i>456 Commerce Blvd, Shopping Mall, City Center</p>
          <p><i class="bi bi-telephone-fill me-2 fs-6"></i>(02) 1234-5678</p>
          <p><i class="bi bi-envelope-fill me-2 fs-6"></i>support@ecommercehub.com</p>
        </div>

        <div class="col-lg-4 col-md-6 mb-2">
          <h5 class="fw-bold mb-4">Quick Links</h5>
          <p>
            <NuxtLink class="quick-link" to="/"><i class="bi bi-house"></i> Home</NuxtLink>
          </p>
          <p>
            <NuxtLink class="quick-link" to="/products"><i class="bi bi-box-seam"></i> Products</NuxtLink>
          </p>
          <p>
            <NuxtLink class="quick-link" to="/cart"><i class="bi bi-cart"></i> Cart</NuxtLink>
          </p>
        </div>

        <div class="col-lg-3 col-md-12 mb-2">
          <h5 class="fw-bold mb-4">Follow Us</h5>
          <div class="d-flex gap-3">
            <NuxtLink to="https://www.facebook.com" target="_blank" class="social-icon fs-3">
              <i class="bi bi-facebook"></i>
            </NuxtLink>
            <NuxtLink to="https://www.twitter.com" target="_blank" class="social-icon fs-3">
              <i class="bi bi-twitter"></i>
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com" target="_blank" class="social-icon fs-3">
              <i class="bi bi-instagram"></i>
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com" target="_blank" class="social-icon fs-3">
              <i class="bi bi-youtube"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <p class="m-1">© 2024 E-commerce Platform</p>
      <p class="m-0">本網站僅供練習，無商業用途</p>
    </div>
  </footer>
</template>

<style scoped>
.footer a,
.footer .quick-link {
  color: white;
  text-decoration: none;
}

.footer a:hover,
.footer a:focus,
.footer .quick-link:hover,
.footer .quick-link:focus {
  color: #f8c146;
}

.footer h5 {
  font-size: 1.75rem;
}

.footer-bottom {
  background-color: #343a40;
  color: white;
}

.footer-divider {
  border-top: 1px solid white;
  opacity: 0.5;
  margin: 0 auto;
  width: 100%;
}

.footer-bottom {
  background-color: #212529;
  text-align: center;
  padding: 1rem 0;
  font-size: 1rem;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer h5 {
    font-size: 1.5rem;
  }
}
</style>
