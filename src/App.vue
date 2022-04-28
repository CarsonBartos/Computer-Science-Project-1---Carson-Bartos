<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
	<NavBar />
	<router-view> </router-view>
</template>

<script>
export default {
	components: { NavBar },
};
</script>
<style>
body {
	margin: 0px;
	font-family: Arial Black;
	background-color: rgb(25, 25, 25);
	color: rgb(200, 200, 200);
}
</style>
