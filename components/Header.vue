<template>
  <header class="lg:w-full" style="background-color: #FEFDEC;">
    <transition name="fade-up">\
      <div id="menu" class="w-full fixed w-screen h-screen top-0 left-0 p-8 box-border lg:w-full 2xl:p-12 lg:h-auto z-10" v-show="mobileMenuOpen" style="background-color: #FEFDEC;">
        <menu class="p-0" >
          <nuxt-link id="home-link" class="block" to="/" >Jack Murray-Brown</nuxt-link>
          <nuxt-link class="block" to="/about">About</nuxt-link>
          <details>
            <summary class="underline">Selected work</summary>
            <ul class="list-none pl-0 ml-0">
              <li v-for="project in work" :key="project.slug">
                <nuxt-link class="block" :to="`/work/${project.slug}`">{{project.title}}</nuxt-link>
              </li>
            </ul>
          </details>
          <!-- <nuxt-link class="block" to="/logs">Log</nuxt-link> -->
          <!-- <nuxt-link class="block" to="/radio">Radio</nuxt-link> -->
          <nuxt-link class="block" to="/links">Links</nuxt-link>
          <a class="block" href="mailto:jack@antiantivirus.co.uk">Mail Me</a>
          <a class="block" href="https://twitter.com/the1antivirus" target="_blank">Twitter</a>
          <a class="block" href="https://www.are.na/jack-murray-brown" target="_blank">Are.na</a>
          <button>Listen whilst you browse</button>
        </menu>
      </div>
    </transition>
    <div class="fixed bottom-0 left-0 w-screen p-8 box-border lg:hidden z-20">
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
      mobileMenuOpen: false
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
  watch: {
    async $route() {
      this.mobileMenuOpen = false
    },
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
        return 'close menu'
      } else {
        return 'menu'
      }
    }
  }
})
</script>

<style scoped>

#home-link {
  background-color: transparent;
}

#home-link:hover {
  background-color: #00ff46;
}

menu {
  margin-block-start: 0px;
}

@media (min-width: 1024px) { 
  #menu {
    max-width: 25vw;
    display: block !important;
  }
}

@media (min-width: 1536px) { 
  #menu {
  max-width: 16.66vw;
  }
}

</style>