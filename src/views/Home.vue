<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  created () {
    this.$store.dispatch('userInfo').then(data => {
      if (data) {
        console.log(data)
      }
    })
  }

}
</script>
