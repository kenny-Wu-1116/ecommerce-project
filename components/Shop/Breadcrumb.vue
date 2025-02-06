<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Products
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  background-color: transparent;
  padding: 0;
  margin-bottom: 10px;
  font-size: 1.25rem;
  color: #007bff;
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
  pointer-events: none;
}
</style>