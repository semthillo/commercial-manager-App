<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container ">
    <a class="navbar-brand" href="#">ABC corporation</a>
    <div class="collapse navbar-collapse justify-content-end"  id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item me-4">
          <a class="nav-link" href="#"><i class="fa fa-users" aria-hidden="true"></i> Customers</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="#"><i class="fa fa-cube" aria-hidden="true"></i> Products</a>
        </li>
        <li class="nav-item me-4">
          <a class="nav-link" href="#" ><i class="fa fa-shopping-basket" aria-hidden="true"></i> Orders</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://mercadoeconsumo.com.br/wp-content/uploads/2020/06/Faturamento-do-e-commerce-cresce.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbc518cfc0842e6680ad58_ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ecommerce%20marketing.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
</template>

<style scoped>

#carouselExampleControls .carousel-item img{
  height: 90vh;
}

</style>
