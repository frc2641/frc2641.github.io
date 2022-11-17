<template>
  <v-app>
    <v-app-bar app color="secondary" style="z-index: 1000" class="elevation-24">
      <div
        class="d-flex align-center"
        style="cursor: pointer"
        @click="$router.push('/')"
      >
        <v-img
          alt="FIRST logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          width="50"
        />
        <v-toolbar-title class="text-h5 font-weight-light">
          FRC Team 2641
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn text large link to="/">Home</v-btn>
        <v-btn text large link to="/about">About</v-btn>
        <!-- <v-btn text large link to="/gallery">Gallery</v-btn> -->
        <v-btn text large link to="/sponsors">Sponsors</v-btn>
        <v-btn text large link to="/contact">Contact</v-btn>
        <v-btn text large href="https://frc2641.aidanliddy.com"
          >Login<v-icon right>mdi-arrow-right</v-icon></v-btn
        >
      </div>

      <v-btn v-else icon large @click="drawer = !drawer"
        ><v-icon>mdi-menu</v-icon></v-btn
      >
    </v-app-bar>

    <v-main style="height: calc(100vh - 96px); overflow: auto">
      <v-fade-transition hide-on-leave>
        <router-view class="elevation-24" style="z-index: 1" />
      </v-fade-transition>

      <v-footer sticky style="z-index: 0">
        <div class="text-center">
          <p class="pa-0 ma-0 overline" v-if="$vuetify.breakpoint.mdAndUp">
            &copy; 2022 Pittsburgh Central Catholic Robotics - Team 2641
          </p>
          <p class="pa-0 ma-0 overline" v-else>&copy; 2022 PCCR</p>
        </div>
      </v-footer>
    </v-main>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      style="z-index: 1001"
    >
      <v-toolbar color="grey darken-4"
        ><v-toolbar-title>Navigation</v-toolbar-title></v-toolbar
      >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/about">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/sponsors">
          <v-list-item-content>
            <v-list-item-title>Sponsors</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/contact">
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://app.team2641.com">
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
  watch: {
    "$route.path"() {
      // this.$vuetify.goTo(0, {
      //   duration: 300,
      //   offset: 0,
      //   easing: "easeInOutCubic",
      // });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
html,
body {
  overflow: hidden;
}
</style>