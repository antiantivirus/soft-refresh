<template>
  <div >
    <div>
        <div>
          <div id="logo" class="mx-auto mt-24"></div>
          <h1 class="text-center mx-auto mt-12 w-9/12 md:w-3/6	">
            Soft Refresh is the practise of creative developer, visual artist and radio enthuiast Jack Murray-Brown. Currently based in Aberdeen and working part-time for <a href="https://designandcode.com" target="_blank">Design and Code</a> and part-time freelance.
          </h1>
          <a class="mx-auto block text-center mt-6 mb-12" href="mailto:jack@softrefre.sh">Say hi</a>
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
};
</script>

<style scoped>

#logo {
  width: 100px;
  height: 100px;
  filter: blur(20px);
  background-color: #00ff46;
  border-radius: 50%;
}

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

