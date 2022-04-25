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
}
</style>
