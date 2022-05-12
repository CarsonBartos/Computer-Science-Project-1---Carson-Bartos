<template>
	<div id="titleCont">
		<h2 id="title">ABOUT REAL WORLD MODELLING</h2>
	</div>

	<h3>Make new things possible</h3>
	<p>
		Design is important, not just for the things it makes - but for the things
		it makes possible in the world. What engineers design and produce is what
		keeps us safe, healthy, and connected.
	</p>
	<p>
		But here's the truth: manufacturing can be hard. It's filled with fragmented
		processes and complex supply chains. Sometimes, you just don't have the
		people, technology, or resources to keep up.
	</p>
	<p>
		REAL WORLD MODELLING is on a mission to change design, manufacturing and
		logistics for the better. We combined our expert team and a lot of 3D
		printers to make the entire process smarter and easier. We're making new
		things possible in manufacturing so you can make new things possible for the
		world.
	</p>
	<br />
	<br />
	<h3>Why should you work with REAL WORLD MODELLING?</h3>
	<p>
		We are a small company working hard to make the world a better place through
		design and making things come to life.
	</p>
	<p>
		Our prices are competitive, our 3D printers top notch and we have a passion
		like no other.
	</p>
	<br />
	<br />
	<h3>Production, parts, and a whole lot more</h3>
	Here's how REAL WORLD MODELLING can help your business:
	<h4>Additive Launch</h4>
	<p>
		Discover, design, and make new products using cutting-edge technology Bring
		new products to market by tapping into the latest additive manufacturing
		technologies and design tools.
	</p>
	<h4>On Demand</h4>
	<p>On-Demand manufacturing. Proven volume production.</p>
	<h4>Custom Microfactory</h4>
	<p>Globally competitive manufacturing, close to home.</p>
	<br />
	<br />
	<div id="aboutCont">
		<div id="factories" class="category">
			<h3>Our Factories</h3>
			<p>
				While we don't really have any factories, its like we do because we turn
				out so much product. Build your parts in a REAL WORLD MODELLING
				microfactory where our systems are constantly learning to optimize
				operations.
			</p>
			<p>
				We built our infrastructure to help you make better parts faster. With
				Canadian production centers, microfactories, and manufacturing partners
				across the country, you always have the capacity, technology, and
				expertise you need to get your job done right.
			</p>
		</div>
		<br />
		<br />
		<div class="category" id="sustain">
			<h3>Sustainabilty</h3>
			<p>Creating a more sustainable future</p>
			<p>
				Sustainability is one of the most important issues manufacturers face
				today. Our customers can make more sustainable choices and see their
				environmental impact.
			</p>
		</div>
	</div>
</template>

<style scoped>
.category {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding: 20px;
}
#aboutCont {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
#factories {
	width: 47%;
	height: 500px;
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/brooklyn-makerbot-factory-4.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}
#sustain {
	width: 47%;
	height: 500px;
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/brooklyn-makerbot-factory-4.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}
p {
	font-size: 14px;
}
</style>
<style>
h2 {
	font-size: 32px;
}
h3 {
	font-size: 24px;
}
h4 {
	font-size: 18px;
}
</style>
