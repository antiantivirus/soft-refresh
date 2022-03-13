<template>
  <div class="">
    <div class="text-col mx-auto">
      <h1>Recent updates from my world</h1>
      <details class="border-me p-4 mb-4" v-for="log in logs" :key="log.slug" @mouseover="selectedlog = log" @mouseout="selectedlog = null">
        <summary>{{log.title}} - {{formatDate(log.date)}}</summary>
        <div v-for="(item, index) in log.media" :key="index">
        <div v-if="item.image">
          <Photo :image="item" />
        </div>
        <div v-else-if="item.gif">
          <GIF :gif="item" />
        </div>
        <div v-else-if="item.video">
          <Vid :video="item" />
        </div>
        <div v-else>
          <Embed :embed="item" />
        </div>
      </div>
      <nuxt-content :document="log" />
      </details>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return {
      logs: []
    }
  },
  async fetch() {
    this.logs = await this.$content("logs").sortBy('date', 'desc').fetch()
  },
  methods: {
    playShow(show){
      this.$store.commit('playShow', show)
    },
    formatDate(date){
			const options = { year: 'numeric', month: 'numeric' }
  		return new Date(date).toLocaleDateString('en-GB', options)
		}
  },
}

</script>