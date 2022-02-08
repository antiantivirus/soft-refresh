<template>
  <div class="max-w-screen-md mx-auto">
    <section class="md:col-span-7 lg:col-start-6" @mouseover="hoverUpdate('b','Brown')" @mouseout="hoverUpdate('b','B')" aria-label="Project Media">
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
    </section>

    <section class="lg:col-span-4" @mouseover="hoverUpdate('m','Murray')" @mouseout="hoverUpdate('m','M')" aria-label="Title and basic info">
      <div>
        <h1>{{log.title}}</h1>
        <!-- <p>Date: {{project.display_project_date}}</p> -->
        <nuxt-content :document="log" />
      </div>
    </section>



  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let log;
    try {
      log = await $content("logs", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Log not found" });
    }

    return {
      log,
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
};
</script>

<style>

#project-grid {
  max-width: 1800px;
}

</style>