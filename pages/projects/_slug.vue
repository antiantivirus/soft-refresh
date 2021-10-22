<template>
  <div class="container">
      <div id="project-grid">
        <div>
            <h1>{{project.title}}</h1>
            {{project.date}}
            {{project.tags}}
            <nuxt-content :document="project" />
        </div>
        <div>

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