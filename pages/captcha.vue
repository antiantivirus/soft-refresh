<template>
    <div>
        {{selectedProjects}}
        <button @click="opened = true">Who are you?</button>
        <div class="grid grid-cols-2" v-if="opened == true">
            <button style="height: 50px; width: 50px; background: red;" @click="addProject(project)" v-for="project in projects" :key="project.id">
            </button>
        </div>
    </div>
</template>

<script>

export default({
   data(){
       return {
           opened: false,
           selectedProjects: [],
           projects: [

           ]
       }
   },
   methods: {
       addProject(project){
           //check if project is already selected
           //if not add to list
           //if it is remove from list
           const index = this.selectedProjects.indexOf(project)
           if (index == -1){
            this.selectedProjects.push(project)
           } else {
            this.selectedProjects.splice(index,1)
           }
       }
   },
    async asyncData({ $content }) {
    const projects = await $content("projects").fetch();
    return {
      projects,
    };
  },
})
</script>
