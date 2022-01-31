<template>
  <div>
    <div id="captcha-image">
      <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg" alt="Jack Murray-Brown"/>
      <input type="checkbox" :checked="captchaComplete" @click.prevent="captchaOpen = true" />
      <div id="captcha" v-show="captchaOpen">
        <div class="grid grid-col-3">
          <button v-for="project in projects" :key="project.slug" @click="selectProject(project)">
            <img :src="project.media[0].image" />
          </button>
        </div>
        <button @click="captchaComplete = true">Finished</button>
        {{selectedProjects}}
      </div>
    </div>

  </div>
</template>

<script>

export default ({
  data() {
    return {
      selectedProjects: {},
      captchaOpen: false,
      captchaComplete: false,
      projects: {}
    }
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return {
      projects,
    };
  },
  methods: {
    selectProject(project){
      this.selectedProjects.push(project)
    }
  }
})
</script>

