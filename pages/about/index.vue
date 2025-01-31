<template>
  <div>
    <v-row class="pa-0 ma-0" no-gutters style="background: #0c1737">
      <v-col class="pa-0 ma-0 elevation-24" cols="12" md="6" style="z-index: 7">
        <v-parallax
          class="pa-0 ma-0"
          :min-height="mdAndUp ? 'calc(100dvh - 150px)' : ''"
          style="height: 100%"
          src="@/assets/about.webp"
          cover
        ></v-parallax>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="lgAndUp ? 'padding: 90px' : 'padding: 24px'"
        class="elevation-24"
        style="z-index: 6"
      >
        <h2 class="text-h2 mb-5">About us</h2>
        <p class="transparent-subtitle mb-6">Learn more about our team.</p>

        <v-divider></v-divider>

        <p class="mt-6 mb-3">
          Founded in 2008, our team has grown to be successful over the years.
          Grounded in the principles of St. John Baptiste de La Salle, the
          patron Saint of Central Catholic High School, we strive to bring
          success through hard work and determination.
        </p>
        <p class="mb-3">
          In addition to gaining valuable, real-world experience in mechanical
          engineering, electronics design, and computer programming, our students
          become Men of Faith, Scholarship, and Service, the core values of our
          school.
        </p>
        <p class="mb-3">
          Guiding us along the way are professional volunteer mentors, school
          faculty and administration, Pittsburgh Central Catholic Robotics
          alumni, and our parents.
        </p>
        <p class="mb-3">
          We rely on the generous donations from our sponsors. Please consider
          donating to our team and supporting our mission.
        </p>
        <div :class="{ 'd-flex': mdAndUp }">
          <v-btn
            link
            to="/sponsors"
            size="large"
            class="mt-2 mb-4 mr-4 elevation-24"
            color="primary"
            text="Our Sponsors"
            width="200px"
          ></v-btn>
          <v-btn
            href="https://www.centralcatholichs.com"
            target="_blank"
            size="large"
            class="mt-2 elevation-24"
            color="secondary"
            text="Our School"
            append-icon="mdi-arrow-top-right"
            width="200px"
          ></v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters class="text-center">
      <v-col cols="12" md="6" style="background: #423619; z-index: 5" class="elevation-24 pa-12">
        <h3 class="text-h3 font-weight-light mb-4">Mentors</h3>
        <p class="mb-5">Our experienced mentors share their knowledge to guide students.</p>
        <v-btn
          link
          to="/about/mentors"
          size="large"
          color="primary"
          elevation="24"
          text="See More"
          width="175px"
        ></v-btn>
      </v-col>

      <v-col cols="12" md="6" style="background: #2e0707; z-index: 5" class="elevation-24 pa-12">
        <h3 class="text-h3 font-weight-light mb-4">Leaders</h3>
        <p class="mb-5">Strong FRC teams are 100% student-run.</p>
        <v-btn
          link
          to="/about/leadership"
          size="large"
          color="secondary"
          elevation="24"
          text="See More"
          width="175px"
        ></v-btn>
      </v-col>
    </v-row>

    <div class="text-center pa-12">
      <h3 class="font-weight-light text-h3 mb-4">Team</h3>
      <p class="mb-6">All of our team members for the 2025 season.</p>

      <v-container style="max-width: 900px" class="pb-0">
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <h5 class="text-h5 font-weight-bold text-center mb-4">SENIORS</h5>
            <p>Brenden McCarthy, '25</p>
            <p>Eden Chung, '25</p>
            <p>Victor Ezaru, '25</p>
            <p>Zachary Moats, '25</p>
            <p>Jonathan Mox, '25</p>
            <p>Luke Nuzzo, '25</p>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <h5 class="text-h5 font-weight-bold text-center mb-4">JUNIORS</h5>
            <p>Aidan Flaherty, '26</p>
            <p>Regis Keller, '26</p>
            <p>Garrett King, '26</p>
            <p>Marco Petrucci, '26</p>
            <p>Joe Skundrich, '26</p>
            <p>Brayden Spencer, '26</p>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <h5 class="text-h5 font-weight-bold text-center mb-4">SOPHOMORES</h5>
            <p>Aidan Burger, '27</p>
            <p>Omar Good, '27</p>
            <p>Cole Henning, '27</p>
            <p>Alex Koes, '27</p>
          </v-col>

          <v-col cols="12" sm="6" md="3">
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
  const { mdAndUp, lgAndUp } = useDisplay();

  useHead({
		title: "About | Pittsburgh Central Catholic Robotics",
	});
</script>