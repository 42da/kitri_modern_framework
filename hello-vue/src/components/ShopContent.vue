<template>
  <!-- <content-description :desc='desc'/> -->
  <content-description/>

  <!-- <content-list :products='products'/> -->
  <content-list />
  
</template>

<script>
import ContentDescription from './ContentDescription.vue'
import ContentList from './ContentList.vue'
export default {
    name: 'ShopContent',
    components: {
        ContentDescription,
        ContentList
    },
    props: [
        // 'desc',
        'products'
    ]
}
</script>

<style>

</style>