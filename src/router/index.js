import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/About",
			name: "About",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/3DModellingExample",
			name: "3DModellingExample",

			component: () => import("../views/3DModellingExampleView.vue"),
		},
		{
			path: "/Quote",
			name: "RequestAQuote",
			component: () => import("../views/RequestAQuoteView.vue"),
		},
		{
			path: "/Services",
			name: "Services",
			component: () => import("../views/ServicesView.vue"),
		},
	],
});

export default router;
