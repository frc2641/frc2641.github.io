<template>
  <v-app>
    <v-app-bar app color="secondary">
      <div
        class="d-flex align-center"
        style="cursor: pointer"
        @click="$router.push('/')"
      >
        <v-img
          alt="FIRST logo"
          class="shrink mr-3"
          contain
          src="./assets/logo.png"
          width="60"
        />
        <v-toolbar-title class="text-h5 font-weight-light">
          FRC Team 2641
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn text large link to="/">Home</v-btn>
      <v-btn text large link to="/about">About</v-btn>
      <v-btn text large link to="/seasons">Seasons</v-btn>
      <v-btn text large link to="/gallery">Gallery</v-btn>
      <v-btn text large link to="/contact">Contact</v-btn>
      <v-btn text large href="https://frc2641.aidanliddy.com"
        >Login<v-icon right>mdi-arrow-right</v-icon></v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>