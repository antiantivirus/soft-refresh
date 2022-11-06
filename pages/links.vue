<template>
  <div class="max-w-4xl">
    <h1 class="mb-4">A selection of links to parts of the internet I find interesting.</h1>
    <!-- {{links.contents}} -->
    <iframe style="border:none;" width="100%" height="950" src="https://www.are.na/jack-murray-brown/good-internet-pu8vwut0tmm/embed" title="Gemma Copeland’s Are.na channel “Internet Explorers”"></iframe>

  </div>
</template>

<script>

export default ({
    head() {
      return {
        title: 'Links',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'A selection of links to parts of the internet I find interesting'
          }
        ]
      }
    },
})
</script>
