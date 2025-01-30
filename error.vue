<template>
	<v-app>
		<v-main class="text-center px-4" style="height: 100dvh; overflow-y: auto; max-width: 100dvw; overflow-x: hidden">
			<div class="mt-12 mb-6">
				<video autoplay loop style="max-width: calc(100dvw - 32px)" src="~/assets/upturned.webm" alt="Upturned" class="rounded-lg elevation-12" />
			</div>
			<h4 class="text-h4 mb-8">An error has occurred!</h4>
			<p class="mb-1">Status Code</p>
			<h1 class="text-h1 font-weight-bold">{{ error.statusCode }}</h1>
			<h5 class="text-h5 mt-8">{{ error.statusMessage || httpcodes[error.statusCode].message }}</h5>
			<p class="mt-2">{{ httpcodes[error.statusCode].description }}</p>

			<v-btn @click="handleError" color="primary" class="mt-9" prepend-icon="mdi-home" text="Go Home"></v-btn>

			<div v-if="error.stack" class="my-12">
				<h5 class="text-h5 mb-4">Technical Information</h5>
				<pre v-html="`${error.message}<br>${error.stack}`"></pre>
			</div>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
	import httpcodes from "./maps/httpcodes.json";

	const props = defineProps(["error"]);

	function handleError() {
		clearError();
		window.location.href = "/";
	}

	useHead({
		title: `Error ${props.error.statusCode} - FRC Team 2641`,
		htmlAttrs: {
			lang: "en",
		},
		link: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,700",
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
			{
				rel: "icon",
				type: "image/ico",
				href: "/favicon.ico",
			},
		],
	});
</script>
