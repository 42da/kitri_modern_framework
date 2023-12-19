<template>
    <!--<shop-header :menus='menuItems' />-->   <!-- :(콜론)을 붙이면 변수명이란 것을 명시하는 것임.-->
    <shop-header />   <!-- :(콜론)을 붙이면 변수명이란 것을 명시하는 것임.-->

    <shop-breadcrumb /><!-- <ShopBreadcrumb/> 로 해도 됨-->

    <button @click="buttonClicked">클릭 후 데이터 가져옴.</button>
    <router-view />

    <!-- <shop-content :desc='contentDesc' :products='products' /> -->
    <shop-content />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ShopHeader from './components/ShopHeader.vue';
import ShopBreadcrumb from './components/ShopBreadcrumb.vue';
import ShopContent from './components/ShopContent.vue';

//import axios from 'axios';

export default {
  name: 'App',
  components: {
    ShopHeader,
    ShopBreadcrumb,
    ShopContent
    // HelloWorld
  },
  methods : {           // 함수는 methods 안에
      buttonClicked() {
        console.log("button clicked");
        this.$store.dispatch('getProductsFromFakeServer');
      },
      // *** vuex 의 action에서 관리
    //   getProductsFromFakeServer() {
          
        // axios.get('https://jsonplaceholder.typicode.com/photos')
        //     .then(res => {
        //         //console.log(res.data);
        //         this.products = res.data.slice(0, 4);
        //     })
        //     .catch(err => {
        //         console.log(err);
        // });
    //   }
  },
  data() {      // 원본 데이터 변하면 자식컴포넌트들 refresh
    return {
    //   myName: "Chung Gi Pyeong"
        //  vuex 가 데이터 관리(store/index.js)
        // menuItems: ['menu1', 'menu2', 'menu3', 'menu4', ],
        // contentDesc: 'welcome to the mall.. vue.. so easy..',
        //products: [],
    }
  },
  created() {
      console.log("created callbacked");
  },
  mounted() {
      console.log("mounted callbacked..");
      //this.getProductsFromFakeServer();
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: sans-serif;
            margin: 0 auto;
            width: 1200px;
        }

        header {
            align-items: center;
            display: flex;
            margin-bottom: 25px;
        }

        nav {
            margin-left: 30px;
        }

        .product-cards {
            display: grid;
            grid-template-columns: auto auto auto auto;
            margin-bottom: 30px;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav a {
            color: black;
            font-weight: bold;
            display: block;
            padding: 15px;
            text-decoration: none;
        }

        nav a:hover {
            text-decoration: underline;
        }

        .breadcrumb {
            display: flex;
            list-style: none;
        }

        .breadcrumb li {
            padding: 10px;
        }

        .breadcrumb li:after {
            content: "/";
            margin-left: 20px;
        }

        .breadcrumb li:last-child:after {
            content: "";
        }

        .breadcrumb a {
            color: black;
            text-decoration: none;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
        }

        .intro {
            margin: 30px 0;
            padding-left: 10px;
            width: 50%;
        }

        .intro h1 {
            margin-bottom: 15px;
        }

        .intro p {
            line-height: 1.5;
        }

        .product-card {
            display: inline-block;
            border: 1px solid black;
            padding: 15px;
            margin: 10px;
        }

        .product-card a {
            color: black;
            text-decoration: none;
        }

        .product-card img {
            width: 100%;
        }

        .product-card h2 {
            margin: 30px 0 15px;
        }

        .product-card p {
            line-height: 1.5;
        }

        .original-price {
            color: grey;
            text-transform: uppercase;
        }

        .current-price span {
            font-weight: bold;
            text-decoration: underline;
        }

        .saving {
            color: green;
        }
</style>
