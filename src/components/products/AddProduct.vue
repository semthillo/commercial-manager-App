<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://mercadoeconsumo.com.br/wp-content/uploads/2020/06/Faturamento-do-e-commerce-cresce.jpg" class="d-block w-100" alt="...">
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

    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header border-bottom border-1 pb-4">
          <h5 class="modal-title">Create new product</h5>
          
        </div>
        <div class="modal-body">
    <form @submit.prevent="onSubmit">
      <div class="inputs">
        <div class="mb-3">
        <label for="name" class="form-label">Poduct Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="newProduct.name"
          required
        />
      </div>
      
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="text"
          class="form-control"
          id="price"
          v-model="newProduct.price"
          required
        >
      </div>
      <div class="mb-3">
        <label for="stock" class="form-label">Stock</label>
        <input type="text"
          class="form-control"
          id="stock"
          v-model="newProduct.stock"
          required
        >
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">category</label>
        <input type="text"
          class="form-control"
          id="category"
          v-model="newProduct.category"
          required
        >
      </div>
      <div class="mb-3">
        <label for="barcode" class="form-label">Barcode</label>
        <input type="text"
          class="form-control"
          id="barcode"
          v-model="newProduct.barcode"
          required
        >
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Status</label>
        <select class="form-select" aria-label="Default select example">
          <option selected></option>
          <option value="1">Active</option>
          <option value="2">Inactive</option>
          
        </select>
      </div>
     
    </div>
       <div class="mb-3">
        <label for="desc" class="form-label">Description</label>
        <textarea 
          class="form-control"
          id="desc"
          v-model="newProduct.description"
          required></textarea>
      
      </div>
      
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button type="submit" class="btn btn-primary">
             Confirm
          </button>
        </div>
       
    </form>
        </div>
        
        
      </div>
    </div>
    
</template>
<script setup>
import { useRouter } from 'vue-router';


import { useGestionStore } from '../../store/gestion';
import { ref } from 'vue';

const store = useGestionStore()
const router = useRouter()


const newProduct = ref({ name: "", description: "", price: "", stock: "", category: "", barcode: "", status: ""});

function closeModal() {
    router.push({ name: 'ListProduct' });
}

const resetForm = () => {
    newProduct.value = ref({ name: "", description: "", price: "", stock: "", category: "", barcode: "", status: "" });
}
const onSubmit = () => {
  console.log(store); 
  console.log(typeof store.addProduct); 
    store.addProduct(
        store.currentIndex,
        newProduct.value.name,
        newProduct.value.description,
        newProduct.value.price,
        newProduct.value.stock,
        newProduct.value.category,
        newProduct.value.barcode,
        newProduct.value.status,
    )
    resetForm()
    router.push({ name: 'ListProduct' });

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