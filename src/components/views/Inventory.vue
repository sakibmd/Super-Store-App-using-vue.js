<template>
  <div class="row">
    <h3 v-if="loading">Loading . . . .</h3>
    <div
      v-else
      class="card col-sm-6 col-xs-12 col-md-4 p-2 mt-2"
      v-for="(item, index) in items"
      :key="index"
    >
      <router-link :to="{ path: '/item/' + item.id }" tag="div">
        <img class="card-img-top" :src="item.photo" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">${{ item.price }}</p>
        </div>
      </router-link>
      <button @click="addToCart(item)" class="btn btn-primary">+ Add</button>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // items: [],
      loading: true
    };
  },
  computed: {
    items(){
      return this.$store.getters.getInventory;
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    addToCart(item) {
      // this.$emit("newItemAdded", item);
      this.$store.dispatch('addToCart', item);
    },
    fetchData() {
      var self = this;
      axios.get("http://localhost:3000/items").then(response => {
        setTimeout(function() {
         self.$store.dispatch('setInventory',  response.data)
          self.loading = false;
        }, 1000);
      });
    }
  }
};
</script>