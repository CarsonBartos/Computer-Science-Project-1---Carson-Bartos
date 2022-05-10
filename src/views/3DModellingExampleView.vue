<template>
	<h2>Example of our 3D Models</h2>
	<div class="slideContainer">
		Turn X
		<input
			type="range"
			min="0"
			max="500"
			id="turnSpeedRangeX"
			class="slider"
			v-model="turnSpeedX"
		/><br />
		Turn Y
		<input
			type="range"
			min="0"
			max="500"
			id="turnSpeedRangeY"
			class="slider"
			v-model="turnSpeedY"
		/><br />
		Turn Z
		<input
			type="range"
			min="0"
			max="500"
			id="turnSpeedRangeZ"
			class="slider"
			v-model="turnSpeedZ"
		/>
		<div id="container"></div>
	</div>
</template>

<script>
//https://stackoverflow.com/questions/47849626/import-and-use-three-js-library-in-vue-component
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
export default {
	data() {
		return {
			turnSpeedX: 0,
			turnSpeedY: 0,
			turnSpeedZ: 0,
		};
	},
	methods: {
		init: function () {
			this.scene = new Three.Scene();

			let container = document.getElementById("container");

			this.camera = new Three.PerspectiveCamera(
				70,
				container.clientWidth / container.clientHeight,
				0.01,
				10
			);
			this.camera.position.z = 5;
			this.camera.position.x = 5;
			this.camera.position.y = 5;
			this.camera.lookAt(0, 0, 0);

			let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
			let material = new Three.MeshNormalMaterial();

			this.mesh = new Three.Mesh(geometry, material);
			this.scene.add(this.mesh);

			const loader = new GLTFLoader();

			loader.load(
				"/src/assets/TEAPOT.glb",
				(glb) => {
					console.log(glb);
					this.scene.add(glb.scene);

					console.log("added blender file");
					console.log(this.scene);
				},
				undefined,
				function (error) {
					console.error(error);
				}
			);

			const light = new Three.DirectionalLight(0xffffff, 1);
			light.position.set(2, 2, 5);
			this.scene.add(light);

			this.renderer = new Three.WebGLRenderer({ antialias: true });
			this.renderer.setSize(container.clientWidth, container.clientHeight);
			container.appendChild(this.renderer.domElement);
		},
		animate: function () {
			requestAnimationFrame(this.animate);
			if (this.scene.children[2]) {
				this.scene.children[2].rotation.x += parseInt(this.turnSpeedX) / 1000;
				this.scene.children[2].rotation.y += parseInt(this.turnSpeedY) / 1000;
				this.scene.children[2].rotation.z += parseInt(this.turnSpeedZ) / 1000;
			}
			this.renderer.render(this.scene, this.camera);
		},
	},
	mounted() {
		this.init();
		this.animate();
	},
};
</script>

<style scoped>
#container {
	width: 75vw;
	height: 75vh;
}

.slider {
	-webkit-appearance: none;

	width: 50vw;
	height: 15px;
	border-radius: 5px;
	background: rgb(50, 50, 50);
	outline: none;
	opacity: 0.7;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;
}
.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 17px;
	height: 20px;
	border-radius: 100%;
	background: black;
	cursor: pointer;
}
</style>
