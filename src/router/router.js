import { createRouter, createWebHistory } from 'vue-router';

import AddOrder from '../components/orders/AddOrder.vue';
import AddProduct from '../components/products/AddProduct.vue';
import AddCustomer from '../components/customers/AddCustomer.vue'
import ListCustomer from '../components/customers/ListCustomer.vue';
import ListOrder from '../components/orders/ListOrder.vue';

import ListProduct from '../components/products/ListProduct.vue';
import EditCustomer from '../components/customers/EditCustomer.vue';
import EditOrder from '../components/orders/EditOrder.vue';
import EditProduct from '../components/products/EditProduct.vue';
import DetailOrderView from '../components/orders/DetailOrderView.vue';









const routes = [
  {
    path: '/list-order',
    name: 'ListOrder',
    component: ListOrder,
    children: [
      {
        path: 'add-order',
        name: 'AddOrder',
        component: AddOrder
      }
    ]
  },
  { path: '/', name: "list-cutomer", component: ListCustomer },
  { path: '/add-order', name: "AddOrder", component: AddOrder },
  { path: '/add-product', name: "AddProduct", component: AddProduct },
  { path: '/list-customer', name: "ListCustomer", component: ListCustomer },
  { path: '/list-order', name: "ListOrder", component: ListOrder },
  { path: '/list-product', name: "ListProduct", component: ListProduct },
  { path: '/add-customer', name: "AddCustomer", component: AddCustomer },
  { path: '/edit-customer', name: "EditCustomer", component: EditCustomer },
  { path: '/edit-order', name: "EditOrder", component: EditOrder },
  { path: '/edit-product', name: "EditProduct", component: EditProduct },
  { path: '/detail-view', name: "DetailOrder", component: DetailOrderView },
  


  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
