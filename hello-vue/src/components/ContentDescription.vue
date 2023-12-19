<template>
  <section class="intro">
    <h1>Videos less than $10</h1>
    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum non purus quis vestibulum. Pellentesque ultricies quam lacus, ut tristique sapien tristique et.</p> -->
    <!-- <p>{{desc}}</p> -->
    <!-- <p>{{ $store.state.ContentDescription }}</p> -->
    <p>{{ $store.getters.getContentDescription }}</p>
  </section>
</template>

<script>
export default {

    props: [
        // 'desc'
    ]
}
</script>

<style>

</style>