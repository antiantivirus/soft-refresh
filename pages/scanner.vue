<template>
  <main class="w-screen min-h-screen grid content-center justify-center">
    <div class="border-black border p-4 w-96 bg-white">
      <form>
        <input
          type="range"
          min="0"
          :max="options.length - 1"
          v-model="selector"
          class="w-full"
        />
      </form>
      <div>
        <!-- <nuxt-link
          v-if="options[selector].link"
          class="block"
          :to="options[selector].link"
          >{{ options[selector].label }}</nuxt-link
        >
        <p v-else>{{ options[selector].label }}</p> -->
      </div>
      <!-- <div class="flex justify-between">
        <button @click="lucky()" class="rounded-3xl border border-black">
          I am feeling lucky
        </button>
        <button class="rounded-3xl border border-black">View as list</button>
      </div> -->
    </div>

    <img
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 w-[50vw] rounded-3xl -z-10"
      height="414"
      width="273"
      src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_800/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg"
      alt="Jack Murray-Brown"
      :style="`filter: blur(${selector * 2}px)`"
    />
  </main>
</template>

<script>
export default {
  layout: "new",
  data() {
    return {
      selector: 0,
      options: [
        {
          label: "hi",
          link: "/about"
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "a project"
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "current",
          link: ""
        },
        {
          label: "a labour of love",
          link: ""
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "white noise"
        },
        {
          label: "radio",
          link: ""
        },
        {
          label: "white noise"
        },
        {
          label: "links",
          link: ""
        }
      ]
    };
  },
  methods: {
    lucky() {
      this.selector = Math.floor(Math.random() * this.options.length);
    }
  }
};
</script>

<style></style>
