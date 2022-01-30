<template>
  <div>
    <h4>Here are some links to parts of the internet I find interesting, because you know the hyperlink is the backbone of the Internet [ahem ahem F U Insta]</h4>    
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
        'https://api.are.na/v2/channels/good-internet-pu8vwut0tmm/contents?page=3&amp;per=999'
      ).then(res => res.json())
    },
    mounted(){
      console.log(typeof this.links)
    }
})
</script>
