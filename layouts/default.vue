<template>
  <div>
    <Header />
    <main id="content">
      <Nuxt />
    </main>
    <Footer />
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