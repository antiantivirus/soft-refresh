<template>
  <div>
    <div v-for="log in logsProp" :key="log.title" class="mb-6">
      <div v-for="(item, index) in log.media" :key="index">
        <div v-if="item.image">
          <Photo :image="item"></Photo>
        </div>
        <div v-else>
          <Vid :video="item"></Vid>
        </div>
      </div>
      <h4>{{log.title}}</h4>
      <div class="mb-6">
      <nuxt-content :document="log" />
      </div>
      <hr>
    </div>
  </div>
</template>

<script>

export default ({
  props:{
    logsProp: Object
  }
})
</script>

<style scoped>
.log {
  border-bottom: 1px solid black;
}
</style>
