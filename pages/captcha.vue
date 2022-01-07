<template>

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
