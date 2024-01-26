<template>
  <div>
    <h1 class="text-2xl mb-16">
      Hi Case, here is a list of websites I have worked on recently.
    </h1>
    <ul
      class="grid md:grid-cols gap-10 mb-24 seriously-selected-grid relative xl:h-[600px]"
    >
      <li class="xl:absolute top-0 left-0 xl:max-w-sm">
        <a
          href="https://refugeworldwide.com/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #fd8d7e"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->

          <div class="p-4">
            <h4 class="m-0">
              Refuge Worldwide - community radio station based in Berlin.
            </h4>
          </div>
        </a>
      </li>
      <li class="xl:absolute top-[20%] right-[25%] xl:max-w-sm">
        <a
          href="https://www.softeismagazine.com/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #F6C859"
        >
          <div class="p-4">
            <h4 class="m-0">
              SOFT EIS - independent print magazine published in Berlin.
            </h4>
          </div>
        </a>
      </li>
      <li class="xl:absolute bottom-0 right-0 xl:max-w-sm">
        <a
          href="https://guts.exposed/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #f6d4fe"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->

          <div class="p-4">
            <h4 class="m-0">
              GUTS - Glasgow based club night with a focus on transparency.
            </h4>
          </div>
        </a>
      </li>
      <li class="xl:absolute bottom-0 left-0 xl:max-w-sm">
        <a
          href="https://fruitfulfm.jackmurraybrown.com/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #91cc8f"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <div class="p-4">
            <h4 class="m-0">
              Fruitful.FM - radio station housed inside a greenhouse. Flipping
              the traditional ‘dead’ and hidden space of a radio studio on its
              head.
            </h4>
          </div>
        </a>
      </li>
      <li class="xl:absolute bottom-[35%] left-[20%] xl:max-w-sm">
        <a
          href="https://locked-world.boptheatre.co.uk/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #71c4ff"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <div class="p-4">
            <h4 class="m-0">
              Locked World - access-centred digital arts platform instigated by
              disabled artists.
            </h4>
          </div>
        </a>
      </li>
    </ul>
    <p class="mb-4 mt-24 max-w-prose">
      Jack Murray-Brown is a developer, artist and radio enthusiast, focussed on
      accessibility, sustainability and community engaged projects. He is
      Currently based in Berlin.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Websites I have worked on recently"
    };
  }
};
</script>

<style scoped>
.homepage-item {
  display: block;
}
</style>
