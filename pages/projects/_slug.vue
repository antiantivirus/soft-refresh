<template>
  <div class="container">
      <div id="project-grid" class="grid grid-cols-1 xl:grid-cols-2">
        <div class="text-col">
          <div class="sticky top-6 h-min">
            <h1>{{project.title}}</h1>
            <p>{{project.display_project_date}}</p>
            <ul>
              <li class="inline italic" v-for="(tag, index) in project.tags" :key="index">
                {{tag}}
              </li>
            </ul>
            <a v-if="project.link" :href="project.link" target="_blank">Visit {{project.title}} &#xf08e;</a>
            <nuxt-content :document="project" />
          </div>
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
  max-width: 1800px;
}

</style>