<template>
  <div class="text-col mx-auto">
    <h1>A selection of radio shows</h1>
    <button class="border-me p-4 cursor-pointer grid grid-cols-12 items-center w-full mb-4" v-for="radio in radios" :key="radio.slug" @click="playShow(radio.embed)">
      <span class="col-span-2 ">►</span>
      <span class="col-span-10 text-left">{{radio.title}}</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default{
  data(){
    return {
      radios: []
    }
  },
  async fetch() {
    this.radios = await this.$content("radio").fetch()
  },
  methods: {
    playShow(show){
      this.$store.commit('playShow', show)
    }
  },
}

</script>

<style scoped>
button:nth-child(2n) {
    grid-column: 2;
}
</style>