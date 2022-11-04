<template>
  <div>
    <div class="relative h-full">
      <img class="lg:hidden max-w-md mx-auto block mb-32" src="~assets/images/jmb-mobile.svg"/>
      <img class="hidden lg:block xl:-mb-16 2xl:-mb-72 max-w-screen-xl mx-auto" src="~assets/images/jmb3.svg"/>
      <div class="mx-auto max-w-md -mt-12 lg:-mt-40  border-me p-4 mb-16 relative" style="transform: rotate(3deg);">
        <h1 class="h1-index">Hi, I'm Jack and welcome to my website.</h1>
        <h2 class="h1-index mb-2">I'm a developer, artist and radio enthusiast, focussed on accessibility, sustainability and community engaged projects. Currently Based in Berlin</h2>
        <figure class="mb-6">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg" alt="Jack Murray-Brown"/>
          <figcaption>Me just before a swim in the North Sea</figcaption>
        </figure>
        <!-- <div class="absolute top-0 left-0 w-full h-full lil-intro"></div> -->
        <!-- <div class="temp-gauge border-me"></div> -->
      </div> 
      <!-- <img class="absolute right-0 bottom-0" src="~/assets/images/web-in-park.svg" style="max-width: 250px; bottom: -100px;"/> -->
    </div>
    <h3 class="italic mb-4">Seriously selected work!</h3>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-24 lg:mb-0 md:gap-6 seriously-selected-grid">
      <article>
        <nuxt-link to="/work/fruitful-fm" class="border-me homepage-item" style="background-color: #91CC8F">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_900,w_1000/v1667053155/Soft%20Refresh/fruitful/TERRA_INCOGNITA-5937_vcyz6z.jpg"/>
          <div class="p-4">
            <h4 class="m-0">A radio station housed inside a greenhouse. Flipping the traditional ‘dead’ and hidden space of a radio studio on its head.</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/norbergfestival-radio" class="border-me homepage-item" style="background-color: #8BD3E6">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_1100,w_900/v1667053155/Soft%20Refresh/norbergfestival%20radio/R1-08651-0001_imxtor.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Co-ordinating the radio station at the 21st edition of Norbergfestival.</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/guts" class="border-me homepage-item" style="background-color: #F6D4FE">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_900,w_800/v1658181066/Soft%20Refresh/GUTS/GUTS-1622_t4ktnx.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals and website for GUTS, a Glasgow based club night with a focus on transparency.</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/underground-radio-directory" class="border-me homepage-item" style="background-color: #E69F8B">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634897778/Soft%20Refresh/URD/URD-homepage-pichi_p7qgqn.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Website showcasing the best in world wide wadio</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/cultivate-rave-revival" class="border-me homepage-item" style="background-color: #DB400F">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634921332/Soft%20Refresh/Cultivate%20Rave%20Revival/2H6A6577-pichi_ov07e8.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals exploring rave archives</h4>
          </div>
        </nuxt-link>
      </article>
      <!-- <article>
        <nuxt-link to="/work/paradigms" class="border-me homepage-item" style="background-color: #8A9EBC">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1641224434/Soft%20Refresh/Paradigms/2H6A7052-pichi_klbqme.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Website and hand-stitched publication for a contemporary art exhibition</h4>
          </div>
        </nuxt-link>
      </article> -->
      <article>
        <nuxt-link to="/work/aerial-community-radio" class="border-me homepage-item" style="background-color: #9e96c4">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915652/Soft%20Refresh/aerial%20community%20radio/Screenshot_2020-10-30_at_00.28.38-pichi_y2vwxp.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Real community radio hours</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/opening-the-daw" class="border-me homepage-item" style="background-color: #87837e">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634916794/Soft%20Refresh/opening%20the%20DAW/opening_the_daw-1284-pichi_wpvcxu.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Music production workshops</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/soft-eis-presse" class="border-me homepage-item" style="background-color: #E1BAD1">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1643577887/Soft%20Refresh/soft%20eis/Screenshot_2022-01-30_at_21.16.44-min_bpmvlc.png"/>
          <div class="p-4">
            <h4 class="m-0">Website for a Berlin based magazine</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/swampnet" class="border-me homepage-item" style="background-color: #656F30">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_1600/v1641225539/Soft%20Refresh/SwampNET/SWAMPISLAND-41-pichi_xinhmp.jpg"/>
          <div class="p-4">
            <h4 class="m-0">What would you put on a small internet? (in a swamp)</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/come-in-peace" class="border-me homepage-item" style="background-color: #54A589">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1641219313/Soft%20Refresh/Come%20In%20Peace/2H6A6270-pichi_vdlz5r.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals for Interplanatary Criminal</h4>
          </div>
        </nuxt-link>
      </article>
      <!-- <article>
        <nuxt-link to="work/A-C-01001001-D" class="border-me homepage-item" style="background-color: #E3D9CE">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1644370635/Soft%20Refresh/acid/ACID-HOUSE-SMILEY_-_May_8th_2020_at_11.13.28_PM_tvmc1x.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals for Optimo. A C 01001001 D!</h4>
          </div>
        </nuxt-link>
      </article> -->
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
    // const projects = await $content("projects").fetch();
    // const logs = await $content("logs").sortBy('date', 'desc').fetch();
    // return {
    //   projects,
    //   logs
    // };
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
    },
  }
})
</script>

<style scoped>
/* .seriously-selected-grid {
  grid-template-columns: repeat(9, minmax(1fr));
  display: grid;
  gap: 2rem;
  grid-auto-rows: 1fr;
  align-items: center;
}

article:nth-child(1) {
    grid-row: 1 / span 3;
    grid-column: 2 / span 2;
}

article:nth-child(2) {
    grid-row: 2 / span 3;
    grid-column: 4 / span 2;
}

article:nth-child(3) {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
}

article:nth-child(4) {
    grid-row: 5 / span 3;
    grid-column: 4 / span 3;
}

article:nth-child(5) {
    grid-row: 6 / span 3;
    grid-column: 1 / span 3;
}

article:nth-child(6) {
    grid-row: 9 / span 3;
    grid-column: 2 / span 3;
}

article:nth-child(7) {
    grid-row: 12 / span 3;
    grid-column: 4 / span 3;
}

article:nth-child(8) {
    grid-row: 12 / span 3;
    grid-column: 1 / span 2;
}

article:nth-child(9) {
    grid-row: 14 / span 3;
    grid-column: 3 / span 2;
}

#flower-1 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
}

#flower-2 {
    grid-row: 5 / span 1;
    grid-column: 3 / span 1;
}

#flower-3 {
    grid-row: 9 / span 1;
    grid-column: 6 / span 1;
} */

.homepage-item {
  display: block;
}

.lil-intro {
  transform: rotate(-3deg);
  background: conic-gradient(#CAB54E, #E69F8B, #DB400F, #8A9EBC, #87837e, #E1BAD1, #656F30, #54A589,#CAB54E);
  filter: blur(100px);
  z-index: -1;
}

.temp-gauge {
  height: 100%;
  position: absolute;
  width: 20px;
  top: 0px;
  right: -10px;
  border: ridge 5px;
  background: linear-gradient(#CAB54E, #E69F8B, #DB400F, #8A9EBC, #87837e, #E1BAD1, #656F30, #54A589,#CAB54E);
}

</style>