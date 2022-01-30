<template>
  <div>
    <div v-for="log in logsProp" :key="log.title" class="mb-12">
      <h4>{{log.title}}</h4>
      <div v-for="(item, index) in log.media" :key="index">
        <div v-if="item.image">
          <Photo :image="item"></Photo>
        </div>
        <div v-else>
          <Vid :video="item"></Vid>
        </div>
      </div>
      <nuxt-content :document="log" />
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
