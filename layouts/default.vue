<template>
	<v-layout>
		<v-app-bar color="#1e3a8a" class="elevation-12">
			<router-link to="/" class="d-flex" style="text-decoration: none; align-items: center">
				<img alt="Team logo" class="ml-4 mr-2" src="~/assets/logo.webp" style="width: 50px" />
				<v-app-bar-title style="width: 100%" class="hidden-md-and-down">
					<p class="text-overline mb-n2 mt-n1">FRC Team 2641</p>
					<h5 class="text-h5">Pittsburgh Central Catholic Robotics</h5>
				</v-app-bar-title>
			</router-link>

			<v-spacer></v-spacer>

			<div class="hidden-sm-and-down">
				<v-btn size="large" link to="/" text="Home"></v-btn>
				<v-btn size="large" link to="/about" text="About"></v-btn>
				<v-btn size="large" link to="/sponsors" text="Sponsors"></v-btn>
				<v-btn size="large" link to="/contact" text="Contact"></v-btn>
				<v-btn size="large" class="mr-2" href="https://www.frclookout.com" target="_blank" text="Lookout" append-icon="mdi-arrow-right"></v-btn>
      </div>

			<v-btn class="hidden-md-and-up mr-2" icon="mdi-menu" variant="text" @click="drawer = !drawer"></v-btn>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" location="right" temporary class="hidden-md-and-up">
      <v-list density="compact">
        <v-list-item title="Home" link to="/"></v-list-item>
        <v-list-item title="About" link to="/about"></v-list-item>
        <v-list-item title="Sponsors" link to="/sponsors"></v-list-item>
        <v-list-item title="Contact" link to="/contact"></v-list-item>
        <v-list-item title="Lookout for FRC" append-icon="mdi-arrow-right" href="https://www.frclookout.com" target="_blank"></v-list-item>
      </v-list>
    </v-navigation-drawer>

		<v-main style="height: 100dvh; overflow-y: auto">
			<NuxtPage style="position: relative; z-index: 1; box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px" />

			<v-footer :style="`display: ${mdAndUp ? 'flex' : 'block'}`" style="align-items: start; z-index: 0; padding-inline: 12dvw" class="py-5">
				<div class="mr-6">
					<img src="@/assets/seal.webp" height="175px">
					<div class="d-flex mx-n2 mb-2" :style="`justify-content: ${mdAndUp ? 'center' : ''}`">
						<v-btn
							href="mailto:cchsteam2641@gmail.com"
							icon
							variant="text"
							color="grey"
							size="x-small"
						>
							<v-icon :size="20">mdi-email</v-icon>
						</v-btn>
						<v-btn
							target="_blank"
							href="https://www.instagram.com/frc2641"
							icon
							variant="text"
							color="grey"
							size="x-small"
						>
							<v-icon :size="20">mdi-instagram</v-icon>
						</v-btn>
						<v-btn
							target="_blank"
							href="https://www.facebook.com/Team2641Pccr"
							icon
							variant="text"
							color="grey"
							size="x-small"
						>
							<v-icon :size="20">mdi-facebook</v-icon>
						</v-btn>
						<v-btn
							target="_blank"
							href="https://twitter.com/FRC2641"
							icon
							variant="text"
							color="grey"
							size="x-small"
						>
							<v-icon :size="20">mdi-twitter</v-icon>
						</v-btn>
						<v-btn
							target="_blank"
							href="https://github.com/CentralCatholic2641"
							icon
							variant="text"
							color="grey"
							size="x-small"
						>
							<v-icon :size="20">mdi-github</v-icon>
						</v-btn>
					</div>
				</div>
				<div>
					<p class="text-overline mb-n2">FRC Team 2641</p>
					<h6 class="text-h6 mb-3">Pittsburgh Central Catholic Robotics</h6>
					<p class="text-body-2">Central Catholic High School</p>
					<p class="text-body-2">4720 Fifth Ave</p>
					<p class="text-body-2">Pittsburgh, PA 15213</p>
					<p class="text-body-2"><a href="https://www.centralcatholichs.com" target="_blank">www.centralcatholichs.com</a></p>
					<p class="text-body-2 mb-3"><a href="tel:4122083400">(412) 208-3400</a></p>
					<p class="text-body-1 mb-3 font-italic">Pro Deo et Patria</p>
					<p class="text-body-2 mb-3 hidden-sm-and-down transparent-subtitle">&copy; {{ new Date().getFullYear() }} Pittsburgh Central Catholic Robotics</p>
					<p class="text-body-2 mb-3 hidden-md-and-up transparent-subtitle">&copy; {{ new Date().getFullYear() }} PCCR</p>
					<p class="text-overline transparent-subtitle mt-n1 mb-n2" style="font-size: 9px !important">Powered by <a href="https://www.frclookout.com" target="_blank">Lookout</a>. Design by <a href="https://www.aidanliddy.com" target="_blank">Aidan Liddy</a>.</p>
				</div>
			</v-footer>
		</v-main>
	</v-layout>
</template>

<script setup lang="ts">
	const { mdAndUp } = useDisplay();

	let drawer = ref(false)
</script>

<style>
	.v-list-item {
		border-radius: 12px !important;
		margin: 0px 6px;
	}

	.v-list-item__prepend > .v-badge .v-icon,
	.v-list-item__prepend > .v-icon,
	.v-list-item__append > .v-badge .v-icon,
	.v-list-item__append > .v-icon,
	.v-list-item .v-avatar {
		margin-left: -6px;
	}
</style>