<template>
  <div class="container">
      <div id="project-grid">
        <div class="sticky top-0">
            <h1>{{project.title}}</h1>
            <h2>{{project.description}}</h2>
            <p>{{project.display_project_date}}</p>
            <ul>
              <li class="inline italic" v-for="(tag, index) in project.tags" :key="index">
                {{tag}}
              </li>
            </ul>
            <a v-if="project.link" :href="project.link" target="_blank">Visit {{project.title}} &#xf08e;</a>
            <nuxt-content :document="project" />
        </div>
        <div>
          <div v-for="(item, index) in project.media" :key="index">
            <div v-if="item.image">
              <Photo :image="item"></Photo>
            </div>
            <div v-else>
              <Vid :video="item"></Vid>
            </div>
          </div>
        </div>
      </div>
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
};
</script>

<style>

#project-grid {
    grid-template-columns: 1fr 2fr;
    display: grid;
}

</style>