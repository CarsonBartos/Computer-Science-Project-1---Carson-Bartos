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
#titleCont {
	display: flex;
	justify-content: center;
}
#title {
	text-align: center;
	font-size: 35px;
	border-style: solid;
	border-width: 10px;
	border-radius: 20px;
	border-image-slice: 1;
	border-image-source: linear-gradient(
		to right,
		rgb(50, 50, 50),
		rgb(150, 150, 150)
	);
	width: auto;
	padding: 10px;
}
p {
	padding: 5px;
}
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
