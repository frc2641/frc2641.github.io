<template>
  <div>
    <v-row class="pa-0 ma-0" no-gutters style="background: #3a3017">
      <v-col class="pa-0 ma-0" cols="12" md="6">
        <v-img
          class="pa-0 ma-0 elevation-24"
          :min-height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 64px)' : ''"
          src="@/assets/about.jpg"
        ></v-img>
      </v-col>

      <v-col
        cols="12"
        md="6"
        :style="
          $vuetify.breakpoint.mdAndUp
            ? 'padding: 75px 150px 25px 150px'
            : 'padding: 24px'
        "
        style="max-width: 892.5px"
      >
        <h2 class="text-h2 mb-5">About us</h2>
        <p class="grey--text mb-6">Learn more about our team.</p>

        <v-divider></v-divider>

        <p class="mt-6">
          Founded in 2008, our team has grown to be successful over the years.
          Grounded in the principles of St. John Baptiste de La Salle, the
          patron Saint of Central Catholic High School, we strive to bring
          success throught hard work and determination.
        </p>
        <p>
          In addition to gaining valuable, real-world experience in mechanical
          engineering, electronics, and computer programming, our members become
          Men of Faith, Scholarship, and Service, the core values of our school.
        </p>
        <p>
          Guiding us along the way are professional volunteer mentors; school
          faculty and administration members; Pittsburgh Central Catholic
          Robotics alumni; and our parents.
        </p>
        <p>
          We rely on the generous donations from our sponsors. Please consider
          donating to our team. Click the link below to learn more.
        </p>
        <v-btn
          link
          to="/sponsors"
          large
          class="mt-2 elevation-24"
          color="primary"
          >Our Sponsors</v-btn
        >
      </v-col>
    </v-row>

    <div style="background: #0c1736">
      <v-container style="max-width: 1185px" class="pa-0">
        <v-row no-gutters>
          <v-col order-md="2" order="1" class="pa-0 ma-0" cols="12" md="6">
            <v-img
              class="pa-0 ma-0 elevation-24"
              height="592.5px"
              src="@/assets/cromano.jpg"
            ></v-img>
          </v-col>

          <v-col order-md="1" order="2" class="pa-0 ma-0" cols="12" md="6">
            <v-card
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'margin: 125px 32px'
                  : 'margin: -64px 32px 32px 32px'
              "
              class="elevation-24"
            >
              <v-card-title>
                <h4 class="text-h4 font-weight-light">Christian Romano, '17</h4>
              </v-card-title>
              <v-card-subtitle class="mt-n2">Head Coach</v-card-subtitle>

              <v-divider></v-divider>

              <v-card-text>
                <p class="pa-0 ma-0">Bio</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div style="background: #2e0707">
      <v-container style="max-width: 1185px" class="pa-0">
        <v-row no-gutters>
          <v-col order-md="1" order="1" class="pa-0 ma-0" cols="12" md="6">
            <v-img
              class="pa-0 ma-0 elevation-24"
              height="592.5px"
              src="@/assets/kheid.jpg"
            ></v-img>
          </v-col>

          <v-col order-md="2" order="2" class="pa-0 ma-0" cols="12" md="6">
            <v-card
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'margin: 125px 32px'
                  : 'margin: -64px 32px 32px 32px'
              "
              class="elevation-24"
            >
              <v-card-title>
                <h4 class="text-h4 font-weight-light">Kevin Heid</h4>
              </v-card-title>
              <v-card-subtitle class="mt-n2">Head Moderator</v-card-subtitle>

              <v-divider></v-divider>

              <v-card-text>
                <p class="pa-0 ma-0">Bio</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div style="background: #0c1736">
      <v-container style="max-width: 1185px" class="pa-0">
        <v-row no-gutters>
          <v-col order-md="2" order="1" class="pa-0 ma-0" cols="12" md="6">
            <v-img
              class="pa-0 ma-0 elevation-24"
              height="592.5px"
              src="@/assets/aliddy.jpg"
            ></v-img>
          </v-col>

          <v-col order-md="1" order="2" class="pa-0 ma-0" cols="12" md="6">
            <v-card
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'margin: 125px 32px'
                  : 'margin: -64px 32px 32px 32px'
              "
              class="elevation-24"
            >
              <v-card-title>
                <h4 class="text-h4 font-weight-light">Aidan Liddy, '23</h4>
              </v-card-title>
              <v-card-subtitle class="mt-n2"
                >Team Captain, Code Team Lead</v-card-subtitle
              >

              <v-divider></v-divider>

              <v-card-text>
                <p class="pa-0 ma-0">Bio</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div style="background: #2e0707">
      <v-container style="max-width: 1185px" class="pa-0">
        <v-row no-gutters>
          <v-col order-md="1" order="1" class="pa-0 ma-0" cols="12" md="6">
            <v-img
              class="pa-0 ma-0 elevation-24"
              height="592.5px"
              src="@/assets/dservello.jpg"
            ></v-img>
          </v-col>

          <v-col order-md="2" order="2" class="pa-0 ma-0" cols="12" md="6">
            <v-card
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'margin: 125px 32px'
                  : 'margin: -64px 32px 32px 32px'
              "
              class="elevation-24"
            >
              <v-card-title>
                <h4 class="text-h4 font-weight-light">Dominic Servello, '23</h4>
              </v-card-title>
              <v-card-subtitle class="mt-n2"
                >Electronics Team Lead</v-card-subtitle
              >

              <v-divider></v-divider>

              <v-card-text>
                <p class="pa-0 ma-0">Bio</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div style="background: #0c1736">
      <v-container style="max-width: 1185px" class="pa-0">
        <v-row no-gutters>
          <v-col order-md="2" order="1" class="pa-0 ma-0" cols="12" md="6">
            <v-img
              class="pa-0 ma-0 elevation-24"
              height="592.5px"
              src="@/assets/zgeorge.jpg"
            ></v-img>
          </v-col>

          <v-col order-md="1" order="2" class="pa-0 ma-0" cols="12" md="6">
            <v-card
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'margin: 125px 32px'
                  : 'margin: -64px 32px 32px 32px'
              "
              class="elevation-24"
            >
              <v-card-title>
                <h4 class="text-h4 font-weight-light">Zack George, '23</h4>
              </v-card-title>
              <v-card-subtitle class="mt-n2"
                >Mechanical Team Lead</v-card-subtitle
              >

              <v-divider></v-divider>

              <v-card-text>
                <p class="pa-0 ma-0">Bio</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="text-center">
      <h3 class="font-weight-light text-h3 my-12">Other Members</h3>

      <v-container style="max-width: 1185px">
        <v-row class="mb-2">
          <v-col cols="12" md="4">
            <h5 class="text-h5 font-weight-bold text-center mb-6">
              MECHANICAL
            </h5>
            <p>Finn Thompson, '26</p>
            <p>Garrett King, '26</p>
            <p>John Beeson, '24</p>
            <p>Joshua Wade, '23</p>
            <p>Lukas Crowley, '26</p>
            <p>Luke Nuzzo, '25</p>
            <p>Nathaniel Ostin, '25</p>
            <p>Zach Moats, '26</p>
          </v-col>

          <v-col cols="12" md="4">
            <h5 class="text-h5 font-weight-bold text-center mb-6">
              ELECTRONICS
            </h5>
            <p>Andreas Urrea, '26</p>
            <p>Ben Very, '23</p>
            <p>Jonathan Mox, '25</p>
            <p>Joeseph Skundrich, '26</p>
            <p>Michael Christlieb, '24</p>
          </v-col>

          <v-col cols="12" md="4">
            <h5 class="text-h5 font-weight-bold text-center mb-6">CODE</h5>
            <p>Anthony Servello, '25</p>
            <p>Brayden Spencer, '26</p>
            <p>Ethan Small, '25</p>
            <p>Matthew Jordan, '24</p>
            <p>Nial Yavuzturk, '26</p>
            <p>Regis Keller, '26</p>
            <p>Sam Chung, '26</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>