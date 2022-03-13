<template>
  <div>
    <transition name="fade-up">
      <div :key="show" class="fixed left-0 w-full" style="bottom: -4px;" v-html="show">
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default ({
  computed: {
    show() {
      return this.$store.state.radioShow
    },
  }
})
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
