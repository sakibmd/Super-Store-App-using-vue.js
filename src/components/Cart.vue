<template>
  <div>
    <ul class="list-group mt-2">
      <li class="list-group-item">
        <span class="item-name">Name</span>
        <span class="item-price float-right">Price</span>
      </li>
      <hr />
      <li class="list-group-item" v-for="(item, index) in items" :key="index">
        <span class="item-name">{{ item.title }}</span>
        <button class="btn btn-danger" @click="removeItem(index)">X</button>
        <span class="item-price float-right">${{ item.price }}</span>
        <br />
      </li>
      <hr />
      <li class="list-group-item">
        <span class="item-name">Total</span>
        <span class="item-price float-right">${{ totalPrice }}</span>
      </li>

      <li class="list-group-item" v-if="items.length > 0">
        <button class="btn btn-success btn-block" @click="checkout">Checkout</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  // props: ["items"],
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      var total = 0;
      this.items.forEach(item => {
        total += parseFloat(item.price);
      });
      return total.toFixed(2);
    }
  },
  methods: {
    removeItem(index) {
      // this.$emit('itemRemoved', index);
      this.$store.commit("removeItem", index);
    },
    checkout() {
      if (confirm("Are you sure want to checkout?")) {
        this.$store.commit("clearCart");
      }
    }
  }
};
</script>