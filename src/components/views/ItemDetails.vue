<template >
    <div v-if="item" class="row">
      <div class="col-sm-6">
          <img :src="item.photo" alt="image">
      </div>
      <div class="col-sm-6">
          <h4>Title: {{ item.title }}</h4>
          <h5>Price: ${{ item.price }}</h5>
          <button class="btn btn-info btn-sm" @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
</template>

<style scoped>

</style>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            item: null,
        }
    }, 
    mounted(){
        this.fetchItem();
    },
    methods: {
        fetchItem(){
            var self = this
            axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
                self.item = response.data
            })
        },
        addToCart(item){
            this.$store.dispatch('addToCart', item)
        }
    }
}
</script>