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
    </details>
    <details>
      <summary>Log</summary>
      <Logs/>
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
