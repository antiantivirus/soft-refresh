<template>
  <div class="">
    <section class="mb-12"  @mouseover="hoverUpdate('m','Murray')" @mouseout="hoverUpdate('m','M')" aria-label="Title and basic info">
      <div>
        <h1>{{project.title}}</h1>
        <h2 class="mb-4 max-w-prose">{{project.description}}</h2>
        <div>
          <ul class="inline p-0 project-tags">
              <li class="inline bg-lime-100 rounded-full px-4 mr-2" v-for="(tag, index) in project.tags" :key="index">
              {{tag}}
              </li>
          </ul>
          <span>{{project.display_project_date}}</span>
        </div>
        <a class="block mt-4 max-w-prose" v-if="project.link" :href="project.link" target="_blank">Visit {{project.title}}</a>
        <details class="border-me p-4 mt-4 mb-2 max-w-prose">
            <summary>Info</summary>
            <nuxt-content :document="project" />
        </details>
        <details v-if="project.technical" class="border-me p-4">
            <summary>Technical</summary>
            <nuxt-content :document="project" />
        </details>
      </div>
    </section>

    <section class="xl:col-span-7 2xl:col-span-8" @mouseover="hoverUpdate('b','Brown')" @mouseout="hoverUpdate('b','B')" aria-label="Project Media">
      <div v-for="(item, index) in project.media" :key="index">
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

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let project;
    try {
      project = await $content("work", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Project not found" });
    }
    const projects = await $content("work").fetch();

    return {
      project,
      projects
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