<template>
	<div id="NavBar">
		<RouterLink to="/" style="flex-grow: 1" id="title">
			<h1>Real World Modelling</h1>
		</RouterLink>

		<div id="mid"></div>
		<div id="nav">
			<RouterLink to="/3DModellingExample" style="flex-grow: 1"
				>3D Modelling Example
			</RouterLink>

			<RouterLink to="/AboutAndContact" style="flex-grow: 1"
				>About and Contact</RouterLink
			>

			<RouterLink to="/Services" style="flex-grow: 1">Services</RouterLink>
			<RouterLink to="/Quote" style="flex-grow: 1"
				>Request for Quote</RouterLink
			>
		</div>
	</div>
</template>

<style scoped>
#mid {
	flex-grow: 2;
}
#NavBar {
	position: sticky;
	top: 0;
	padding: 8px;
	display: flex;

	align-content: center;
	width: 100vw;

	background-color: rgb(50, 50, 50);
}
a {
	color: rgb(200, 200, 200);
	text-decoration: none;
}
#nav {
	flex-grow: 1;
	display: flex;
	align-content: center;
	justify-content: center;
}
</style>
