<template>
  <div>
    <div class="the-grid contents-grid">
        <section class="pb-24" @mouseover="hoverUpdate('j','Jack')" @mouseout="hoverUpdate('j','J')" aria-label="Intro">
            <h1>Hi, I'm Jack and welcome to my website.</h1>
            <h2>I'm a developer, artist, DJ and radio enthusiast currently based in Aberdeen.</h2>
            <p>Over time my work has evolved to center around community. I enjoy working with process and find this just as important as the outcome. I make websites, do visuals for club environments, something radio and enjoy a wild swim amongst other things.</p>
            <p>Thanks for visiting and I hope you enjoy having a look around.</p>
            <figure class="mb-6">
              <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg" alt="Jack Murray-Brown"/>
              <figcaption>Me just before a swim in the North Sea</figcaption>
            </figure>
            <hr>
            <details class="mt-6">
              <summary>Technical</summary>
              <p>Having graduated from University of Aberdeen with a 2:1 in Computing Science, I have a strong foundation and understanding of computing, programming and the web.</p>
              <p>Listed below are my main areas of technical knowledge:</p>
              <p>Javascript, HTML, CSS, Vue.js, Nuxt.js, p5.js, PHP, Wordpress, Illustrator, Figma, Blender, Three.js, Ruby on Rails, Ruby, Liquid, Photoshop.</p>
              <hr>
            </details>
            <details>
              <summary>Links</summary>
              <Links/>
              <hr>
            </details>
            <a href="mailto:jack@antiantivirus.co.uk">Mail Me</a><br/>
            <a href="https://twitter.com/the1antivirus" target="_blank">Twitter</a><br/>
            <a href="https://www.are.na/jack-murray-brown" target="_blank">Are.na</a><br/>
        </section>
        <section class="pb-24" @mouseover="hoverUpdate('m', 'Murray')" @mouseout="hoverUpdate('m','M')" aria-label="Selected work">
            <h3>Selected work</h3>
            <ul class="list-none m-0 p-0">
              <li v-for="project in projects" :key="project.title">
                <nuxt-link  :to="`/projects/${project.slug}`">
                  {{project.title}}
                </nuxt-link>
              </li>
            </ul>
        </section>
        <section class="pb-24" @mouseover="hoverUpdate('b','Brown')" @mouseout="hoverUpdate('b','B')" aria-label="Log">
            <h3>Log</h3>
            <p>I use social media pretty sparingly so here are the latest updates from me</p>
            <Logs :logsProp="logs"/>
        </section>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
  data() {
    return {
      j: 'J',
      m: 'M',
      b: 'B'
    }
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    const logs = await $content("logs").fetch();
    return {
      projects,
      logs
    };
  },
  methods: {
    hoverUpdate(item, value){
      if (item == 'j') {
        this.$store.commit('updateJ', value)
      } else if (item == 'm'){
        this.$store.commit('updateM', value)
      } else {
        this.$store.commit('updateB', value)
      }
    }
  }
})
</script>

<style>
.initial {
  font-size: 8rem;
  text-align: center;
  display: block;
}

.mt-72 {
  margin-top: 18rem;
}
</style>