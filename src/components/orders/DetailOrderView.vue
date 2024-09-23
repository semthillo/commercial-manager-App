<template>
    
    <NavBar />

<div class="container d-flex justify-content-end mb-2">
         <router-link class="btn btn-secondary mt-3" to="/list-order"><i class="fa fa-list" aria-hidden="true"></i> Order List</router-link>
     </div>
<div class="container mb-4">
    <h3>Order View :</h3>
      <table class="table  table-bordered table-secondary">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Track Number</th>
            <th scope="col">Status</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ store.orders[1].date }}</td>
            <td>{{ store.orders[1].client }}</td>
            <td>{{ store.orders[1].deliveryAddress }}</td>
            <td>{{ store.orders[1].trackingNumber }}</td>
            <td>{{ store.orders[1].status }}</td>
            
          </tr>
        </tbody>
      </table>
</div>

<div class="container mt-4">
    <h3>Details :</h3>
      <table class="table table-secondary table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ store.orderDetails[1].product }}</td>
            <td>{{ store.orderDetails[1].quantity }}</td>
            
            <td>{{ store.orderDetails[1].price }}</td>
          </tr>
          <tr>
            <td>{{ store.orderDetails[2].product }}</td>
            <td>{{ store.orderDetails[2].quantity }}</td>
            
            <td>{{ store.orderDetails[2].price }}</td>
          </tr>
        </tbody>
      </table>
</div>


</template>
<script setup>
 import { useGestionStore } from '../../store/gestion';
  
  const store = useGestionStore();

</script>
<style scoped>
    
</style>