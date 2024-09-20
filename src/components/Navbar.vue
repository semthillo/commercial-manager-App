<template >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container ">
    <router-link class="navbar-brand" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link>
    <div class="collapse navbar-collapse justify-content-end"  id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item me-4">
          <router-link class="nav-link" to="/list-customer"><i class="fa fa-users" aria-hidden="true"></i> Customers</router-link>
        </li>
        <li class="nav-item me-4">
          <router-link class="nav-link" to="/list-product" ><i class="fa fa-cube" aria-hidden="true"></i> Products</router-link>
        </li>
        <li class="nav-item me-4 active">
          <router-link class="nav-link" to="/list-order" ><i class="fa fa-shopping-basket" aria-hidden="true"></i> Orders</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script setup>

</script>


<style scoped>
 
</style>