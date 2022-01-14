<template>
  <div>
    <div class="max-w-lg">
      <h1>Hi there, I'm Jack and welcome to my website.</h1>
      
      <h2>I'm a developer, artist, DJ and radio enthusiast currently based in Aberdeen.</h2>
      
      <p>Writing this in January sitting in the living room of my flat enjoying. Something about wild swimming.</p>

      <p class="h1">Over time my work has evolved to center around community. I enjoy working with process and find this just as important as the outcome. I make websites, do visuals for club environments and something** radio amongst other things.</p>

      <p>Thanks for visiting and I hope you enjoy having a look around.</p>
      <span class="opacity-50">{{selectedProjects}}</span>
    </div>
    <button id="captcha-image" class="cursor-pointer border-0 p-0 m-0" @click.prevent="captchaOpen = true" >
      <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg" alt="Jack Murray-Brown"/>
      <input type="checkbox" :checked="captchaComplete" class="cursor-pointer"/>
    </button>
    <div id="captcha" v-show="captchaOpen">
      <div class="relative">
        <div class="fixed top-0 bg-green w-full">
          <p class="text-center">Please select my work</p>
        </div>
        <div id="captcha-grid" class="grid grid-cols-2 lg:grid-cols-3 gap-1 gap-x-1 p-1 rel">
          <button class="captcha-item m-0 border-0 p-0 cursor-pointer relative" v-for="(project,index) in projects" :key="project.slug" @click="addProject(project, index)" >
            <img class="w-full h-full object-cover" :src="project.media[0].image" />
            <div v-show="project.selected" class="bg-green opacity-75 absolute w-full h-full top-0 left-0"></div>
          </button>
        </div>
        <button class="fixed bottom-0 w-full" @click="captchaComplete = true">Finished</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
  data(){
    return {
      captchaOpen: false,
      captchaComplete: false,
      projects: []
    }
  },
  computed:{
     selectedProjects(){
      return this.$store.state.selectedProjects
    }
  },
  methods: {
    addProject(project, index){
        //check if project is already selected
        //if not add to list
        //if it is remove from list
        const checkIndex = this.selectedProjects.indexOf(project.slug)
        if (checkIndex == -1){
          // this.selectedProjects.push(project.slug)
          this.$store.commit('addProject', project.slug)
          this.projects[index].selected = true
        } else {
          // this.selectedProjects.splice(index,1)
          this.$store.commit('removeProject', index)
          this.projects[index].selected = false
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

<style>
  #captcha-image {
    max-width: 400px;
    max-height: 400px;
    /* position: relative; */
  }

  #captcha-image input {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .captcha-item {
    width: 150px;
    height: 150px;
  }

  #captcha {
    width: max-content;
    position: fixed;
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    margin: 25px;
    top: 0;
    left: 0;
    background: grey;
    border: green solid 1px
  }

  #captcha-grid {
    max-height: 550px;
    overflow-y: auto;
  }

  /* 'lg': '1024px', */
  @media (min-width: 1024px) {
    #captcha-image {
      max-width: 400px;
      max-height: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }

    #captcha {
      width: max-content;
      position: absolute;
      top: 50%;
      left: calc(50% + 260px);
      margin-right: -50%;
      transform: translate(-50%, -50%);
      background: grey;
      border: green solid 1px
    }
  }
</style>
