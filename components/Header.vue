<template>
  <header style="background-color: #dcdcdc;">
    <transition name="fade-up">
      <menu class="fixed w-screen h-screen top-0 left-0 m-0 p-12 box-border lg:w-auto lg:h-auto" v-if="mobileMenuOpen" style="background-color: #dcdcdc;">
        <nuxt-link class="block" to="/">Jack Murray-Brown</nuxt-link>
        <nuxt-link class="block" to="/about">About</nuxt-link>
        <details>
          <summary class="underline">Selected work</summary>
          <ul class="list-none pl-0 ml-0">
            <li v-for="project in work" :key="project.slug">
              <nuxt-link class="block" :to="`/work/${project.slug}`">{{project.title}}</nuxt-link>
            </li>
          </ul>
        </details>
        <nuxt-link class="block" to="/logs">Log</nuxt-link>
        <nuxt-link class="block" to="/radio">Radio</nuxt-link>
        <nuxt-link class="block" to="/links">Links</nuxt-link>
        <a class="block" href="mailto:jack@antiantivirus.co.uk">Mail Me</a>
        <a class="block" href="https://twitter.com/the1antivirus" target="_blank">Twitter</a>
        <a class="block" href="https://www.are.na/jack-murray-brown" target="_blank">Are.na</a>
      </menu>
    </transition>
    <div class="fixed bottom-0 left-0 w-screen p-8 box-border lg:hidden">
      <button class="w-full " @click="mobileMenuOpen = !mobileMenuOpen">{{mobileMenuText}}</button>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
  data(){
    return {
      work: null,
      logs: null,
      radioShows: null,
      mobileMenuOpen: true
    }
  },
  async fetch() {
    this.work = await this.$content("work").fetch()
    // this.logs = await this.$content("logs").fetch()
    // this.radioShows = await this.$content("radio").fetch()
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
    },
    mobileMenuText(){
      if (this.mobileMenuOpen){
        return '- menu'
      } else {
        return '+ menu'
      }
    }
  }
})
</script>
