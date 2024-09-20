<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create new customer</h5>
          
        </div>
        <div class="modal-body">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Customer Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="newCustomer.name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text"
          class="form-control"
          id="address"
          v-model="newCustomer.address"
          required
        >
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="text"
          class="form-control"
          id="email"
          v-model="newCustomer.email"
          required
        >
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text"
          class="form-control"
          id="phone"
          v-model="newCustomer.phone"
          required
        >
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


import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  add: Boolean
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close'); 
}


const newCustomer = ref({ name: "", address: "", email: "", phone: "" });



const resetForm = () => {
    newCustomer.value = ref({ name: "", address: "", email: "", phone: "" });
}
const onSubmit = () => {
    store.addCustomer(
        store.currentIndex,
        newCustomer.value.name,
        newCustomer.value.address,
        newCustomer.value.email,
        newCustomer.value.phone,
    )
    resetForm()
    router.push({ name: 'ListCustomer' });

}


</script>
<style scoped>
#carouselExampleControls .carousel-item img{
  height: 100vh;
}
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