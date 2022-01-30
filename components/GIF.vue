<template>
  <figure class="mb-10">
      <img
        :src="gif.gif"
      />
    <figcaption>{{gif.caption}}</figcaption>
  </figure>
</template>

<script>

export default {
  props: {
    gif: Object,
  }
}


</script>
