<template>
	<v-app>
		<NuxtLayout />
	</v-app>
</template>

<script setup lang="ts">
	useSeoMeta({
		description: "Pittsburgh Central Catholic Robotics",
		ogTitle: "FRC Team 2641",
		ogDescription: "Pittsburgh Central Catholic Robotics",
		ogImage: "/favicon.ico",
		ogUrl: "https://www.team2641.com",
		twitterTitle: "FRC Team 2641",
		twitterDescription: "Pittsburgh Central Catholic Robotics",
		twitterCard: "summary",
	});

	useHead({
		title: 'FRC Team 2641 | Pittsburgh Central Catholic Robotics',
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
			},
			{
				name: "theme-color",
				content: "#1E3A8A",
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black",
			},
			{
				name: "apple-mobile-web-app-title",
				content: "FRC Team 2641",
			},
			{
				name: "application-name",
				content: "FRC Team 2641",
			},
		],
		link: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap",
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
		],
	});
</script>

<style lang="scss">
	a {
		color: unset !important;
	}

	html,
	body {
		overflow: hidden !important;
	}

	$font-family: "Inter";

	.v-application,
	* {
		font-family: $font-family, sans-serif !important;
	}
	
	[class*="text-"] {
		font-family: $font-family, sans-serif !important;
	}

	.v-application {
		background: rgb(12, 12, 12) !important;
	}

	input, textarea {
		outline: none;
		width: 100%;
	}

	.transparent-subtitle {
		color: rgba(255, 255, 255, 0.55);
	}

	.page-enter-active,
	.page-leave-active {
		transition: all 0.1s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0.25;
		filter: blur(0.25rem);
	}
</style>
