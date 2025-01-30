<template>
	<div>
    <v-row class="pa-0 ma-0" no-gutters :style="`height: ${mdAndUp ? 'calc(100dvh - 150px)' : ''}`">
      <v-col class="pa-0 ma-0" cols="12" style="height: 0%;">
        <v-img
          src="@/assets/cchs.webp"
          max-width="100dvw"
          cover
          :min-height="mdAndUp ? 'calc(100dvh - 150px)' : ''"
          class="elevation-24"
          style="z-index: 7"
        >
          <h2 class="text-h2 text-center" style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9); margin-top: 15dvh">Pittsburgh Central&nbsp;<br class="hidden-lg-and-up" />Catholic Robotics</h2>
          <h5 class="text-h5 text-center mt-6" style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9)" >Inspiring the Engineers of Tomorrow</h5>
          <div class="text-center mt-6">
            <v-btn
              width="175px"
              size="large"
              link
              to="/about"
              color="secondary"
              class="mx-2 mb-4 elevation-24"
              text="Learn More"
            ></v-btn>
            <br v-if="smAndDown" />
            <v-btn
              width="175px"
              size="large"
              link
              to="/sponsors"
              color="primary"
              class="mx-2 elevation-24"
              :class="{
                'mt-n4': mdAndUp,
                'mt-1 mb-12': smAndDown,
              }"
              text="Sponsor Us"
            ></v-btn>
          </div>
        </v-img>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0" no-gutters style="background: #0c1737; z-index: 6">
      <v-col class="pa-0 ma-0" cols="12" md="6">
        <v-img
          class="pa-0 ma-0"
          :height="mdAndUp ? '40dvh' : ''"
          src="@/assets/intro.webp"
          cover
          style="z-index: 6"
          :style="`${mdAndUp ? '' : 'aspect-ratio: 1.5;'}`"
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="mdAndUp ? 'padding: 25px 150px 25px 150px' : 'padding: 24px'"
        style="flex-direction: column; justify-content: center; position: relative;"
        class="d-flex"
      >
        <p class="text-h5 mb-4" style="z-index: 6">Team 2641 is a FIRST Robotics Competition (FRC) team from Pittsburgh, PA.</p>
        <p class="text-h5 mb-4 font-weight-thin" style="z-index: 6">Our mission is to provide students with a competitive environment to develop their skills in STEM and become leaders in their community.</p>
        <img src="@/assets/first.svg" style="z-index: 5; position: absolute; top: -5dvh; right: 3dvw; width: 30dvh" alt="">
        <div>
          <v-btn
            href="https://www.firstinspires.org/robotics/frc"
            target="_blank"
            size="large"
            class="my-2 elevation-24"
            color="primary"
            text="About FRC"
            append-icon="mdi-arrow-top-right"
          ></v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0" no-gutters style="background: #2e0707; z-index: 4">
      <v-col class="pa-0 ma-0 order-first order-md-last" cols="12" md="6">
        <v-img
          class="pa-0 ma-0"
          :height="mdAndUp ? '40dvh' : ''"
          src="@/assets/school.webp"
          cover
          position="center bottom"
          style="z-index: 4"
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="mdAndUp ? 'padding: 25px 150px 25px 150px' : 'padding: 24px'"
        style="flex-direction: column; justify-content: center; position: relative;"
        class="d-flex"
      >
        <p class="text-h5 mb-4" style="z-index: 4">Our students are from Central Catholic High School, a private, Roman Catholic, all-boys college preparatory school in the Oakland neighborhood of Pittsburgh.</p>
        <p class="text-h5 mb-4 font-weight-thin" style="z-index: 4">We are conveniently located near our partners, the University of Pittsburgh and Carnegie Mellon University.</p>
        <img src="@/assets/school_shield.webp" style="z-index: 3; position: absolute; top: -2dvh; left: 3dvw; width: 20dvh; opacity: 0.4" alt="">
        <div>
          <v-btn
            href="https://www.centralcatholichs.com"
            target="_blank"
            size="large"
            class="my-2 elevation-24"
            color="secondary"
            text="About CCHS"
            append-icon="mdi-arrow-top-right"
            style="z-index: 4"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
	</div>
</template>

<script setup lang="ts">
	const { smAndDown, mdAndUp } = useDisplay();

	useHead({
		title: "FRC Team 2641 | Pittsburgh Central Catholic Robotics",
	});
</script>