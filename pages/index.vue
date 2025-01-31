<template>
	<div>
    <v-row class="pa-0 ma-0" no-gutters :style="`height: ${mdAndUp ? 'calc(100dvh - 150px)' : ''}`">
      <v-col class="pa-0 ma-0" cols="12" style="height: 0%;">
        <v-parallax
          src="@/assets/cchs.webp"
          max-width="100dvw"
          cover
          :min-height="mdAndUp ? 'calc(100dvh - 150px)' : ''"
          class="elevation-24"
          style="z-index: 7"
        >
          <h2 class="text-h2 text-center" style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9); margin-top: 15dvh">Pittsburgh Central&nbsp;<br class="hidden-lg-and-up" />Catholic Robotics</h2>
          <h5 class="text-h5 text-center mt-6" style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9)" >Inspiring the&nbsp;<br class="hidden-lg-and-up" />Engineers of Tomorrow</h5>
          <div class="text-center mt-6">
            <v-btn
              width="185px"
              size="large"
              link
              to="/about"
              color="secondary"
              class="mx-2 mb-4 elevation-24"
              text="Learn More"
            ></v-btn>
            <br v-if="smAndDown" />
            <v-btn
              width="185px"
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
        </v-parallax>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0" no-gutters style="background: #0c1737; z-index: 4" :style="`max-height: ${lgAndUp ? '55dvh' : ''}; height: ${lgAndUp ? '100%' : ''}`">
      <v-col class="pa-0 ma-0" cols="12" md="6">
        <v-parallax
          class="pa-0 ma-0 elevation-24"
          src="@/assets/intro.webp"
          cover
          style="z-index: 6; height: 100%"
          :max-height="lgAndUp ? '55dvh' : ''"
        ></v-parallax>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="lgAndUp ? 'padding: 50px 80px' : 'padding: 24px'"
        style="flex-direction: column; justify-content: center; position: relative; z-index: 5"
        class="d-flex elevation-24"
      >
        <p class="text-h5 mb-4 font-weight-medium" style="z-index: 6">Team 2641 is a competitive FIRST Robotics Competition (FRC) team from Pittsburgh, PA.</p>
        <p class="text-h5 mb-4 font-weight-thin" style="z-index: 6">Our mission is to provide students with a strong environment to develop their skills in STEM fields and become the future leaders of their community.</p>
        <img src="@/assets/first.svg" style="z-index: 5; position: absolute; top: -5dvh; right: 3dvw; width: 30dvh" alt="">
        <div>
          <v-btn
            href="https://www.firstinspires.org/robotics/frc"
            target="_blank"
            size="large"
            class="mt-2 elevation-24"
            color="primary"
            text="About FRC"
            append-icon="mdi-arrow-top-right"
            width="200px"
          ></v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row class="pa-0 ma-0" no-gutters style="background: #423619; z-index: 4" :style="`max-height: ${lgAndUp ? '55dvh' : ''}; height: ${lgAndUp ? '100%' : ''}`">
      <v-col class="pa-0 ma-0 order-first order-md-last" cols="12" md="6">
        <v-parallax
          class="pa-0 ma-0 elevation-24"
          src="@/assets/school.webp"
          cover
          position="center bottom"
          style="z-index: 4; height: 100%"
          :max-height="lgAndUp ? '55dvh' : ''"
        ></v-parallax>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="lgAndUp ? 'padding: 50px 80px' : 'padding: 24px'"
        style="flex-direction: column; justify-content: center; position: relative; z-index: 3"
        class="d-flex elevation-24"
      >
        <p class="text-h5 mb-4 font-weight-medium" style="z-index: 4">We are from Central Catholic High School, a prestigious private, Roman Catholic, all-boys college preparatory high school in Oakland.</p>
        <p class="text-h5 mb-4 font-weight-thin" style="z-index: 4">We are near several higher education institutions, including the University of Pittsburgh and Carnegie Mellon.</p>
        <img src="@/assets/school_shield.svg" style="z-index: 3; position: absolute; top: -3dvh; left: 3dvw; width: 20dvh; opacity: 0.45;">
        <div>
          <v-btn
            href="https://www.centralcatholichs.com"
            target="_blank"
            size="large"
            class="mt-2 elevation-24"
            color="primary"
            text="About CCHS"
            append-icon="mdi-arrow-top-right"
            style="z-index: 4"
            width="200px"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
	</div>
</template>

<script setup lang="ts">
	const { smAndDown, mdAndUp, lgAndUp, xlAndUp } = useDisplay();

	useHead({
		title: "FRC Team 2641 | Pittsburgh Central Catholic Robotics",
	});
</script>