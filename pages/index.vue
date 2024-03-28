<template>
  <div>
    <div class="relative h-full">
      <img
        width="444"
        height="314"
        class="lg:hidden max-w-md mx-auto block mb-32"
        src="~assets/images/JMB-mobile.svg"
        alt=""
      />
      <img
        width="1192"
        height="460"
        class="hidden lg:block xl:-mb-16 2xl:-mb-72 max-w-screen-xl mx-auto"
        src="~assets/images/JMB.svg"
        alt=""
      />
      <div
        class="mx-auto max-w-md -mt-12 lg:-mt-40  border-me p-4 mb-16 relative"
        style="transform: rotate(3deg);"
      >
        <h1 class="h1-index">Hi, I'm Jack and welcome to my website.</h1>
        <h2 class="h1-index mb-4">
          I'm a developer, artist and radio enthusiast, focussed on
          accessibility, sustainability and community engaged projects.
          Currently based in Berlin.
        </h2>
        <figure class="mb-0 relative">
          <img
            height="414"
            width="273"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_800/v1634915332/Soft%20Refresh/antivirus-pichi_kk6r4v.jpg"
            alt="Jack Murray-Brown"
          />
          <svg
            class="absolute top-2 right-2 fill-[#FEFDEC] p-2 -rotate-45"
            viewBox="0 0 100 100"
            width="100"
            height="100"
          >
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <!-- <text font-size="20">
              <textPath xlink:href="#circle">
                Currently Based in Berlin...
              </textPath>
            </text> -->
          </svg>
          <figcaption>Me just before a swim in the North Sea</figcaption>
        </figure>
        <!-- <div class="absolute top-0 left-0 w-full h-full lil-intro"></div> -->
        <!-- <div class="temp-gauge border-me"></div> -->
      </div>
      <!-- <img class="absolute right-0 bottom-0" src="~/assets/images/web-in-park.svg" style="max-width: 250px; bottom: -100px;"/> -->
    </div>
    <h3 class="italic mb-4">Seriously selected work!</h3>
    <div
      class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24 lg:mb-0 md:gap-x-6 md:gap-y-12 seriously-selected-grid"
    >
      <article>
        <a
          href="https://refugeworldwide.com/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #fd8d7e"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <div class="relative ">
            <span
              class="absolute top-4 left-4 border-black border p-2"
              style="background-color: #fd8d7e"
              >Current</span
            >
            <img
              height="500"
              width="500"
              src="https://res.cloudinary.com/dvckadoiv/image/upload/v1684425448/Screenshot_2023-05-18_at_17.57.07_qdk8a7.png"
              alt="EX.644 Source Material: Scottish Music's Mythic Imaginary exchange cover"
            />
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
        <a
          href="https://metagov.org/"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #99B6BA"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <div class="relative ">
            <span
              class="absolute top-4 left-4 border-black border p-2"
              style="background-color: #99B6BA"
              >Current</span
            >
            <img
              height="500"
              width="500"
              src="https://res.cloudinary.com/dvckadoiv/image/upload/v1692015449/metagov_logo_jrm89m.png"
              alt="EX.644 Source Material: Scottish Music's Mythic Imaginary exchange cover"
            />
          </div>
          <div class="p-4">
            <h4 class="m-0">
              Web development for Metagov.org, an interdisciplinary research
              collective and Policykit, an engine for building governance in
              online communities.
            </h4>
          </div>
        </a>
      </article>
      <article>
        <a
          href="https://ra.co/exchange/644"
          target="_blank"
          class="border-me homepage-item cursor-alias"
          style="background-color: #CFB687"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img
            height="500"
            width="500"
            src="https://imgproxy.ra.co/_/quality:66/w:1200/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3BvZGNhc3QvZXhjaGFuZ2UvZXg2NDQtY292ZXIuanBn"
            alt="EX.644 Source Material: Scottish Music's Mythic Imaginary exchange cover"
          />
          <div class="p-4">
            <h4 class="m-0">
              Delighted to be on RA Exchange 644 discussing folklore, radio and
              worldbuilding through the web and visuals.
            </h4>
          </div>
        </a>
      </article>
      <article>
        <nuxt-link
          to="/work/fruitful-fm"
          class="border-me homepage-item"
          style="background-color: #91CC8F"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img
            width="380"
            height="342"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_540,w_600/v1667053155/Soft%20Refresh/fruitful/TERRA_INCOGNITA-5937_vcyz6z.jpg"
            alt="A blurred plum is held infront of a greenhouse with vinyl reading Fruitful.FM visible"
          />
          <div class="p-4">
            <h4 class="m-0">
              A radio station housed inside a greenhouse. Flipping the
              traditional ‘dead’ and hidden space of a radio studio on its head.
            </h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link
          to="/work/norbergfestival-radio"
          class="border-me homepage-item"
          style="background-color: #8BD3E6"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img
            width="380"
            height="448"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_825,w_700/v1667053155/Soft%20Refresh/norbergfestival%20radio/R1-08651-0001_imxtor.jpg"
            alt="A person plays guitar inside a transparent bubble with sun light glistening down"
          />
          <div class="p-4">
            <h4 class="m-0">
              Co-ordinating the radio station at the 21st edition of
              Norbergfestival.
            </h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link
          to="/work/guts"
          class="border-me homepage-item"
          style="background-color: #F6D4FE"
        >
          <!-- <span style="position: absolute; font-size: 5rem; top: -10%; right: -10%;">🪵</span> -->
          <img
            width="380"
            height="428"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,h_675,w_600/v1658181066/Soft%20Refresh/GUTS/GUTS-1622_t4ktnx.jpg"
            alt="TV with 3D wobbly text reading GUTS is attached to a steel truss"
          />
          <div class="p-4">
            <h4 class="m-0">
              Visuals and website for GUTS, a Glasgow based club night with a
              focus on transparency.
            </h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link
          to="/work/freeform-radio-directory"
          class="border-me homepage-item"
          style="background-color: #E69F8B"
        >
          <div class="h-24 bg-black" />
          <img
            width="380"
            height="214"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/v1711644555/freeform-1-pichi-1_aepygs.jpg"
            alt="Website homepage for freeform radio director in mocked up browser with red shadow on pixelated image"
          />
          <div class="h-24 bg-black" />

          <div class="p-4">
            <h4 class="m-0">Website showcasing the best in world wide wadio</h4>
          </div>
        </nuxt-link>
      </article>
      <article>
        <nuxt-link
          width="380"
          height="253"
          to="/work/come-in-peace"
          class="border-me homepage-item"
          style="background-color: #54A589"
        >
          <img
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_600/v1641219313/Soft%20Refresh/Come%20In%20Peace/2H6A6270-pichi_vdlz5r.jpg"
            alt="CRT TV shows text Peace in a grafitti front in the dark"
          />
          <div class="p-4">
            <h4 class="m-0">Visuals for Interplanatary Criminal</h4>
          </div>
        </nuxt-link>
      </article>
      <!-- <article>
        <nuxt-link
          to="/work/cultivate-rave-revival"
          class="border-me homepage-item"
          style="background-color: #DB400F"
        >
          <img
            width="380"
            height="253"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_600/v1634921332/Soft%20Refresh/Cultivate%20Rave%20Revival/2H6A6577-pichi_ov07e8.jpg"
            alt="LED Panel showing red graffiti is attached to dimly lit scaffolding in the background"
          />
          <div class="p-4">
            <h4 class="m-0">Visuals exploring rave archives</h4>
          </div>
        </nuxt-link>
      </article> -->
      <!-- <article>
        <nuxt-link to="/work/paradigms" class="border-me homepage-item" style="background-color: #8A9EBC">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1641224434/Soft%20Refresh/Paradigms/2H6A7052-pichi_klbqme.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Website and hand-stitched publication for a contemporary art exhibition</h4>
          </div>
        </nuxt-link>
      </article> -->
      <article>
        <nuxt-link
          to="/work/aerial-community-radio"
          class="border-me homepage-item"
          style="background-color: #9e96c4"
        >
          <img
            width="380"
            height="217"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_600/v1634915652/Soft%20Refresh/aerial%20community%20radio/Screenshot_2020-10-30_at_00.28.38-pichi_y2vwxp.jpg"
            alt="Aerial website home - skewed elements and text sit ontop of an image of the north sea"
          />
          <div class="p-4">
            <h4 class="m-0">Real community radio hours</h4>
          </div>
        </nuxt-link>
      </article>
      <!-- <article>
        <nuxt-link
          to="/work/opening-the-daw"
          class="border-me homepage-item"
          style="background-color: #87837e"
        >
          <img
            width="380"
            height="253"
            src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_600/v1634916794/Soft%20Refresh/opening%20the%20DAW/opening_the_daw-1284-pichi_wpvcxu.jpg"
            alt="Several people sit on laptops on a table learning music production"
          />
          <div class="p-4">
            <h4 class="m-0">Music production workshops</h4>
          </div>
        </nuxt-link>
      </article> -->
      <!-- <article>
        <nuxt-link to="/work/soft-eis-presse" class="border-me homepage-item" style="background-color: #E1BAD1">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_600/v1643577887/Soft%20Refresh/soft%20eis/Screenshot_2022-01-30_at_21.16.44-min_bpmvlc.png" alt="SOFT EIS homepage - a magazine folds out to show text and images in front of a webcam from central berlin"/>
          <div class="p-4">
            <h4 class="m-0">Website for a Berlin based magazine</h4>
          </div>
        </nuxt-link>
      </article> -->
      <!-- <article>
        <nuxt-link to="/work/swampnet" class="border-me homepage-item" style="background-color: #656F30">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/c_fill,w_1600/v1641225539/Soft%20Refresh/SwampNET/SWAMPISLAND-41-pichi_xinhmp.jpg"/>
          <div class="p-4">
            <h4 class="m-0">What would you put on a small internet? (in a swamp)</h4>
          </div>
        </nuxt-link>
      </article> -->
      <!-- <article>
        <nuxt-link to="work/A-C-01001001-D" class="border-me homepage-item" style="background-color: #E3D9CE">
          <img src="https://res.cloudinary.com/dvckadoiv/image/upload/v1644370635/Soft%20Refresh/acid/ACID-HOUSE-SMILEY_-_May_8th_2020_at_11.13.28_PM_tvmc1x.jpg"/>
          <div class="p-4">
            <h4 class="m-0">Visuals for Optimo. A C 01001001 D!</h4>
          </div>
        </nuxt-link>
      </article> -->
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  head() {
    return {
      titleTemplate: "Jack Murray-Brown"
    };
  },
  methods: {
    hoverUpdate(item, value) {
      if (item == "j") {
        this.$store.commit("updateJ", value);
      } else if (item == "m") {
        this.$store.commit("updateM", value);
      } else {
        this.$store.commit("updateB", value);
      }
    }
  }
};
</script>

