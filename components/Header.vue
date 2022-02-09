<template>
  <header style="background-color: #dcdcdc;">
    <details open>
      <summary>Jack Murray-Brown</summary>
      <h1>Hi, I'm Jack and welcome to my website.</h1>
      <h2>I'm a developer, artist, DJ and radio enthusiast currently based in Aberdeen.</h2>
      <figure class="mb-6">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg" alt="Jack Murray-Brown"/>
        <figcaption>Me just before a swim in the North Sea</figcaption>
      </figure>
    </details>

    <details>
      <summary>About</summary>
      <p>Over time my work has evolved to center around community. I enjoy working with process and find this just as important as the outcome. I assemble websites, do visuals for club environments, make radio and enjoy a wild swim amongst other things.</p>
      <p>I'm currently working part-time as New Media Developer at <a href="https://designandcode.com">Design and Code</a> and part-time freelance.
      <p>Thanks for visiting and I hope you enjoy having a look around.</p>
      <details>
        <summary>Technical</summary>
        <p>Having graduated from University of Aberdeen with a 2:1 in Computing Science, I have a strong foundation and understanding of computing, programming and the web.</p>
        <p>Listed below are my main areas of technical knowledge:</p>
        <p>[Javascript, HTML, CSS, Vue.js, Nuxt.js, p5.js, PHP, Wordpress, Hugo, Illustrator, Figma, Blender, Three.js, Ruby on Rails, Ruby, Liquid, Photoshop]</p>
      </details>
    </details>

    <details>
      <summary>Selected work</summary>
      <ul class="list-none pl-0 ml-0">
        <li v-for="project in work" :key="project.slug">
          <nuxt-link :to="`/work/${project.slug}`">{{project.title}}</nuxt-link>
        </li>
      </ul>
    </details>
    <details>
      <summary>Log</summary>
      <ul class="list-none pl-0 ml-0">
        <li v-for="log in logs" :key="log.slug">
          <nuxt-link :to="`/logs/${log.slug}`">{{log.title}}</nuxt-link>
        </li>
      </ul>
    </details>
    <details>
      <summary>Radio</summary>
      <ul class="list-none pl-0 ml-0">
        <li v-for="show in radioShows" :key="show.slug">
          <button @click="playShow(show.embed)">{{show.title}}</button>
        </li>
      </ul>
    </details>
    <details>
      <summary>Links</summary>
      <Links/>
    </details>
    <a href="mailto:jack@antiantivirus.co.uk">Mail Me</a><br/>
    <a href="https://twitter.com/the1antivirus" target="_blank">Twitter</a><br/>
    <a href="https://www.are.na/jack-murray-brown" target="_blank">Are.na</a><br/>
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
