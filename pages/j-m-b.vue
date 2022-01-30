<template>
  <div>
    <div class="grid grid-cols-3 gap-6 pt-12 pb-12 bg-grey z-50" style="background-color: #bebebe;">
      <span class="initial">{{j}}</span>
      <span class="initial">{{m}}</span>
      <span class="initial">{{b}}</span>
    </div>
    <div class="grid lg:grid-cols-3 gap-6">
        <div class="pb-24" @mouseover="j = 'Jack'" @mouseout="j = 'J'">
            <h1>Hi, I'm Jack [Daresea] and welcome to my website.</h1>
            <h2>I'm a developer, artist, DJ and radio enthusiast currently based in Aberdeen.</h2>
            <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg" alt="Jack Murray-Brown"/>
            <a href="mailto:jack@antiantivirus.co.uk">Mail Me</a><br/>
            <a href="https://twitter.com/the1antivirus" _target="blank">Twitter</a><br/>
            <a href="https://www.are.na/jack-murray-brown" _target="blank">Are.na</a><br/>
            <details>
              <summary>About</summary>
            </details>
            <details>
              <summary>Technical</summary>
            </details>
            <details>
              <summary>Links</summary>
            </details>
        </div>
        <div class="pb-24" @mouseover="m = 'Murray'" @mouseout="m = 'M'">
            <h3>Recent work</h3>
            <ul class="list-none m-0 p-0">
              <li v-for="project in projects" :key="project.title">
                <nuxt-link  :to="`/projects/${project.slug}`">
                  {{project.title}}
                </nuxt-link>
              </li>
            </ul>
        </div>
        <div class="pb-24" @mouseover="b = 'Brown'" @mouseout="b = 'B'">
            <h3>Log</h3>
            <h1>{{projects[1].title}}</h1>
            <p>{{projects[1].display_project_date}}</p>
            <nuxt-content :document="projects[1]" />

            <div v-for="(item, index) in projects[1].media" :key="index">
              <div v-if="item.image">
                <Photo :image="item"></Photo>
              </div>
              <div v-else>
                <Vid :video="item"></Vid>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      j: 'J',
      m: 'M',
      b: 'B'
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
.initial {
  font-size: 8rem;
  text-align: center;
  display: block;
}

.mt-72 {
  margin-top: 18rem;
}
</style>