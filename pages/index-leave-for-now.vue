<template>
  <div >
    <div>
      <h1 ref="maluable-header" id="maluable-header">The web is malleable.</h1>
      <!-- <img src="~/assets/images/web-in-park.svg" class="w-56" /> -->

      <div id="grid">
        <div ref="board1">
        </div>
        <div ref="board2">
        </div>
        <div ref="board3">
          <h3>Recent work</h3>
          <div v-for="project in projects" :key="project.slug">
            <nuxt-link :to="`projects/${project.slug}`">{{project.title}}</nuxt-link>
          </div>
        </div>
        <div ref="board4">
          <p style="width: 50%">
            Soft Refresh is the practise of creative developer, visual artist and radio enthuiast Jack Murray-Brown. Currently based in Aberdeen and working part-time for Design and Code and part-time freelance.
          </p>
          <p>Say hi</p>
        </div>
        <div ref="board5">
        </div>
        <div ref="board6">
          
          <input type="checkbox" id="web"/>
          <label for="web">Web</label>
          <br/>

          <input type="checkbox" id="visuals"/>
          <label for="visuals">Visuals</label>
          <br/>

          <input type="checkbox" id="radio"/>
          <label for="radio">Radio</label>
          <br/>

          <input type="checkbox" id="art"/>
          <label for="art">Art</label>

          <input type="checkbox" v-model="malleable"/>
          {{malleable}}
        </div>
      </div>


 
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  data(){
    return {
      malleable: false
    }
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return {
      projects,
    };
  },
  mounted(){
    const height = window.screen.height / 2;
    const width = window.screen.width / 2;

    onmousemove = (e) => {
      if (!this.malleable){
        console.log("mouse location:", e.clientX, e.clientY)
        this.$refs.board1.style.transform = `skew(${(e.clientX - width)/30}deg, ${(e.clientY - height)/30}deg)`
        this.$refs.board2.style.transform = `skew(${(e.clientX - width)/20}deg, ${(e.clientY - height)/-30}deg)`
        this.$refs.board3.style.transform = `skew(${(e.clientX - width)/10}deg, ${(e.clientY - height)/15}deg)`
        this.$refs.board4.style.transform = `skew(${(e.clientX - width)/-10}deg, ${(e.clientY - height)/30}deg)`
        this.$refs.board5.style.transform = `skew(${(e.clientX - width)/-100}deg, ${(e.clientY - height)/-30}deg)`
        this.$refs.board6.style.transform = `skew(${(e.clientX - width)/-50}deg, ${(e.clientY - height)/30}deg)`
      }
    }
  }
};
</script>

<style scoped>

#grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1.5fr 1fr 0fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  gap: 20px 20px;
  height: 100vh;
  width: 100vw;
}

#grid div {
/*   background: grey; */
background: #dde0d9;
background: linear-gradient(90deg, #dde0d9 5%, #00ff46 50%, #dde0d9 95%, #dde0d9 95%);
}

#maluable-header {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

</style>

