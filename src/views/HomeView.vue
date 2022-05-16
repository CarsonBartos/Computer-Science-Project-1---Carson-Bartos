<template>
<div id="titleCont">

	<h2 id="title">Welcome to Real World Modelling!</h2>
</div>

<div id="overviewOfUsCont">
<div id="overviewOfUs">
<h3>A Little About Us</h3>
<p>Real World Modelling provides services such as: 3D Modelling, Graphic Design, Photography, 3D Printing. For more about our services you can go to the service tab. Our goal is to make creating and engineering things alot easier. For more about us you can go to the About Us tab, and an example of our 3D modelling is located on the 3D Modelling Example tab.</p>

</div>
</div>










<div id="reviewsCont">
		<div id="reviewsTitle">

			Here are some testimonials from some happy customers!
		</div>
	<div id="reviews">
<div class="review">
	<div class="name">
		
		Crystal
	</div>
	<div class="stars">
	
	★★★★★ 5/5
	</div>
	<p id="quote">

		"Parts received. Quality is fantastic! Thank you for getting them all done so quickly. It makes a big difference to us this end."
	</p>

</div>
<div class="review">
	<div class="name">
		
		Travis
	</div>
	<div class="stars">
	
	★★★☆☆ 3/5
	</div>
	<p id="quote">

		"Real World Modelling are the most communicative and helpful prototyping bureau out there. They delivered our fine detailed parts in record time.  One was ruined though."
	</p>

</div>
<div class="review">
	<div class="name">
		
		Donna
	</div>
	<div class="stars">
	
	★★★★★ 5/5
	</div>
	<p id="quote">

		"We have just received the two components with the text and they are great, thank you very much for taking the time and effort to get this right for us, I really appreciate the lengths you have gone to and will recommend your services at every opportunity."
	</p>
	
</div>
<div class="review">
	<div class="name">
		
		Jonathan <br>
	Local Business Owner of Weststar Doll Makers Edmonton Alberta
	</div>
<div class="stars">
	
	★★★★★ 5/5
	</div>
	<p id="quote">

		"The service was second to none. Fast response with a quote. Follow up emails keeping me informed of order progress and delivered exactly on time. Great quality of parts created from my cad drawings.....A great company to deal with. Quick and efficient service with great communication at each stage of the process. I highly recommend them and I would definitely use them again. It's the way all companies should operate."
	</p>
</div>
<div class="review">
	<div class="name">
		
		Jim
	</div>
	<div class="stars">
	
	★★★★★ 5/5
	</div>
	<p id="quote">

		"I have worked in the Formula 1 sector for 20 years and had various in-house equipment to manufacture demo and sample goods but having left to start my own venture I found Real World Modelling a great option to get my sample goods made quickly and efficiently. " 🙂
	</p>

</div>
<div class="review">
	<div class="name">
		
		Sally
	</div>
	<div class="stars">
	
	★★★★★ 5/5
	</div>
	<p id="quote">

		"A good service, quick and accurate, with friendly help in resolving problems, and trust me, I have lots."
	</p>

</div>
<div class="review">
	<div class="name">
		
		Sherry
	</div>
	<div class="stars">
	★★★★★ 5/5
	
	</div>
	<p id="quote">

		"Got the part, it's absolutely beautiful, you guys are super-awesome!"
	</p>

</div>
<div class="review">
	<div class="name">
		
		Numa
	</div>
	<div class="stars">
	★★★★★ 5/5
	
	</div>
	<p id="quote">

		"Very quick, helpful with error trapping on print design. A good service, quick and accurate, with friendly help in resolving problems."
	</p>

</div>
<div class="review">
	<div class="name">

		Jacquie
	</div>
	<div class="stars">
	
	★★★★★ 5/5
	</div>
	
	<p id="quote">

		"Very helpful with advice pre printing very prompt manufacture and delivery."
	</p>
</div>
<div class="review">
<div class="name">
		
	Stu
	</div>
	<div class="stars">
	★★★★☆ 4/5
	
	</div>
	<p id="quote">

		"Just wanted to inform that we received our order a couple of days ago and all seems to be in order. Part and detail quality is good and we couldn't find any defects.
	We were particularly impressed with your Polypropylene -like material, Endur. It's much friendlier for simulation of plastic parts and snaps than other materials we worked with before."
	</p>

</div>

	</div>
	</div>
</template>

<style scoped>
#overviewOfUs{
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url("@/assets/brooklyn-makerbot-factory-4.jpg");
background-size: cover;
	background-repeat: no-repeat;
	width: 80%;
	height: 850px;
}
#overviewOfUsCont{
	display: flex;
	justify-content: center;
}






#reviewsCont{
	border-style: solid;
	border-color: rgb(60, 60, 60);
	border-width: 10px;
	border-radius: 100px
}
#reviews{
	display: flex;
	flex-wrap: wrap;
}
 .review{
	 padding: 10px;
	width: 47%;
 }
 #reviewsTitle{
	 text-align: center;
	 font-size: 30px;
	 margin: 30px;
 }
 .name{
	 font-size: 20px;
	 margin-bottom: 10px
 }
 .stars{
	 color: #FDCC0D;
 }

</style>
