<template>
  <div>
    <div class="grid site-layout-grid gap-4">
      <Header />

      <main class="" id="content">
        <!-- <nuxt-link v-if="!home" to="/">← Back home</nuxt-link> -->
        <div class="lg:py-8 2xl:py-12">
          <Nuxt />
          <Radio />
          <Footer />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 'lg': '1024px', */
@media (min-width: 1024px) {
  #content {
    /* margin-right: 150px; */
  }
  .site-layout-grid {
    grid-template-columns: 200px 1fr;
  }
}

@media (min-width: 1536px) {
  .site-layout-grid {
    grid-template-columns: 280px 1fr;
  }
}
</style>
