<template >
    <navbar />
     <div class="container mb-4 mt-4">
         <h2>List of Products</h2>
     </div>
     <div class="container d-flex justify-content-end mb-2">
         <router-link class="btn btn-info" to="/add-product"><i class="fa fa-cube" aria-hidden="true"></i> Add New Product</router-link>
     </div>
     
    <div class="container-fluid">
      <table class="table table-bordered">
   <thead>
     <tr>
       
       <th scope="col">Name</th>
       <th scope="col">Description</th>
       <th scope="col">Price</th>
       <th scope="col">Stock</th>
       <th scope="col">Category</th>
       <th scope="col">Barcode</th>
       <th scope="col">Status</th>
       <th scope="col">Actions</th>
     </tr>
   </thead>
   <tbody>
     <tr v-for="(product, index) in store.products" :key="index">
       
       <td>{{product.name}}</td>
       <td>{{product.description}}</td>
       <td>{{product.price}}</td>
       <td>{{product.stock}}</td>
       <td>{{product.category}}</td>
       <td>{{product.barcode}}</td>
       <td>{{product.status}}</td>
       <td><button type="button" class="btn btn-primary" @click="openModal(product)"><i class="fa fa-eye " aria-hidden="true"></i></button> <button type="button" class="btn btn-warning" @click="edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>  <button type="button" class="btn btn-danger" @click="destroy"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
       
     </tr>
   </tbody>
 </table>
    </div>
 
   
 
    <div class="modal-overlay" v-if="selectedProduct">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title">View product</h5>
           <button type="button" class="btn-close" @click="closeModal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
         </div>
         <div class="modal-body">
           <ul>
             <li><strong>Product Name :</strong> {{ selectedProduct.name }}</li>
             <li><strong>Description :</strong> {{ selectedProduct.description }}</li>
             <li><strong>Price :</strong> {{ selectedProduct.price }}</li>
             <li><strong>Stock :</strong> {{ selectedProduct.stock }}</li>
             <li><strong>Category :</strong> {{ selectedProduct.category }}</li>
             <li><strong>Barcode :</strong> {{ selectedProduct.barcode }}</li>
             <li><strong>Status :</strong> {{ selectedProduct.status }}</li>
             
           </ul>
         </div>
         
       </div>
     </div>
 </template>
 <script setup>
 import { useRouter } from 'vue-router';
 const router = useRouter()
 import { useGestionStore } from '../../store/gestion';
 import { ref } from 'vue';
 
 const store = useGestionStore()
 
 const selectedProduct = ref(null);
 
 
 function openModal(product) {
   selectedProduct.value = product;
 }
 
 function closeModal() {
   selectedProduct.value = null;
 }
 
 const edit = () => {
   
     router.push({ name: 'EditProduct' });
   }
 
 
 
 const destroy = () => {
   if (window.confirm("Confirm the deletion of this client")) {
     const index = store.products.findIndex(r => r === selectedProduct.value);
     if (index !== -1) {
       store.removeProduct(index);
     }
     
     router.push("/list-product");
   }
 };
 </script>
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