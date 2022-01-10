export const state = () => ({
  selectedProjects: [],
  selectedProjectIndex: 0
})

export const mutations = {
  addProject(state, project){
    state.selectedProjects.push(project)
  },
  removeProject(state, index){
    state.selectedProjects.splice(index,1)
  },
  nextProject(state){
    state.selectedProjectIndex += 1
  },
  previousProject(state){
    state.selectedProjectIndex -= 1
  }
}