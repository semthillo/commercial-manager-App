<template >
    <navbar />
    <div class="container mt-4"><h2>Edit  Order</h2></div>
    <div class="container d-flex justify-content-end mb-2">
         <router-link class="btn btn-secondary mt-3" to="/list-order"><i class="fa fa-list" aria-hidden="true"></i> Order List</router-link>
     </div>
     <div class="container">
        <form >
            <div class="inputs">
                <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input
          type="date"
          class="form-control"
          id="date"
          
        />
      </div>
      <div class="mb-3">
        <label for="customer" class="form-label">Customer</label>
        <input type="text"
          class="form-control"
          id="customer"
         
        >
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Delivery Address</label>
        <input type="text"
          class="form-control"
          id="address"
         
        >
      </div>
      <div class="mb-3">
        <label for="number" class="form-label">Track Number</label>
        <input type="text"
          class="form-control"
          id="number"
          d
        >
            </div>
            <div class="mb-3">
        <label for="status" class="form-label">Status</label>
        <select class="form-select" aria-label="Default select example">
  <option selected></option>
  <option value="1">Prossessing</option>
  <option value="2">Delivered</option>
  <option value="3">Shipped</option>
</select>
            </div>
            
      
      </div>
      <div class=" d-flex justify-content-start mb-2">
         <router-link class="btn btn-info mt-3" to="/list-order" @click="addNewOrder"><i class="fa fa-plus" aria-hidden="true"></i> Save</router-link>
     </div>
      </form>
     </div>
     
     <div class="container">
         <h4>Order Details</h4>
     
     <table class="table table-bordered" >
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><select class="form-select" aria-label="Default select example">
  <option selected>Select Product</option>
  <option value="1">Produt A</option>
  <option value="2">Product B</option>
  <option value="3">Product C</option>
</select></td>
      <td><input
          type="number"
          class="form-control"
          id="date"
          
        /></td>
      
      <td><input
          type="number"
          class="form-control"
          id="num"
          placeholder="0"
        /></td>
      <td><button type="button" class="btn btn-danger" @click="firstDet()"><i class="fa fa-trash" aria-hidden="true"></i> Remove</button></td>
    </tr>
  
   
  
    <tr v-for="(item, index) in tmps"  :key="index">
          <td><select class="form-select" aria-label="Default select example">
        <option selected>Select Product</option>
        <option value="1">Produt A</option>
        <option value="2">Product B</option>
        <option value="3">Product C</option>
        </select></td>
            <td><input
                type="number"
                class="form-control"
          id="date"
          
        /></td>
      
        <td><input
          type="number"
          class="form-control"
          id="num"
          placeholder="0"
        /></td>
        <td><button type="button" class="btn btn-danger" @click="removeDet(index)"><i class="fa fa-trash" aria-hidden="true"></i> Remove</button></td>
    </tr>
    <tr >
        <td colspan="4">
            <button class="btn btn-success mt-3" @click="counter()"><i class="fa fa-list" aria-hidden="true"></i> Save new Details</button>
        </td> 
     </tr>
   
  </tbody>
</table>

</div>
 </template>
 <script setup>
import { ref } from 'vue';

 

const tmps = ref([]);  
let i = ref(0);       

function counter() {
  i.value += 1;             
  tmps.value.push(i.value);    
  console.log(tmps.value);      
}

function removeDet(index){
  tmps.value.splice(index, 1)
}

function firstDet(){
  alert("The order must have at least one detail")
}

 
 
 </script>
 <style scoped>
     .inputs{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 20px;
}
#carouselExampleControls .carousel-item img{
  height: 100vh;
}
          .carousel-item img{
  height: 200px;
}
.modal-overlay {
  position: absolute;
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