<template>
  <div>
    <v-img
      src="@/assets/cchs.jpg"
      max-width="100vw"
      :height="
        $vuetify.breakpoint.mdAndUp
          ? 'calc(100vh - 108px)'
          : 'calc(100vh - 100px)'
      "
    >
      <h2
        class="text-h2 text-center"
        style="text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9); margin-top: 150px"
      >
        Pittsburgh Central Catholic Robotics
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
          large
          link
          to="/about"
          color="secondary"
          class="mx-2 mb-4 elevation-24"
          >Learn More</v-btn
        >
        <br v-if="$vuetify.breakpoint.smAndDown" />
        <v-btn
          width="175px"
          large
          link
          to="/sponsors"
          color="primary"
          class="mx-2 elevation-24"
          :class="{
            'mt-n4': $vuetify.breakpoint.mdAndUp,
            'mt-1': $vuetify.breakpoint.smAndDown,
          }"
          >Sponsor Us</v-btn
        >
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>