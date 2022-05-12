<template>
	<div id="titleCont">
		<h2 id="title">
			Services! Doing the Job Right, these are the services offered by REAL
			WORLD
		</h2>
	</div>
	<div id="cont">
		<div id="modelling" class="category">
			<h3>MODELLING 3D DESIGN & MODELLING</h3>

			<p>
				Have a 3D idea and want it built? Now product for fabrication? Parts
				broken and want to reproduce new? Tired of uniform and want to replace
				to your personalized creation? Come by and share your idea with our
				designers or rent time on a workstation and design it yourself!
			</p>
		</div>

		<br />
		<div id="graphic" class="category">
			<h3>Graphic Design</h3>

			<p>
				Graphic design isn’t just funky art and sweet designs, it’s seriously
				the digital medium for a lot of creative expression. While we might only
				see the final end product of graphic art projects, there’s an infinite
				number of applicable uses for graphic digital expression. The
				foundational application of marketing and strategy is the logo design.
				Often recognizes as the iconic part of a brand, a strong logo speaks
				volumes to your audience, going beyond the actual imprint and what
				feelings, emotions and thoughts it instills in it’s audience.Graphic
				art, advertising, print media, digital ads… all are reated, modified or
				edited via graphic means. A solid application and production of high
				quality graphic design tells your audience about your brand and the type
				of company you are.
			</p>
		</div>
		<br />

		<div id="anim" class="category">
			<h3>3D & Animation</h3>

			<p>
				We design a wide variety of animations for websites and business. With
				professional voice-overs, 3D experts and savvy artists, we draw on a
				wide variety of resources to produce high quality video animation
				services. Our team can create short clips, promotional trailers or
				information based explainers, all which helps you reach your audience in
				a more efficient fashion. Our skilled animators and designers also
				produce high quality 3D stills, renders and isolated objects for
				professional, creative and personal uses.
			</p>
		</div>
		<br />

		<div id="photo" class="category">
			<h3>Photography</h3>

			<p>
				There’s a reason why photography can be a fulltime job, someone’s life
				work and the driver behind the world’s most successful social media
				platforms. Photos speak louder than words. In one moment, an image can
				tell you more than an entire thesis. Imagery is Powerful We know design,
				marketing and advertising play critical roles in communications, but
				good photography makes the planning, research and production of these
				strategies possible. Whether it be people, food, furniture or design,
				the difference in lighting, aperture, exposure and setting can make the
				difference between okay and incredible.
			</p>
			<p>
				Our team makes sure we deliver the best photographic services to make
				your brand click. Combined with digital enhancement, graphic design and
				attention to detail, we make sure that the ultimate end product in any
				campaign captures, the hearts, minds and eyes of onlookers.
			</p>
		</div>
		<br />
		<div id="printing" class="category">
			<h3>3D Printing /RAPID PROTOTYPING</h3>

			<p>
				RAPID PROTOTYPING IS A COST EFFECTIVE METHOD TO ANALYZE YOUR PART
				DESIGNS BEFORE COMMITTING TO THE HIGH COST OF TOOLING DEVELOPMENT OR
				MACHINING PRODUCTION PARTS. CREATE YOUR MODEL IN ANY 3D MODELLING
				SOFTWARE, EXPORT YOUR DESIGN AS AN STL FILE. SEND US YOUR FINISHED
				DESIGN (INFO@RealWorldModelling.COM) AND WE CAN FINISH PRINTING WITHIN 3
				BUSINESS DAYS. YOU CAN DO YOUR OWN POST PRODUCTION OR HAVE US FINISH IT
				FOR YOU.
			</p>
		</div>
	</div>
</template>

<style scoped>
#cont {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
}
.category {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding: 20px;
}
#modelling {
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/Webp.net-resizeimage.png");
	background-size: cover;
	background-repeat: no-repeat;
	width: 45%;
	height: 520px;
}
#graphic {
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/graphic-designer-at-work-color-samples-picture-id655926676-800x358.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	width: 45%;
	height: 520px;
}
#anim {
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/BlenderRobot.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	width: 45%;
	height: 520px;
}
#photo {
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/download.jfif");
	background-size: cover;
	background-repeat: no-repeat;
	width: 45%;
	height: 520px;
}
#printing {
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/il_794xN.2364984458_hsct (1).webp");
	background-size: cover;
	background-repeat: no-repeat;
	width: 45%;
	height: 720px;
}

h3 {
	text-align: center;
}
</style>
