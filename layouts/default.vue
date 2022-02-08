<template>
  <div class="grid lg:grid-cols-12">
    <div class="lg:col-span-2 mb-12 lg:mb-0">
    <Header />
    </div>
    <main class="lg:p-24 lg:col-span-10" id="content">
      <Nuxt />
    </main>
    <!-- <Footer /> -->
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