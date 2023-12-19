<template>
  <section class="product-cards">
      <div v-for="product in $store.state.products" :key="product.id" class="product-card">
          <img :src='product.url' alt="" /> <!-- src 앞에 :(콜론) 붙여주면 변수 사용 가능(v:bind가 생략된 형태 -> v:bind:src)-->
          <h2><a href="">{{product.title}}</a></h2>
          <p class="original-price">RRP: $18.99</p>
          <p class="current-price">Price you pay <span>$9.99</span></p>
          <p class="saving">Your saving $9</p>
      </div>
    <!-- <div class="product-card">
        <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+2" alt="" />
        <h2><a href="">Video title 2</a></h2>
        <p class="original-price">RRP: $18.99</p>
        <p class="current-price">Price you pay <span>$9.99</span></p>
        <p class="saving">Your saving $9</p>
    </div>

    <div class="product-card">
        <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+3" alt="" />
        <h2><a href="">Video title 3</a></h2>
        <p class="original-price">RRP: $18.99</p>
        <p class="current-price">Price you pay <span>$9.99</span></p>
        <p class="saving">Your saving $9</p>
    </div>

    <div class="product-card">
        <img src="https://dummyimage.com/300x300/7EC0EE/000&text=Product+Image+4" alt="" />
        <h2><a href="">Video title 4</a></h2>
        <p class="original-price">RRP: $18.99</p>
        <p class="current-price">Price you pay <span>$9.99</span></p>
        <p class="saving">Your saving $9</p>
    </div> -->
  </section>
</template>

<script>
export default {
  props: [
    'products'
  ]
}
</script>

<style>

</style>