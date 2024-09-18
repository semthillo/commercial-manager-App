<template >
   <navbar />
    <div class="container mb-4 mt-4">
        <h2>List of Customers</h2>
    </div>
    <div class="container d-flex justify-content-end mb-2">
        <router-link class="btn btn-info"><i class="fa fa-user-plus" aria-hidden="true"></i> Add New Customer</router-link>
    </div>
    
   <div class="container">
     <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Adress</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(customer, index) in store.customers" :key="index">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{customer.name}}</td>
      <td>{{customer.address}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.phone}}</td>
      <td><button type="button" class="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i></button> <button type="button" class="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i></button>  <button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
      
    </tr>
  </tbody>
</table>
   </div>

  

  
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useGestionStore } from '../../store/gestion';

const store = useGestionStore()


</script>
<style scoped>
    
</style>