import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    contentDescription: '아버지 그동안 고마웠습니다. 내 인생 내가 살겠습니다.',
    menuItems: ['menu1', 'menu2', 'menu3', 'menu4', ],
    products: [],
  },
  getters: {
    getContentDescription(state) {
      return state.contentDescription + ' 행복하십시오..';
    }
  },
  mutations: {
    setProduct(state, serverData) {
      state.products = serverData;
    }
  },
  actions: {
    getProductsFromFakeServer(context) {
      axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                //console.log(res.data);
                //this.products = res.data.slice(0, 4);   // 바로 세팅하면 안되고 mutations 을 통해 넣어줘야 함.
                context.commit('setProduct', res.data.slice(0,4))
            })
            .catch(err => {
                console.log(err);
        });
    }
  },
  modules: {
  }
})
