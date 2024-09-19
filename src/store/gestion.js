import { defineStore } from "pinia";

export const useGestionStore = defineStore("gestion", {
    state: () =>({
        customers: [
            {
              name: "John Doe",
              address: "123 Main St, Springfield, IL",
              email: "johndoe@example.com",
              phone: "+1-555-123-4567"
            },
            {
              name: "Jane Smith",
              address: "456 Oak St, Metropolis, NY",
              email: "janesmith@example.com",
              phone: "+1-555-234-5678"
            },
            {
              name: "Michael Johnson",
              address: "789 Pine St, Gotham, CA",
              email: "mjohnson@example.com",
              phone: "+1-555-345-6789"
            },
            {
              name: "Emily Davis",
              address: "101 Maple Ave, Star City, TX",
              email: "emilydavis@example.com",
              phone: "+1-555-456-7890"
            },
            {
              name: "William Brown",
              address: "202 Cedar Rd, Central City, FL",
              email: "wbrown@example.com",
              phone: "+1-555-567-8901"
            }
          ],
          products: [
            {
              name: "Wireless Mouse",
              description: "Ergonomic wireless mouse with 1600 DPI sensitivity.",
              price: 25.99,
              stock: 150,
              category: "Electronics",
              barcode: "123456789012",
              status: "Available"
            },
            {
              name: "Bluetooth Headphones",
              description: "Noise-cancelling over-ear headphones with 20 hours battery life.",
              price: 79.99,
              stock: 85,
              category: "Accessories",
              barcode: "234567890123",
              status: "Available"
            },
            {
              name: "Office Chair",
              description: "Adjustable height office chair with lumbar support.",
              price: 149.99,
              stock: 30,
              category: "Furniture",
              barcode: "345678901234",
              status: "Out of Stock"
            },
            {
              name: "Standing Desk",
              description: "Electric adjustable standing desk with memory presets.",
              price: 299.99,
              stock: 20,
              category: "Furniture",
              barcode: "456789012345",
              status: "Available"
            },
            {
              name: "LED Desk Lamp",
              description: "LED lamp with touch control and USB charging port.",
              price: 39.99,
              stock: 200,
              category: "Lighting",
              barcode: "567890123456",
              status: "Available"
            }
          ],

          orders: [
            {
              date: "2024-09-15",
              client: "John Doe",
              deliveryAddress: "123 Main St, Springfield, IL",
              trackingNumber: "TRK123456789",
              status: "Shipped"
            },
            {
              date: "2024-09-16",
              client: "Jane Smith",
              deliveryAddress: "456 Oak St, Metropolis, NY",
              trackingNumber: "TRK987654321",
              status: "Processing"
            },
            {
              date: "2024-09-17",
              client: "Michael Johnson",
              deliveryAddress: "789 Pine St, Gotham, CA",
              trackingNumber: "TRK456123789",
              status: "Delivered"
            },
            {
              date: "2024-09-18",
              client: "Emily Davis",
              deliveryAddress: "101 Maple Ave, Star City, TX",
              trackingNumber: "TRK321654987",
              status: "Shipped"
            },
            {
              date: "2024-09-18",
              client: "William Brown",
              deliveryAddress: "202 Cedar Rd, Central City, FL",
              trackingNumber: "TRK654987321",
              status: "Cancelled"
            }
          ],

           orderDetails: [
            {
              product: "Laptop",
              quantity: 2,
              price: 1200
            },
            {
              product: "Mouse",
              quantity: 5,
              price: 25
            },
            {
              product: "Keyboard",
              quantity: 3,
              price: 45
            },
            {
              product: "Monitor",
              quantity: 1,
              price: 300
            }
          ],
          
          
          
          currentIndex: null,
        
          
          
          
    }),


    actions: {
        addCustomer(name, address, email, phone){
            this.customers.push({name, address, email, phone})
        },

        removeCustomer(index){
            this.customers.splice(index, 1)
        },
        setCurrentCustomerIndex(index) {
            this.currentIndex = index;
          },
          editCustomer(name, address, email, phone) {
            if (index >= 0 && index < this.customers.length) {
              this.customers[index] = { name, address, email, phone };
            }
          },
          setEditedCustomer(customer) {
            this.editedCustomer = customer;
          },

    },



    addProduct(name, description, price, stock, category, barcode, status){
        this.products.push({name, description, price, stock, category, barcode, status})
    },

    removeProduct(index){
        this.products.splice(index, 1)
    },
    setCurrentProductIndex(index) {
        this.currentIndex = index;
      },
      editProduct(name, description, price, stock, category, barcode, status) {
        if (index >= 0 && index < this.products.length) {
          this.products[index] = { name, description, price, stock, category, barcode, status };
        }
      },
      setEditedProduct(product) {
        this.editedProduct = product;
      },



      addOrder(date, client, deliveryAddress, trackingNumber, status ){
        this.products.push({date, client, deliveryAddress, trackingNumber, status})
    },

    removeOrder(index){
        this.orders.splice(index, 1)
    },
    setCurrentOrderIndex(index) {
        this.currentIndex = index;
      },
      editOrder(date, client, deliveryAddress, trackingNumber, status) {
        if (index >= 0 && index < this.orders.length) {
          this.orders[index] = { date, client, deliveryAddress, trackingNumber, status };
        }
      },
      setEditedProduct(order) {
        this.editedOrder = order;
      },
      addDetail(product,quantity, price ){
        this.orderDetails.push({product,quantity, price})
    },
})