<template>
  <header>
    <img src="https://dummyimage.com/200x100/000/fff&text=Logo" alt="" />
    <nav>
        <ul>
            <!-- <li><a href="">Videos to rent</a></li>
            <li><a href="">Videos to buy</a></li>
            <li><a href="">Used DVDs</a></li>
            <li><a href="">Offers</a></li> -->

            <li v-for="menu in $store.state.menuItems" :key="menu"><a href="">{{menu}}</a></li> <!--  v:for == directive 라고 함, 
                                                                                      key 는 다른 값이 나와야함. 내부적으로 구분하기 위해-->
        </ul>
    </nav>
  </header>
</template>

<script>
export default {

  props: [
    // 'menus'
  ]
}
</script>

<style>

</style>