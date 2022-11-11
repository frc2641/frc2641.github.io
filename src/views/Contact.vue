<template>
  <v-row no-gutters>
    <v-col cols="12" md="6">
      <v-img
        class="pa-0 ma-0 elevation-24"
        :max-height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 108px)' : ''"
        src="@/assets/contact.jpg"
        position="center bottom"
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
      <h2 class="text-h2 mb-5">Contact us</h2>
      <p class="grey--text mb-6">
        Questions? Comments? Sponsorships? Let us know.
      </p>

      <v-divider></v-divider>

      <v-row class="pa-0 mt-6">
        <v-col cols="6">
          <v-text-field
            v-model="data.first"
            solo
            hide-details
            label="First name"
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            v-model="data.last"
            solo
            hide-details
            label="Last name"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="pa-0 mt-4">
        <v-col cols="6">
          <v-text-field
            solo
            hide-details
            class="mb-7"
            label="Phone"
            v-model="data.phone"
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            solo
            hide-details
            class="mb-7"
            label="Email"
            v-model="data.email"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        solo
        hide-details
        class="mb-7"
        label="Subject"
        v-model="data.subject"
      ></v-text-field>

      <v-textarea
        solo
        hide-details
        label="Message"
        v-model="data.message"
      ></v-textarea>

      <section v-if="$vuetify.breakpoint.mdAndUp">
        <div class="d-flex mt-7">
          <v-btn href="mailto:cchsteam2641@gmail.com" icon x-large color="grey"
            ><v-icon>mdi-email</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://www.instagram.com/frc2641"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://www.facebook.com/Team2641Pccr"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://twitter.com/FRC2641"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-twitter</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://github.com/CentralCatholic2641"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-github</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            style="width: 125px"
            class="elevation-24"
            @click="send()"
            large
            color="primary"
            >Send<v-icon class="ml-3" size="24">mdi-send</v-icon></v-btn
          >
        </div>

        <div class="ml-3 mt-5">
          <p class="grey--text text--lighten-1">
            Central Catholic High School<br />
            4720 Fifth Ave,<br />
            Pittsburgh, PA 15213
          </p>
        </div>
      </section>

      <section v-else>
        <div class="text-center mt-7">
          <v-btn
            style="width: 125px"
            class="elevation-24"
            @click="send()"
            large
            color="primary"
            >Send<v-icon class="ml-3" size="24">mdi-send</v-icon></v-btn
          >
        </div>

        <div class="text-center mt-7">
          <v-btn href="mailto:cchsteam2641@gmail.com" icon x-large color="grey"
            ><v-icon>mdi-email</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://www.instagram.com/frc2641"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-instagram</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://www.facebook.com/Team2641Pccr"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://twitter.com/FRC2641"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-twitter</v-icon></v-btn
          >
          <v-btn
            target="_blank"
            href="https://github.com/CentralCatholic2641"
            icon
            x-large
            color="grey"
            ><v-icon>mdi-github</v-icon></v-btn
          >
        </div>

        <div class="text-center mt-7">
          <p class="grey--text text--lighten-1">
            Central Catholic High School<br />
            4720 Fifth Ave,<br />
            Pittsburgh, PA 15213
          </p>
        </div>
      </section>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    send() {},
  },
};
</script>