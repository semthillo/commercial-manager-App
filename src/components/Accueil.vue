<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<NavBar />

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://mercadoeconsumo.com.br/wp-content/uploads/2020/06/Faturamento-do-e-commerce-cresce.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbc518cfc0842e6680ad58_ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://lh3.googleusercontent.com/proxy/jSJO8D96p_UK5x3nA4uGlGmZNz_XBgH651TTVfmzkN73lJOTsVcgfA2HOZ_sCYNyenI974s6ERsyIv3xhN_TU3hYfXsr2wa_aAW9Q5cOs2RxsttwCT_wrt6MsNI-2Cg" class="d-block w-100" alt="...">
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

<router-view></router-view>
 
</template>

<style scoped>

#carouselExampleControls .carousel-item img{
  height: 90vh;
}

</style>
