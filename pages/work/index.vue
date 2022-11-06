<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 max-w-6xl">
    <div class="text-col ">
      <div class="sticky top-4">
      <h1 class="mb-4">Selected work</h1>
      <!-- <div class="inline mr-4" v-for="filter in filters" :key="filter">
          <label class="font-large cursor-pointer">{{filter.name}}
          <input type="checkbox" v-model="filter.selected" @click="addFilter(filter.name)"/>
          </label>
      </div> -->
      <ul class="list-none m-0 p-0">
        <li v-for="project in projects" :key="project.slug" @mouseover="selectedProject = project" @mouseout="selectedProject = null" @focusin="selectedProject = project" @focusout="selectedProject = null">
          <nuxt-link :to="`/work/${project.slug}`">
            {{project.title}}
          </nuxt-link>
        </li>
      </ul>
      </div>
    </div>
    <div class="hidden lg:block">
      <div v-if="selectedProject">
        <ul class="inline p-0 project-tags mb-4" aria-label="Project tags">
          <li class="inline pill rounded-full px-4 mr-2" v-for="(tag, index) in selectedProject.tags" :key="index" v-if="index < 3">
          {{tag}}
          </li>
        </ul>
        <p class="large mt-4" >{{selectedProject.description}}</p>
        <img class="mt-4" :src="selectedProject.media[0].image" :alt="selectedProject.media[0].alt" />
      </div>
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
        web: {
          name: 'Website',
          selected: false
        },
        radio: {
          name: 'Radio',
          selected: false,
        },
        community: {
          name: 'Community',
          selected: false
        },
        print: {
          name: 'Print',
          selected: false
        },
        art: {
          name: 'Art',
          selected: false
        }
      },
      allSelected: true,
      filtersSelected: ['Website','Radio','Art','Community','Print'],
      projects: []
    }
  },
  head() {
    return {
      title: 'Selected Work'
    }
  },
  async fetch() {
    this.projects = await this.$content("work").fetch()
  },
  methods: {
    addFilter(option){
      // console.log(this.filtersSelected.indexOf(option))
      if (this.allSelected == true) {
          this.deselectedAll()
      }
      if (!this.isSelectedForFilter(option)) {
        this.filtersSelected.push(option)
        console.log(this.filtersSelected);
      } else {
        const index = this.filtersSelected.indexOf(option);
        if (index > -1) {
          this.filtersSelected.splice(index, 1);
        }
        //check if all filters have been unselected.
        console.log(this.filtersSelected)
        if (this.filtersSelected.length == 0) {
          this.selectAll()
        }
      }
      this.$fetch()
    },
    isSelectedForFilter(option){
      if (this.filtersSelected.indexOf(option) == -1 || this.allSelected == true) {
        return false
      } else {
        return true
      }
    },
    selectAll(){
      this.filtersSelected =  ['Website','Radio','Art','Community','Print'],
      this.allSelected = true
      this.$fetch()
    },
    deselectedAll(){
      this.filtersSelected = []
      this.allSelected = false
    },

  },

}

</script>