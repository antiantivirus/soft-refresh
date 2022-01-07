<template>
  <div class="grid grid-cols-2">
    <div class="text-col">
      <div class="inline mr-4" v-for="filter in filters" :key="filter">
          <label class="font-large cursor-pointer">{{filter.name}}
          <input type="checkbox" v-model="filter.selected" />
          </label>
      </div>
      <ul class="list-none m-0 p-0">
        <li v-for="project in projects" :key="project.slug" @mouseover="selectedProject = project" @mouseout="selectedProject = null">
          <nuxt-link  :to="`/projects/${project.slug}`">
            {{project.title}}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <p class="large" v-if="selectedProject">{{selectedProject.description}}</p>
      <img v-if="selectedProject" :src="selectedProject.media[0].image" />
    </div>
    <div>

    </div>
    <div class="">
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return {
      selectedProject: null,
      filters: {
        radio: {
          name: 'Radio',
          selected: false,
        },
        print: {
          name: 'Print',
          selected: false
        },
        web: {
          name: 'Web',
          selected: false
        },
        community: {
          name: 'Community',
          selected: false
        },
        art: {
          name: 'Art',
          selected: false
        }
      },
      selectedFilters: []
    }
  },
  methods: {
    filterProjects(){

    }
  },
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return {
      projects,
    };
  },
}

</script>