import React from 'react'
import './style.css';
import { FiMapPin,FiSend,FiPhoneCall,FiClock } from 'react-icons/fi'
import Navbar from '../../Components/Navbar/Navbar';
const ContectUs = () => {
  return (
    <div>
		<Navbar/>
      <div id="contact" class="contact-area section-padding">
	<div class="container">										
		<div class="section-title text-center">
			<h1>Get in Touch</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
		</div>					
		<div class="row">
			<div class="col-lg-7">	
				<div class="contact">
					<form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
						<div class="row">
							<div class="mt-2 form-group col-md-6">
								<input type="text" name="name" class="form-control" placeholder="Name" required="required"/>
							</div>
							<div class="mt-2 form-group col-md-6">
								<input type="email" name="email" class="form-control" placeholder="Email" required="required"/>
							</div>
							<div class="mt-2 form-group col-md-12">
								<input type="text" name="subject" class="form-control" placeholder="Subject" required="required"/>
							</div>
							<div class="mt-2 form-group col-md-12">
								<textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div class="mt-2 col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="single_address">
					<i class="fa fa-map-marker"><FiMapPin/></i>
					<h4>Our Address</h4>
					<p>3481 Melrose Place, Beverly Hills</p>
				</div>
				<div class="single_address">
					<i class="fa fa-envelope"><FiSend/></i>
					<h4>Send your message</h4>
					<p>Info@example.com</p>
				</div>
				<div class="single_address">
					<i class="fa fa-phone"><FiPhoneCall/></i>
					<h4>Call us on</h4>
					<p>(+1) 517 397 7100</p>
				</div>
				<div class="single_address">
					<i class="fa fa-clock-o"><FiClock/></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default ContectUs