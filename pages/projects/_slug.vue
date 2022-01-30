<template>
  <div class="the-grid contents-grid">
    <section @mouseover="hoverUpdate('j','Jack')" @mouseout="hoverUpdate('j','J')" aria-label="Title and basic info">
      <h1>{{project.title}}</h1>
      <p>{{project.display_project_date}}</p>
      <ul class="p-0">
        [<li class="inline italic" v-for="(tag, index) in project.tags" :key="index">
          {{tag}},
        </li>]
      </ul>
      <a v-if="project.link" :href="project.link" target="_blank">Visit {{project.title}} &#xf08e;</a>
    </section>

    <section @mouseover="hoverUpdate('m', 'Murray')" @mouseout="hoverUpdate('m','M')" aria-label="Project Description">
      <nuxt-content :document="project" />
    </section>

    <section @mouseover="hoverUpdate('b','Brown')" @mouseout="hoverUpdate('b','B')" aria-label="Project Media">
      <div v-for="(item, index) in project.media" :key="index">
        <div v-if="item.image">
          <Photo :image="item"></Photo>
        </div>
        <div v-else>
          <Vid :video="item"></Vid>
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
      project = await $content("projects", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Project not found" });
    }

    return {
      project,
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