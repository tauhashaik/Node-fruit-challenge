import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'http://localhost:8050'

export default createStore({
  state: {
    products: []
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    // addProduct(state, data) {
    //   state.products=data;
    // }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const {data} = await axios.get(baseUrl+'/products');
        // console.log(data);
        commit("setProducts", data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    async getProduct({commit}){
      await axios.get(baseUrl+'/products')
    },

    async addProduct({commit},newProduct){
     const {data} = await axios.post(baseUrl+'/products',newProduct)
    //  commit("setProducts", data);
     window.location.reload();
      // console.log(data);
    },

    async deleteProd({commit},id){
      await axios.delete(baseUrl+'/products/'+id)
      window.location.reload();
    },

    async editProd({commit},update){
      await axios.patch(baseUrl+'/products/'+update.id,update)
      window.location.reload();
    }
  },
  modules: {}
});