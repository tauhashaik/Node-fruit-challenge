<template>
  <div>

    <input type="text" placeholder="prod_name" v-model="prod_name" required>
    <input type="number" placeholder="quantity" v-model="quantity" required>
    <input type="number"  placeholder="amount" v-model="amount" required>
    <input type="text" placeholder="category" v-model="category" required>
    <input type="text" placeholder="ProdURL" v-model="ProdURL" required>
    <button @click="addProduct()">Add Button</button>

    <h1>This is the FRUIT SHOP!</h1>

    <table class="table">
      <tr class="thead">
        <th>id</th>
        <th>prod_name</th>
        <th>quantity</th>
        <th>amount</th>
        <th>category</th>
        <th>ProdURL</th>
      </tr>
      <tbody v-for="item in $store.state.products" :key="item.id" >
        <td>{{item.id}}</td>
        <td>{{item.prod_name}}</td>
        <td>{{item.quantity}}</td>
        <td>{{item.amount}}</td>
        <td>{{item.category}}</td>
        <td><img :src="item.ProdURL"></td>
        <button @click="editProd(item.id)">Edit</button>
        <button @click="deleteProd(item.id)">Delete</button>
      </tbody>
    </table>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      prod_name: null,
      quantity:null,
      amount:null,
      category:null,
      ProdURL:null
    }
  },
  methods: {
    addProduct(){
      this.$store.dispatch('addProduct',this.$data)
    },

    deleteProd(id){
      this.$store.dispatch('deleteProd',id)
    },
    editProd(id){
      let edit = {
        id:id,
        prod_name: this.prod_name,
        quantity: this.quantity,
        amount:this.amount,
        category:this.category,
        ProdURL:this.ProdURL
      }
      this.$store.dispatch('editProd',edit)
    }
  },

  computed: {
    getProducts(){
      this.$store.dispatch('getProducts')
    },

    
  },
  mounted(){
    this.getProducts
  },
  
}
</script>
<style>
.table{
  border: 2px solid;
  display: inline-block;
}
.thead{
  background-color: aqua;
}
  
</style>