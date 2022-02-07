<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2">
    <Header />
    </div>
    <main class="p-24 col-span-10" id="content">
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