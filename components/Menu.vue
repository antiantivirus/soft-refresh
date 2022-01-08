<template>
  <menu id="menu" :class="{'menu-open': menuOpen}">
    <button class="lg:hidden w-full" @click="menuOpen = !menuOpen">{{menuButtonText}}</button>
    <ul class="list-none lg:mt-0">
      <li>
        <nuxt-link to="/the-one">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projects">Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <a href="mailto:jack@antiantivirus.co.uk">Mail Me</a>
      </li>
      <li>
        <nuxt-link to="/cv">CV</nuxt-link>
      </li>
    </ul>
  </menu>
</template>

<script>
export default {
  data(){
    return {
      menuOpen: false
    }
  },
  computed: {
    menuButtonText(){
      if (this.menuOpen){
        return 'Close menu'
      } else {
        return 'Menu'
      }
    }
  },
  watch: {
    $route() {
      this.menuOpen = false;
    }
  },
}
</script>

<style scoped>

#menu {
  position: fixed;
  bottom: -250px;
  left: 0px;
  padding-left: 0px;
  width: 100vw;
  margin: 0px;
}

.menu-open {
  bottom: 0px !important;
}

/* 'lg': '1024px', */
@media (min-width: 1024px) {
  #menu {
    right: 50px;
    top: 50px;
    left: unset;
    width: min-content;
    height: min-content;
  }
}

</style>
