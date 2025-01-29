// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	css: ["vuetify/styles"],
	modules: [
		"vuetify-nuxt-module",
		"nuxt-gtag",
		"nuxt-security"
	],
	ssr: true,
	imports: {
		dirs: ["maps"],
	},
	build: {
		transpile: ["vuetify"],
	},
	experimental: {
		asyncContext: true,
	},
	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
		static: true
	},
	compatibilityDate: '2025-01-11',
	future: {
    compatibilityVersion: 4,
  },
	vuetify: {
		moduleOptions: {},
		vuetifyOptions: {}
	},
	gtag: {
    id: 'G-KZZPCS498M'
  },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	}
});