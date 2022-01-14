<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="text-col">
      <!-- <h1>Selected work</h1> -->
      <div class="inline mr-4" v-for="filter in filters" :key="filter">
          <label class="font-large cursor-pointer">{{filter.name}}
          <input type="checkbox" v-model="filter.selected" @click="addFilter(filter.name)"/>
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
    <div class="hidden lg:block">
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
  async fetch() {
    this.projects = await this.$content("projects").where({ tags: {$containsAny:this.filtersSelected} } ).fetch()
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