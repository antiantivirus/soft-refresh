<template>
  <div class="max-w-4xl">
    <h1 class="mb-4">A selection of links to parts of the internet I find interesting.</h1>
    <!-- {{links.contents}} -->
    <iframe style="border:none;" width="100%" height="590" src="https://www.are.na/jack-murray-brown/good-internet-pu8vwut0tmm/embed" title="Gemma Copeland’s Are.na channel “Internet Explorers”"></iframe>

  </div>
</template>

<script>

export default ({
    data() {
      return {
        links: {}
      }
    },
    // async fetch() {
    //   this.links = await fetch(
    //     'https://api.are.na/v2/channels/good-internet-pu8vwut0tmm/contents?page=1&amp;per=999'
    //   ).then(res => res.json())
    // },
    mounted(){
      console.log(typeof this.links)
    }
})
</script>
