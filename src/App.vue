<template>
  <div id="app">
    <navbar @search="search"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-9">
          <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
          <router-view></router-view>
          
        </div>
        <div class="col-md-3 col-sm-3">
          <cart @itemRemoved="removedItem" :items="carts"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// import Inventory from "./components/Inventory";
import data from "./data";
export default {
  data() {
    return {
      items: [],
      carts: []
    };
  },
  components: {
    Navbar,
    // Inventory,
    Cart
  },
  methods: {
    search(keyword) {
      // this.items = data.filter(item => {
      //   return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      // });
    },
    addCartItem(item) {
      this.carts.push(item);
    },
    removedItem(index) {
      this.carts.splice(index, 1);
    }
  },
  mounted() {
    // this.items = data;
  },
  
};
</script>

<style>
</style>
