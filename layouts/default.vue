<template>
  <div>
    <div class="grid lg:grid-cols-12 gap-4" >
      <div class="lg:col-span-2 mb-12 lg:mb-0">
      <Header />
      </div>
      <main class="lg:px-12 lg:py-12 lg:col-span-10" id="content">
        <!-- <nuxt-link v-if="!home" to="/">← Back home</nuxt-link> -->
        <div class="lg:py-12">
          <Nuxt />
          <Radio />
        </div>
      </main>
      <!-- <Footer /> -->
    </div>
  </div>
</template>



<style scoped>


/* 'lg': '1024px', */
@media (min-width: 1024px) {
  #content {
    /* margin-right: 150px; */
  }
}

</style>