<style scoped>
/* .seriously-selected-grid {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
} */

/* 
article:nth-child(1) {
    grid-row: 1 / span 3;
    grid-column: 2 / span 2;
}

article:nth-child(2) {
    grid-row: 2 / span 3;
    grid-column: 4 / span 2;
}

article:nth-child(3) {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
}

article:nth-child(4) {
    grid-row: 5 / span 3;
    grid-column: 4 / span 3;
}

article:nth-child(5) {
    grid-row: 6 / span 3;
    grid-column: 1 / span 3;
}

article:nth-child(6) {
    grid-row: 9 / span 3;
    grid-column: 2 / span 3;
}

article:nth-child(7) {
    grid-row: 12 / span 3;
    grid-column: 4 / span 3;
}

article:nth-child(8) {
    grid-row: 12 / span 3;
    grid-column: 1 / span 2;
}

article:nth-child(9) {
    grid-row: 14 / span 3;
    grid-column: 3 / span 2;
}

#flower-1 {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
}

#flower-2 {
    grid-row: 5 / span 1;
    grid-column: 3 / span 1;
}

#flower-3 {
    grid-row: 9 / span 1;
    grid-column: 6 / span 1;
} */

.homepage-item {
  display: block;
}

.lil-intro {
  transform: rotate(-3deg);
  background: conic-gradient(
    #cab54e,
    #e69f8b,
    #db400f,
    #8a9ebc,
    #87837e,
    #e1bad1,
    #656f30,
    #54a589,
    #cab54e
  );
  filter: blur(100px);
  z-index: -1;
}

.temp-gauge {
  height: 100%;
  position: absolute;
  width: 20px;
  top: 0px;
  right: -10px;
  border: ridge 5px;
  background: linear-gradient(
    #cab54e,
    #e69f8b,
    #db400f,
    #8a9ebc,
    #87837e,
    #e1bad1,
    #656f30,
    #54a589,
    #cab54e
  );
}
</style>
