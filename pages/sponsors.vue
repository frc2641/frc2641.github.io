<template>
  <div>
    <v-row class="pa-0 ma-0" no-gutters style="background: #2e0707; z-index: 7">
      <v-col class="pa-0 ma-0" cols="12" md="6">
        <v-img
          class="pa-0 ma-0 elevation-24"
          :min-height="mdAndUp ? 'calc(100dvh - 64px)' : ''"
          src="@/assets/sponsor.webp"
          cover
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="
          mdAndUp
            ? 'padding: 75px 150px 25px 150px'
            : 'padding: 24px'
        "
        style="max-width: 892.5px"
      >
        <h2 class="text-h2 mb-5">Why sponsor us?</h2>
        <p class="transparent-subtitle mb-6">
          We rely on donations from generous people like you.
        </p>

        <v-divider></v-divider>

        <p class="mt-6 mb-3">
          As you know, all of this takes money. Will you help? FIRST likes to
          say their high school clubs are the “ultimate sport for the mind.”
        </p>
        <p class="mb-3">
          Under strict rules, set time frames, and limited resources, our team is
          challenged to secure funds (via sponsorships and fundraisers), design
          a team "brand", hone teamwork skills, and build and program an
          industrial-size robot to play a difficult field game against
          like-minded competitors.
        </p>
        <p class="mb-3">
          The hands-on program embodies Science, Technology, Engineering, and
          Mathematics (STEM) and promotes career pathways, as well as nurtures
          leadership, teamwork, public speaking/presenting, and
          interpersonal/business communications.
        </p>
        <p class="mb-3">
          Our program requires a serious amount of funding, most of which is
          provided by our generous donors.
        </p>
        <p class="mb-3">
          Your contribution will enable our members to develop their talents
          with confidence and helps us offer this unique high school experience
          as the perfect inspiration and training.
        </p>
        <v-btn
          link
          to="/contact"
          size="large"
          class="mt-2 elevation-24"
          color="primary"
          >Sponsor Us Today</v-btn
        >
      </v-col>
    </v-row>

    <!-- <v-container style="max-width: 1185px" class="pa-0">
      <div style="padding: 75px 0px" class="text-center">
        <h2 class="text-h2 ma-5">Our Sponsors</h2>
        <p class="transparent-subtitle mb-0 pb-0">for the 2025 Season</p>
      </div>
    </v-container>

    <div
      style="background: #1f2937; z-index: 10"
      class="text-center elevation-24"
    >
      <v-container>
        <h4 class="text-h4 font-weight-bold my-6 text-center">PLATINUM</h4>

        <v-row>
          <v-col cols="12" md="6" class="text-right">
            <div
              @click="open('https://www.oakrdg.com/')"
              style="cursor: pointer"
              class="mb-4"
            >
              <img
                style="max-width: 350px"
                src="@/assets/sponsors/oakridge.svg"
              />
            </div>

            <div
              @click="open('https://www.busybeaver.com/')"
              style="cursor: pointer"
              class="mb-4 mr-11"
            >
              <img
                style="max-width: 350px"
                src="@/assets/sponsors/busybeaver.png"
              />
            </div>
          </v-col>

          <v-col cols="12" md="6" class="text-left">
            <div
              @click="open('https://www.levinfurniture.com/')"
              style="cursor: pointer"
              class="mb-4 mt-4"
            >
              <img src="@/assets/sponsors/levin.png" />
            </div>

            <div
              @click="open('https://www.nvidia.com/')"
              style="cursor: pointer"
              class="mb-4 mt-12 pt-4"
            >
              <img
                style="max-width: 350px"
                src="@/assets/sponsors/nvidia.png"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div
      style="background: #41320a; z-index: 9"
      class="text-center elevation-24"
    >
      <v-container>
        <h4 class="text-h4 font-weight-bold my-6 text-center">GOLD</h4>
        <p>The Beeson Family</p>
      </v-container>
    </div>
    
    <div
      style="background: #0c1736; z-index: 8"
      class="text-center elevation-24"
    >
      <v-container>
        <h4 class="text-h4 font-weight-bold my-6 text-center">BLUE</h4>
        <p>Rocco and Regina Romano</p>
        <p>Gary and Sue Hudak</p>
      </v-container>
    </div> -->
  </div>
</template>

<script setup lang="ts">
  const { mdAndUp } = useDisplay();

  useHead({
		title: "Sponsors | Pittsburgh Central Catholic Robotics",
	});
</script>