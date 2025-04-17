<template>
  <div>
    <h1 class="text-2xl mb-16">
      Hey Correspondence •ᴗ•
      <br /> Here is a list of projects I have worked on recently.
    </h1>

    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24 lg:mb-0 md:gap-x-6 md:gap-y-12 seriously-selected-grid">

      <article>
        <a href="https://refugeworldwide.com/" target="_blank" class="border-me homepage-item cursor-alias"
          style="background-color: #fd8d7e">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <div class="relative ">
            <img height="500" width="500"
              src="https://res.cloudinary.com/dvckadoiv/image/upload/v1684425448/Screenshot_2023-05-18_at_17.57.07_qdk8a7.png"
              alt="EX.644 Source Material: Scottish Music's Mythic Imaginary exchange cover" />
          </div>
          <div class="p-4">
            <h4 class="m-0">
              Web development, design and software systems consultancy for
              Refuge Worldwide, a community radio station based in Berlin.
            </h4>
          </div>
        </a>
      </article>
      <article>
        <a href="https://toolkitty.org/" target="_blank" class="border-me homepage-item cursor-alias"
          style="background-color: #C5E2ED">
          <div class="relative">
            <img height="500" width="500"
              src="https://res.cloudinary.com/dvckadoiv/image/upload/v1744626836/Screenshot_2025-04-14_at_12.30.31-pichi_tl2tu4.jpg"
              alt="" />
          </div>
          <div class="p-4">
            <h4 class="m-0">
              Front-end developer for Toolkitty, a P2P coordination app for collectives, organisers and venues.
            </h4>
          </div>
        </a>
      </article>
      <article>
        <a href="https://reader.futureartecosystems.org/briefing/fae4" target="_blank"
          class="border-me homepage-item cursor-alias" style="background-color: #E3D6F4">
          <div class="relative ">
            <img height="500" width="500"
              src="https://res.cloudinary.com/dvckadoiv/image/upload/v1744623915/fae4_lg3ryn.jpg" alt="" />
          </div>
          <div class="p-4">
            <h4 class="m-0">
              Web development for Serpentine Galleries - Future Art Ecosystems 4: Art x Public AI
            </h4>
          </div>
        </a>
      </article>
      <article>
        <a href="https://metagov.org/" target="_blank" class="border-me homepage-item cursor-alias"
          style="background-color: #99B6BA">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <div class="relative ">
            <img height="500" width="500"
              src="https://res.cloudinary.com/dvckadoiv/image/upload/v1692015449/metagov_logo_jrm89m.png"
              alt="EX.644 Source Material: Scottish Music's Mythic Imaginary exchange cover" />
          </div>
          <div class="p-4">
            <h4 class="m-0">
              Web development for Metagov.org, a laboratory for digital governance.
            </h4>
          </div>
        </a>
      </article>

      <article>
        <nuxt-link to="/work/fruitful-fm" class="border-me homepage-item" style="background-color: #91CC8F">
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img width="380" height="342"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_540,w_600/v1667053155/Soft%20Refresh/fruitful/TERRA_INCOGNITA-5937_vcyz6z.jpg"
            alt="A blurred plum is held infront of a greenhouse with vinyl reading Fruitful.FM visible" />
          <div class="p-4">
            <h4 class="m-0">
              A radio station housed inside a greenhouse. Flipping the
              traditional ‘dead’ and hidden space of a radio studio on its head.
            </h4>
          </div>
        </nuxt-link>
      </article>
    </div>

    <p class="my-12">. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.</p>
    <p class="mb-4 max-w-prose">
      Jack Murray-Brown is a developer, artist and radio enthusiast, focussed on
      accessibility, sustainability and community engaged projects. He is
      currently based in Berlin.
    </p>

    <p class="mb-4 max-w-prose">He has been working as a developer for the last 6 years since graduating in Computing
      Science from the University of Aberdeen. He has experience working with React, Next.js, Vue, Nuxt, Svelte,
      Sveltekit, HTMX,
      Alpine.js, Contentful CMS, Sanity CMS, Wordpress, Kirby CMS, Directus CMS and Decap CMS.</p>
    <p class="my-12">. ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.</p>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Projects I have worked on recently"
    };
  }
};
</script>

<style scoped>
.homepage-item {
  display: block;
}
</style>
