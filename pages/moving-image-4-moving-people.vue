<template>
  <div>
    <div class="relative h-full">
      <div class="mx-auto max-w-md -mt-12 border-me p-4 mb-16 relative" style="transform: rotate(-2deg);">
        <h1>Hi, I'm Jack and I make <i>moving image for moving people.</i> Visuals for club environments.</h1>
        <h2>I've worked across projectors, CRT TVs, flat screen and LED panels to create immersive experiences for the fluid club space.</h2>
        <figure class="mb-6">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_1600/v1658181075/Soft%20Refresh/GUTS/GUTS-1875_m0fwok.jpg" alt="Jack Murray-Brown"/>
          <figcaption>Visuals for GUTS party in Glasgow</figcaption>
        </figure>
        <!-- <div class="absolute top-0 left-0 w-full h-full lil-intro"></div> -->
        <!-- <div class="temp-gauge border-me"></div> -->
      </div> 
      <!-- <img class="absolute right-0 bottom-0" src="~/assets/images/web-in-park.svg" style="max-width: 250px; bottom: -100px;"/> -->
    </div>
    <h3 class="italic">A selection of visual specific work</h3>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-24 lg:mb-0 md:gap-6 seriously-selected-grid">
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
        <nuxt-link to="/work/cultivate-rave-revival" class="border-me homepage-item" style="background-color: #DB400F">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634921332/Soft%20Refresh/Cultivate%20Rave%20Revival/2H6A6577-pichi_ov07e8.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals exploring rave archives</h4>
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
      <article>
        <nuxt-link to="/work/hyperdome" class="border-me homepage-item" style="background-color: #ffdfbf">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1659100314/Soft%20Refresh/hyperdome/2H6A3882_buo7lz.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Your a long way from home...welcome to the Hyperdome</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/there-is-life-outside-these-walls" class="border-me homepage-item" style="background-color: #7588D4">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1659100080/Soft%20Refresh/there%20is%20life%20outside%20these%20walls/2H6A5528_wdhnjy.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Two neural networks dreaming</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link to="/work/ac01001001d" class="border-me homepage-item" style="background-color: #E3D9CE">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1644370635/Soft%20Refresh/acid/ACID-HOUSE-SMILEY_-_May_8th_2020_at_11.13.28_PM_tvmc1x.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals for Optimo. A C 01001001 D!</h4>
          </div>
        </nuxt-link>
      </article>
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