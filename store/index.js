export const state = () => ({
  selectedProjects: [],
  selectedProjectIndex: 0,
  j: 'J',
  m: 'M',
  b: 'B',
  radioShow: null
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
  },
  updateJ(state, value){
    state.j = value
  },
  updateM(state, value){
    state.m = value
  },
  updateB(state, value){
    state.b = value
  },
  playShow(state, show){
    state.radioShow = show
  }
}