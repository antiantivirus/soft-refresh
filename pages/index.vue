<template>
  <div class="container">
    <div>
      <img src="~/assets/images/web-in-park.svg" class="w-56" />
      <div v-for="project in projects" key="project.slug">
        <p>{{project.title}}</p>
      </div>
      {{projects}}
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return {
      projects,
    };
  }
};
</script>


