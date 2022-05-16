<template>
	<div id="NavBar">
		<RouterLink to="/" style="flex-grow: 1" id="Title">
			<h1>Real World Modelling</h1>
		</RouterLink>

		<div id="mid"></div>
		<div id="nav">
			<RouterLink to="/3DModellingExample" style="flex-grow: 1"
				>3D Modelling Example
			</RouterLink>

			<RouterLink to="/About" style="flex-grow: 1">About Us</RouterLink>

			<RouterLink to="/Services" style="flex-grow: 1">Services</RouterLink>
			<RouterLink to="/Quote" style="flex-grow: 1"
				>Request for Quote</RouterLink
			>
		</div>
	</div>
</template>

<style scoped>
h1 {
	padding-left: 10px;
}
#mid {
	flex-grow: 2;
}
#NavBar {
	border-radius: 0 0 20px 20px;
	position: sticky;
	top: 0;
	padding-top: 10px;
	z-index: 50;
	display: flex;

	align-content: center;
	width: 100%;

	background-color: rgb(50, 50, 50);
}
a {
	color: rgb(200, 200, 200);
	text-decoration: none;
}
a:hover {
	color: rgb(250, 250, 250);
}

#nav {
	flex-grow: 1;
	display: flex;
	align-content: center;
	justify-content: center;
}
</style>
