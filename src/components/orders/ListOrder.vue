<template>
    <NavBar />
    <div class="container mb-4 mt-4">
      <h2>List of Orders</h2>
    </div>
    <div class="container d-flex justify-content-end mb-2">
      <router-link class="btn btn-info" to="/add-order">
        <i class="fa fa-cube" aria-hidden="true"></i> Add New Orders
      </router-link>
    </div>
  
    <div class="container">
      <table class="table  table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Track Number</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in store.orders" :key="index">
            <td>{{ order.date }}</td>
            <td>{{ order.client }}</td>
            <td>{{ order.deliveryAddress }}</td>
            <td>{{ order.trackingNumber }}</td>
            <td>{{ order.status }}</td>
            <td>
              <router-link class="btn btn-primary" to="detail-view">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </router-link>
              <button type="button" class="btn btn-warning" @click="edit(order)">
                <i class="fa fa-pencil" aria-hidden="true"> </i>
              </button>
              <button type="button" class="btn btn-danger" @click="destroy(order)">
                <i class="fa fa-trash" aria-hidden="true"> </i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
   
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { useGestionStore } from '../../store/gestion';
  import { ref, computed } from 'vue';
  

  const router = useRouter();
  const store = useGestionStore();
  
  
  const selectedOrder = ref(null);
  
 
  const selectedIndex = computed(() => {
    if (selectedOrder.value) {
      return store.orders.findIndex(order => order.id === selectedOrder.value.id);
    }
    return -1;
  });
  
  
  const selectedDetail = computed(() => {
    if (selectedIndex.value !== -1) {
      return store.orderDetails[selectedIndex.value];
    }
    return null;
  });
  

 
  
 
  function edit(order) {
    router.push({ name: 'EditOrder', params: { id: order.id } });
  }
  
  function destroy(order) {
    if (window.confirm('Confirm the deletion of this order ?')) {
      const index = store.orders.findIndex(o => o.id === order.id);
      if (index !== -1) {
        store.removeOrder(index);
        
      }
    }
  }
  </script>
  
  <style scoped>

  .btn{
    margin-left: 5px;
  }
  .carousel-item img {
    height: 200px;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    max-width: 600px;
    width: 100%;
    padding: 1rem;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-title {
    margin: 0;
  }
  
  .btn-close {
    background: white;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }
  
  .modal-body {
    padding: 1rem 0;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  </style>
  