<template>
	<div style="height: calc(100vh - 64px); overflow-y: auto">
    <v-img
      src="@/assets/cchs.webp"
      max-width="100vw"
			cover
			style="height: 100%"
    >
      <h2
        class="text-h2 text-center"
        style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9); margin-top: 150px"
      >
        Pittsburgh Central&nbsp;<br class="hidden-lg-and-up" />Catholic Robotics
      </h2>
      <h5
        class="text-h5 text-center mt-6"
        style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9)"
      >
        Inspiring the Engineers of Tomorrow
      </h5>
      <div class="text-center mt-6">
        <v-btn
          width="175px"
          size="large"
          link
          to="/about"
          color="secondary"
          class="mx-2 mb-4 elevation-24"
          >Learn More</v-btn
        >
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
            'mt-1': smAndDown,
          }"
          >Sponsor Us</v-btn
        >
      </div>
    </v-img>
	</div>
</template>

<script setup lang="ts">
	const { smAndDown, mdAndUp } = useDisplay();

	useHead({
		title: "FRC Team 2641 | Pittsburgh Central Catholic Robotics",
	});
</script>