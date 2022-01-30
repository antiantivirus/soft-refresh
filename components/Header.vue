<template>
  <header class="the-grid initial-grid bg-grey z-50" style="background-color: #bebebe;">
    <span class="initial">{{j}}</span>
    <span class="initial">{{m}}</span>
    <span class="initial">{{b}}</span>
  </header>
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
