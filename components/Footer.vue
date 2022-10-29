<template>
  <footer >
    <img class="hidden lg:block mt-24" src="~assets/images/thanks.svg" />
    <img class="lg:hidden mt-12 mb-32 max-w-md mx-auto block" src="~assets/images/thanks-mobile.svg" />
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
  computed: {
    j() {
      return this.$store.state.j
    },
    m() {
      return this.$store.state.m
    },
    b() {
      return this.$store.state.b 
    } 
  }
})
</script>
