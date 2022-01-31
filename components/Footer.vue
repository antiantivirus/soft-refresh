<template>
  <footer >
    <nuxt-link class="no-underline" to="/">
      <div class="the-grid initial-grid bg-grey z-50" style="background-color: #dcdcdc;">
        <span class="initial lg:hidden">J</span>
        <span class="initial lg:hidden">M</span>
        <span class="initial lg:hidden">B</span>
        <span class="initial hidden lg:block">{{j}}</span>
        <span class="initial hidden lg:block">{{m}}</span>
        <span class="initial hidden lg:block">{{b}}</span>
      </div>
    </nuxt-link>
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
