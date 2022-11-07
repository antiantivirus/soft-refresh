<template>
  <footer class="mt-12 mb-32 lg:mt-24 lg:mb-0">
    <!-- <div class="flex justify-between max-w-sm mx-auto mb-12">
      <input type="checkbox" checked/>
      <input type="checkbox"/>
    </div> -->
    <img class="hidden lg:block " src="~assets/images/thanks.svg" alt=" "/>
    <img class="lg:hidden max-w-md mx-auto block" src="~assets/images/thanks-mobile.svg" alt=" "/>
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
