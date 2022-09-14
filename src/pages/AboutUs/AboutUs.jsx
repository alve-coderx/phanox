import React from 'react'
import './style.css';
import { FiFacebook,FiInstagram,FiTwitter } from 'react-icons/fi';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const AboutUs = () => {
  return (
    <div>
    <Navbar/>
        <section id="about-section" class="pt-5 pb-5">
            <div class="container wrapabout">
                <div class="red"></div>
                <div class="row">
                    <div class="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                        <div class="blockabout">
                            <div class="blockabout-inner text-center text-sm-start">
                                <div class="title-big pb-3 mb-3">
                                    <h3>ABOUT US</h3>
                                </div>
                                <p class="description-p text-muted pe-0 pe-lg-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere sequi, quia, est sed dicta aliquid quidem facilis culpa iure perferendis? Dolor ad quia deserunt.
                                </p>
                                <p class="description-p text-muted pe-0 pe-lg-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere.</p>
                                <div class="sosmed-horizontal pt-3 pb-3">
                                    <a href="#"><i class="fa fa-facebook"><FiFacebook/></i></a>
                                    <a href="#"><i class="fa fa-instagram"><FiInstagram/></i></a>
                                    <a href="#"><i class="fa fa-pinterest"><FiTwitter/></i></a>
                                </div>
                                <a href="#" class="btn rey-btn mt-3">See More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0">
                        <figure class="potoaboutwrap">
                            <img className='img-fluid' src="https://i.ibb.co/Pmdw55D/34.jpg" alt="potoabout" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default AboutUs