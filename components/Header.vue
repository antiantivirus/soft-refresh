<template>
  <header class="lg:w-full" style="background-color: #FEFDEC;">
    <transition name="fade-up">\
      <div id="menu" class="w-full fixed w-screen h-screen top-0 left-0 p-8 lg:px-6 box-border lg:w-full 2xl:p-12 lg:h-auto z-10" v-show="mobileMenuOpen" style="background-color: #FEFDEC;">
        <nav class="p-0" >
          <ul>
            <li><nuxt-link id="home-link" class="block" to="/" >Jack Murray-Brown</nuxt-link></li>
            <li><nuxt-link class="block" to="/work">Selected work</nuxt-link></li>
            <li><nuxt-link class="block" to="/links">Links</nuxt-link></li>
            <li><a class="block" href="mailto:jack@antiantivirus.co.uk">Mail Me</a></li>
            <li><a class="block" href="https://twitter.com/the1antivirus" target="_blank">Twitter</a></li>
            <li><a class="block" href="https://www.are.na/jack-murray-brown" target="_blank">Are.na</a></li>
          </ul>
        </nav>
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
    max-width: 220px;
    display: block !important;
  }
}

@media (min-width: 1536px) { 
  #menu {
    max-width: 280px;
  }
}

</style>