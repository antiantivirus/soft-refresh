<template>
  <header class="ml-auto" style="background-color: #dcdcdc; max-width: 250px">
    <nuxt-link to="/">JMB</nuxt-link>,
    <nuxt-link to="/about">About</nuxt-link>,
    <!-- <details>
      <summary class="underline">Selected work</summary>
      <ul class="list-none pl-0 ml-0">
        <li v-for="project in work" :key="project.slug">
          <nuxt-link class="block" :to="`/work/${project.slug}`">{{project.title}}</nuxt-link>
        </li>
      </ul>
    </details> -->
    <nuxt-link to="/logs">Log</nuxt-link>,
    <nuxt-link to="/radio">Radio</nuxt-link>,
    <nuxt-link to="/links">Links</nuxt-link>,
    <a href="mailto:jack@antiantivirus.co.uk">Mail Me</a>,
    <a href="https://twitter.com/the1antivirus" target="_blank">Twitter</a>,
    <a href="https://www.are.na/jack-murray-brown" target="_blank">Are.na</a>,
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
  data(){
    return {
      work: null,
      logs: null,
      radioShows: null
    }
  },
  async fetch() {
    this.work = await this.$content("work").fetch()
    this.logs = await this.$content("logs").fetch()
    this.radioShows = await this.$content("radio").fetch()
  },
  methods: {
    playShow(show){
      this.$store.commit('playShow', show)
    }
  },
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
