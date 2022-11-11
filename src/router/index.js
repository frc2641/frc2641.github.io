import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
	{
		path: "/seasons",
		name: "Seasons",
		component: () => import("../views/Sponsors.vue"),
	},
	{
		path: "/gallery",
		name: "Gallery",
		component: () => import("../views/Gallery.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("../views/Contact.vue"),
	},
	{
		path: "/sponsors",
		name: "Sponsors",
		component: () => import("../views/Sponsors.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
