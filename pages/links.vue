<template>
  <div class="text-col mx-auto">
    <h1>A selection of links to parts of the internet I find interesting.</h1>
    <!-- {{links.contents}} -->
    <ul class="list-none p-0">
      <li v-for="link in links.contents" v-if="link.source">
        <a target="_blank" :href="link.source.url">{{link.title}}</a>
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
