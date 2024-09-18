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
        
          
          
          
    }),


    actions: {
        addCustomer(){
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

    }

})