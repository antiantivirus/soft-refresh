<template>
  <div>
    <!-- {{links.contents}} -->
    <h1>Links to parts of the internet I find interesting.</h1>
    <ul>
      <li v-for="link in links.contents" >
        {{link}}
        {{link.source}}
        <a target="_blank" :href="link.source">{{link.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default ({
    data() {
      return {
        links: {}
      }
    },
    async fetch() {
      this.links = await fetch(
        'https://api.are.na/v2/channels/good-internet-pu8vwut0tmm/contents?page=1&amp;per=999'
      ).then(res => res.json())
    },
    mounted(){
      console.log(typeof this.links)
    }
})
</script>
