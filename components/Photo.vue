<template>
  <figure class="mb-10">
    <client-only>
      <Photoswipe>
        <v-lazy-image
          :src="srcAdjustAspect"
          :src-placeholder="srcCloudinaryTiny"
          :srcset="responsiveSrcSet"
          sizes=" 
            (min-width: 1366px) 916px, 
            (min-width: 1536px) 1536px,
            100vw
          "
          v-pswp="srcAdjustAspect"
          :alt="image.alt"
        />
      </Photoswipe>
    </client-only>
    <!-- <figcaption v-if="image.caption">{{image.caption}}</figcaption> -->
  </figure>
</template>

<script>
export default {
  props: {
    image: Object
  },
  computed: {
    srcCloudinary() {
      if (this.image.image) {
        return this.image.image.replace(
          "https://res.cloudinary.com/dvckadoiv/image/upload/",
          ""
        );
      } else {
        return null;
      }
      // return 'hello'
    },
    srcCloudinaryTiny() {
      if (this.srcCloudinary) {
        return (
          "https://res.cloudinary.com/dvckadoiv/image/upload/" +
          "w_20/" +
          this.srcCloudinary
        );
      } else {
        return null;
      }
    },
    srcAdjustAspect() {
      if (this.srcCloudinary) {
        return (
          "https://res.cloudinary.com/dvckadoiv/image/upload/" +
          "c_fill,w_1600/" +
          this.srcCloudinary
        );
      } else {
        return null;
      }
    },
    responsiveSrcSet() {
      if (this.srcCloudinary) {
        var sizes = "";
        //small srcset
        sizes +=
          "https://res.cloudinary.com/dvckadoiv/image/upload/" +
          "c_fill,w_640/" +
          this.srcCloudinary +
          " 640px, ";
        //medium srcset
        sizes +=
          "https://res.cloudinary.com/dvckadoiv/image/upload/" +
          "c_fill,w_1536/" +
          this.srcCloudinary +
          " 1536px, ";
        //large srcset
        sizes +=
          "https://res.cloudinary.com/dvckadoiv/image/upload/" +
          "c_fill,w_2000/" +
          this.srcCloudinary +
          " 1280px, ";
        return sizes;
      }
    }
  }
};
</script>

<style>
.pswipe-gallery {
  height: 100%;
}

.pswp__img {
  max-height: none;
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 1s;
  width: 100%;
  height: auto;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
