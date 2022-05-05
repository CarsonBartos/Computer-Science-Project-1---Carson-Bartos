<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import ContactBar from "@/components/ContactBar.vue";
</script>

<template>
	<div id="cont">
		<NavBar />
		<div id="routerView">
			<router-view> </router-view>
		</div>
		<ContactBar />
	</div>
</template>

<script>
export default {
	components: { NavBar, ContactBar },
};
</script>
<style>
body {
	margin: 0px;
	font-family: Arial Black;
	background-color: rgb(25, 25, 25);
	color: rgb(200, 200, 200);
}
#cont {
	display: flex;
	flex-direction: column;
	max-width: 100%;
	min-height: 100vh;
}
#routerView {
	flex: 1;
}
</style>
