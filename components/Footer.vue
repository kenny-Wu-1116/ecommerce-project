<template>
  <footer class="footer bg-dark text-white py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 mb-2">
          <h5 class="fw-bold mb-4">About Us</h5>
          <p><i class="bi bi-geo-alt-fill me-2 fs-6"></i>xxxxxxxxx123 Street</p>
          <p><i class="bi bi-telephone-fill me-2 fs-6"></i>(02) 1234-5678</p>
          <p><i class="bi bi-envelope-fill me-2 fs-6"></i>info@shoppingplatform.com</p>
        </div>

        <div class="col-lg-4 col-md-6 mb-2">
          <h5 class="fw-bold mb-4">Quick Links</h5>
          <ul class="list-unstyled">
            <li>
              <NuxtLink class="quick-link" to="/"><i class="bi bi-house"></i> Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="quick-link" to="/products"><i class="bi bi-box-seam"></i> Products</NuxtLink>
            </li>
            <li>
              <NuxtLink class="quick-link" to="/cart"><i class="bi bi-cart"></i> Cart</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 mb-2">
          <h5 class="fw-bold mb-4">Follow Us</h5>
          <div class="mb-3">
            <a href="#" class="text-white text-decoration-none me-3 social-icon"><i class="bi bi-facebook fs-3"></i></a>
            <a href="#" class="text-white text-decoration-none me-3 social-icon"><i class="bi bi-twitter fs-3"></i></a>
            <a href="#" class="text-white text-decoration-none me-3 social-icon"><i
                class="bi bi-instagram fs-3"></i></a>
            <a href="#" class="text-white text-decoration-none social-icon"><i class="bi bi-youtube fs-3"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer-bottom bg-dark text-center py-3 border-top border-secondary d-flex justify-content-center align-items-center">
      <p class="mb-0 fs-6">&copy; 2024 E-commerce Platform. 本網站僅供練習，無商業用途.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #343a40;
  color: white;
}

.footer a,
.footer .quick-link {
  color: white;
  text-decoration: none;
}

.footer a:hover,
.footer a:focus,
.footer .quick-link:hover,
.footer .quick-link:focus {
  color: #e2b97f;
}

.footer .input-group .form-control {
  border-radius: 0.25rem 0 0 0.25rem;
}

.footer .input-group .btn {
  border-radius: 0 0.25rem 0.25rem 0;
}

.footer .border-top {
  border-color: #444;
}

.footer h5 {
  font-size: 1.75rem;
}

.footer p {
  font-size: 1rem;
  line-height: 1.2;
}

.footer .fs-3 {
  font-size: 1.2rem;
}

.footer-bottom {
  background-color: #343a40;
  color: white;
}

.footer-bottom p {
  font-size: 1.5rem;
}

.footer .social-icon:hover i,
.footer .social-icon:focus i {
  color: #e2b97f;
}

@media (hover: none) {

  .footer a,
  .footer .quick-link {
    transition: none;
  }

  .footer .social-icon i {
    color: white;
  }

  .footer .social-icon:hover i {
    color: #e2b97f;
  }
}
</style>
