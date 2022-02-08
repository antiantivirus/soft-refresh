<template>
  <div class="grid xl:grid-cols-12 gap-12">
    <section class="xl:col-span-4" @mouseover="hoverUpdate('m','Murray')" @mouseout="hoverUpdate('m','M')" aria-label="Title and basic info">
      <div>
        <h1>{{project.title}}</h1>
          <p>Date: {{project.display_project_date}}</p>
          <p class="inline">Tags:</p><ul class="inline p-0 project-tags">
            [ <li class="inline italic" v-for="(tag, index) in project.tags" :key="index">
            {{tag}}<span v-if="index+1 < project.tags.length">, </span>
            </li> ]
          </ul>
          <a v-if="project.link" :href="project.link" target="_blank">Visit {{project.title}}</a>
          <hr/>
        <details class="mb-6" open>
            <summary>Info</summary>
            <nuxt-content :document="project" />
            <hr/>
        </details>
        <details open>
            <summary>Technical</summary>
            <nuxt-content :document="project" />
            <hr/>
        </details>
      </div>
    </section>

    <section class="xl:col-span-8" @mouseover="hoverUpdate('b','Brown')" @mouseout="hoverUpdate('b','B')" aria-label="Project Media">
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