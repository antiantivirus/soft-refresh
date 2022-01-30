<template>
  <div class="the-grid contents-grid">
    <section @mouseover="hoverUpdate('j','Jack')" @mouseout="hoverUpdate('j','J')" aria-label="Title and basic info">
      <div>
        <h1>{{project.title}}</h1>
        <p>Date: {{project.display_project_date}}</p>
        <p class="inline">Tags:</p><ul class="inline p-0 project-tags">
          [ <li class="inline italic" v-for="(tag, index) in project.tags" :key="index">
          {{tag}}<span v-if="index+1 < project.tags.length">, </span>
          </li> ]
        </ul>
        <br>
        <br>
        <a v-if="project.link" :href="project.link" target="_blank">Visit {{project.title}}</a>
      </div>
    </section>

    <section @mouseover="hoverUpdate('m', 'Murray')" @mouseout="hoverUpdate('m','M')" aria-label="Project Description">
      <div>
        <nuxt-content :document="project" />
      </div>
    </section>

    <section @mouseover="hoverUpdate('b','Brown')" @mouseout="hoverUpdate('b','B')" aria-label="Project Media">
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