<template>
  <div>
    <v-row class="pa-0 ma-0" no-gutters style="background: #3a3017">
      <v-col class="pa-0 ma-0" cols="12" md="6">
        <v-img
          class="pa-0 ma-0 elevation-24"
          :min-height="mdAndUp ? 'calc(100vh - 64px)' : ''"
          src="@/assets/about.webp"
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
        <h2 class="text-h2 mb-5">About us</h2>
        <p class="transparent-subtitle mb-6">Learn more about our team.</p>

        <v-divider></v-divider>

        <p class="mt-6 mb-3">
          Founded in 2008, our team has grown to be successful over the years.
          Grounded in the principles of St. John Baptiste de La Salle, the
          patron Saint of Central Catholic High School, we strive to bring
          success throught hard work and determination.
        </p>
        <p class="mb-3">
          In addition to gaining valuable, real-world experience in mechanical
          engineering, electronics, and computer programming, our members become
          Men of Faith, Scholarship, and Service, the core values of our school.
        </p>
        <p class="mb-3">
          Guiding us along the way are professional volunteer mentors, school
          faculty and administration members, Pittsburgh Central Catholic
          Robotics alumni, and our parents.
        </p>
        <p class="mb-3">
          We rely on the generous donations from our sponsors. Please consider
          donating to our team.
        </p>
        <v-btn
          link
          to="/sponsors"
          size="large"
          class="mt-2 elevation-24"
          color="primary"
          >Our Sponsors</v-btn
        >
      </v-col>
    </v-row>

    <div class="text-center">
      <h3 class="font-weight-light text-h3 my-12">Our Team</h3>

      <v-container style="max-width: 900px">
        <v-row class="mb-4">
          <v-col cols="12" sm="6">
            <h5 class="text-h5 font-weight-bold text-center mb-4">MENTORS</h5>
            <p>Kevin Heid</p>
            <p>Joe Hudak, '13</p>
            <p>Aidan Liddy, '23</p>
            <p>Alisha Patel</p>
            <p>Christian Romano, '17</p>
            <p>Justin Tomko</p>
            <p>Alaina Vallus</p>
            <p>Cam Vallus, '17</p>
            <p>Ben Very, '23</p>
          </v-col>

          <v-col cols="12" sm="6">
            <h5 class="text-h5 font-weight-bold text-center mb-4">SENIORS</h5>
            <p>Brenden McCarthy, '25</p>
            <p>Eden Chung, '25</p>
            <p>Victor Ezaru, '25</p>
            <p>Zachary Moats, '25</p>
            <p>Jonathan Mox, '25</p>
            <p>Luke Nuzzo, '25</p>
          </v-col>

          <v-col cols="12" sm="4">
            <h5 class="text-h5 font-weight-bold text-center mb-4">JUNIORS</h5>
            <p>Aidan Flaherty, '26</p>
            <p>Regis Keller, '26</p>
            <p>Garrett King, '26</p>
            <p>Marco Petrucci, '26</p>
            <p>Joe Skundrich, '26</p>
            <p>Brayden Spencer, '26</p>
          </v-col>

          <v-col cols="12" sm="4">
            <h5 class="text-h5 font-weight-bold text-center mb-4">SOPHOMORES</h5>
            <p>Aidan Burger, '27</p>
            <p>Omar Good, '27</p>
            <p>Cole Henning, '27</p>
            <p>Alex Koes, '27</p>
          </v-col>

          <v-col cols="12" sm="4">
            <h5 class="text-h5 font-weight-bold text-center mb-4">FRESHMEN</h5>
            <p>Antonio Albert, '28</p>
            <p>Harrison Kreutel, '28</p>
            <p>Ibrahim Manush, '28</p>
            <p>Malcolm McGinley, '28</p>
            <p>Bart Perricone, '28</p>
            <p>Scottie Walsh, '28</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { mdAndUp } = useDisplay();

  useHead({
		title: "About | Pittsburgh Central Catholic Robotics",
	});
</script>