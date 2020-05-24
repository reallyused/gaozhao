<template>
  <div id="app">
     <pheader  />
     <router-view></router-view>
     <pfooter />
  </div>
</template>

<script>
import pheader from './components/header.vue'
import pfooter from './components/footer.vue'

export default {
  name: 'app',
  components: {
    pfooter,
    pheader
  }
}
</script>

<style lang="sass" scoped>

</style>