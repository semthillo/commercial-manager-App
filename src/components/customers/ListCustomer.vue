<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()
import { useGestionStore } from '../../store/gestion';
import { ref } from 'vue';

import EditCustomer from './EditCustomer.vue';
import AddCustomer from './AddCustomer.vue';

const store = useGestionStore()

const selectedCustomer = ref(null);
const add = ref(false)
const editC = ref(false)

function editCust(){
  editC.value = true
}

function newCust(){
  add.value = true
}
function openModal(customer) {
  selectedCustomer.value = customer;
}

function closeModal() {
  selectedCustomer.value = null;
}





const destroy = () => {
  if (window.confirm("Confirm the deletion of this client")) {
    const index = store.customers.findIndex(r => r === selectedCustomer.value);
    if (index !== -1) {
      store.removeCustomer(index);
    }
    
    router.push("/list-customer");
  }
};
</script>

<template >
   <NavBar />
    <div class="container mb-4 mt-4">
        <h2>List of Customers</h2>
    </div>
    <div class="container d-flex justify-content-end mb-2">
        <button class="btn btn-info" @click="newCust()"><i class="fa fa-user-plus" aria-hidden="true" ></i> Add New Customer</button>
    </div>
    
   <div class="container">
     <table class="table table-bordered">
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
      <td><button type="button" class="btn btn-primary" @click="openModal(customer)"><i class="fa fa-eye" aria-hidden="true"></i></button> <button type="button" class="btn btn-warning" @click="editCust()"><i class="fa fa-pencil" aria-hidden="true"></i></button>  <button type="button" class="btn btn-danger" @click="destroy"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
      
    </tr>
  </tbody>
</table>
   </div>

  

   <div class="modal-overlay" v-if="selectedCustomer">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">View customer</h5>
          <button type="button" class="btn-close"  aria-label="Close" @click="closeModal"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        <div class="modal-body">
          <ul>
            <li><strong>Customer Name :</strong> {{ selectedCustomer.name }}</li>
            <li><strong>Address :</strong> {{ selectedCustomer.address }}</li>
            <li><strong>Email :</strong> {{ selectedCustomer.email }}</li>
            <li><strong>Phone :</strong> {{ selectedCustomer.phone }}</li>
        
          </ul>
        </div>
        
      </div>
    </div>

 <AddCustomer v-if="add" :add="add" @close="add = false" />
 <EditCustomer v-if="editC" :editC="editC" @close="editC = false" />
</template>

<style scoped>
       .carousel-item img{
  height: 200px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
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