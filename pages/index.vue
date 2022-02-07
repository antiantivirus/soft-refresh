<template>
  <div>
    <h3>Seriously selected work!</h3>
    <div class="the-grid contents-grid gap-12">
      <div>
        <nuxt-link to="/logs/radiophrenia-to-eternity" class="homepage-item relative" style="background-color: #CAB54E">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1643552471/Soft%20Refresh/Logs/Artboard_1_1200x-100-pichi-1_bknlmn.jpg"/>
          <div class="p-4">
            <h4 class="m-0">I've just launched a new podcast exploring community radio!</h4>
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/work/underground-radio-directory" class="homepage-item" style="background-color: #E69F8B">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634897778/Soft%20Refresh/URD/URD-homepage-pichi_p7qgqn.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Website showcasing the best in world wide wadio</h4>
          </div>
        </nuxt-link>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #DB400F">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634921332/Soft%20Refresh/Cultivate%20Rave%20Revival/2H6A6577-pichi_ov07e8.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals exploring rave archives</h4>
          </div>
        </div>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #8A9EBC">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1641224434/Soft%20Refresh/Paradigms/2H6A7052-pichi_klbqme.jpg"/>
        <div class="p-4">
          <h4 class="m-0">Website and hand-stitched publication for a contemporary art exhibition</h4>
        </div>
        </div>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #9e96c4">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915652/Soft%20Refresh/aerial%20community%20radio/Screenshot_2020-10-30_at_00.28.38-pichi_y2vwxp.jpg"/>
        <div class="p-4">
          <h4 class="m-0">Real community radio hours</h4>
        </div>
        </div>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #87837e">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634916794/Soft%20Refresh/opening%20the%20DAW/opening_the_daw-1284-pichi_wpvcxu.jpg"/>
        <div class="p-4">
          <h4 class="m-0">Music production workshops</h4>
        </div>
        </div>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #E1BAD1">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1643577887/Soft%20Refresh/soft%20eis/Screenshot_2022-01-30_at_21.16.44-min_bpmvlc.png"/>
        <div class="p-4">
          <h4 class="m-0">Website for Berlin based magazine</h4>
        </div>
        </div>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #54A589">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1641219313/Soft%20Refresh/Come%20In%20Peace/2H6A6270-pichi_vdlz5r.jpg"/>
        <div class="p-4">
          <h4 class="m-0">Visuals for Interplanatart Criminal</h4>
        </div>
        </div>
      </div>
      <div>
        <div class="homepage-item" style="background-color: #656F30">
        <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1641225540/Soft%20Refresh/SwampNET/SWAMPISLAND-11-pichi_q2umxn.jpg"/>
        <div class="p-4">
          <h4 class="m-0">What would you put a small internet? (in a swamp)</h4>
        </div>
        </div>
      </div>
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
    const logs = await $content("logs").sortBy('date', 'desc').fetch();
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

<style scoped>
.homepage-item {
  border: 1px black solid;
  display: block;
}
</style>