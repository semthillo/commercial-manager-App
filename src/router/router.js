import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import AddOrder from '../components/orders/AddOrder.vue';
import AddProduct from '../components/products/AddProduct.vue';

import ListCustomer from '../components/customers/ListCustomer.vue';
import ListOrder from '../components/orders/ListOrder.vue';
import Addcustomer from '../components/customers/Addcustomer.vue';
import ListProduct from '../components/products/ListProduct.vue';
import EditCustomer from '../components/customers/EditCustomer.vue';
import EditOrder from '../components/orders/EditOrder.vue';







const routes = [
  { path: '/', name: "accueil", component: Accueil },
  { path: '/add-order', name: "AddOrder", component: AddOrder },
  { path: '/add-product', name: "AddProduct", component: AddProduct },
  { path: '/list-customer', name: "ListCustomer", component: ListCustomer },
  { path: '/list-order', name: "ListOrder", component: ListOrder },
  { path: '/list-product', name: "ListProduct", component: ListProduct },
  { path: '/add-customer', name: "Addcustomer", component: Addcustomer },
  { path: '/edit-customer', name: "EditCustomer", component: EditCustomer },
  { path: '/edit-order', name: "EditOrder", component: EditOrder },
  


  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
