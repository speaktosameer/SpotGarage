import React from 'react'
import {RxCross2, RxHamburgerMenu} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsInstagram, BsArrowRightCircle} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar background-gray white bootsnav">

            <div class="container-full">

                {/* <!-- Start Atribute Navigation --> */}
                <div class="attr-nav">
                    <ul>
                        <li class="menu" ><a href="#"  style={{backgroundColor:'#FF6700', color:'white'}}> Contact Us</a></li>
                    </ul>
                </div>        
                {/* <!-- End Atribute Navigation --> */}

                {/* <!-- Start Header Navigation --> */}
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <RxHamburgerMenu/>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/logo.png" class="logo logo-display" alt="Logo"/>
                        {/* <img src="assets/logo.png" class="logo logo-scrolled" alt="Logo"/> */}
                    </a>
                </div>
                {/* <!-- End Header Navigation --> */}

                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class="dropdown">
                            <a href="#"  data-toggle="dropdown" >Home</a>
                            {/* <ul class="dropdown-menu">
                                <li><a href="index-business.html">Corporate Business <span class="badge">new</span></a></li>
                                <li><a href="index.html">Startup Agency</a></li>
                                <li><a href="index-marketing-agency.html">Marketing Agency</a></li>
                                <li><a href="app-landing.html">App Landing <span class="badge">new</span></a></li>
                                <li><a href="index-digital-agency.html">Digital Agency</a></li>
                                <li><a href="index-it-solution.html">It Solution</a></li>
                                <li><a href="index-software-landing.html">Software Landing <span class="badge">New</span></a></li>
                                <li><a href="minimal-ecommerce.html">Minimal Ecommerce <span class="badge">new</span></a></li>
                            </ul> */}
                        </li>
                        <li class="dropdown">
                            <a href="#"  data-toggle="dropdown" >About Us</a>
                            {/* <ul class="dropdown-menu">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Projects</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="projects.html">Our Projects</a></li>
                                        <li><a href="project-details.html">Projects Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="pricing-table.html">Pricing Table</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="404.html">Error Page</a></li>
                            </ul> */}
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown" >Become a Partner</a>
                            {/* <ul class="dropdown-menu">
                                <li><a href="shop.html">shop</a></li>
                                <li><a href="shop-single.html">Product Details</a></li>
                            </ul> */}
                        </li>
                        {/* <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Services</a>
                             <ul class="dropdown-menu">
                                <li><a href="services.html">Services Version One</a></li>
                                <li><a href="services-2.html">Services Version Two</a></li>
                                <li><a href="services-details.html">Services Details</a></li>
                            </ul> 
                        </li> */}
                        {/* <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                             <ul class="dropdown-menu">
                                <li><a href="blog-standard.html">Blog Standard</a></li>
                                <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                <li><a href="blog-single.html">Blog Single</a></li>
                                <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                            </ul> 
                        </li> */}
                        {/* <li><a href="contact.html">contact</a></li> */}
                    </ul>
                </div>
                {/* <!-- /.navbar-collapse --> */}
            </div>

        </nav>
  )
}

export default Navbar