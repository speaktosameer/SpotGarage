import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {TbPlayerPlay} from 'react-icons/tb'
import {RxCross2, RxHamburgerMenu} from 'react-icons/rx'
import {FaFacebook} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
import {RxLinkedinLogo} from 'react-icons/rx'
import {BsInstagram, BsArrowRightCircle} from 'react-icons/bs'

const HeroSection = () => {
  return (
    <div className="banner-area top-pad-90 bg-mixed double-items text-light" style={{backgroundimage: "url('assets/img/shape/19.png')"}}>
        <div id="bootcarousel" className="carousel slide carousel-fade animate_text" data-ride="carousel">
            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
            <div className="attr-nav">
                    <ul>
                        {/* <li className="search"></li> */}
                         <li className="side-menu">
                            
                        </li>
                    </ul>
                </div>
                <div className="carousel-item active">
                    <div className="box-table">
                        <div className="box-cell">
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6 info">
                                            <h2 data-animation="animated slideInLeft" style={{color: 'black'}}>Start You <span style={{color: '#ff6700'}}>Entreprenuership </span>journey with <span style={{color: '#ff6700'}}>SpotGarage</span> </h2>
                                            {/* <p data-animation="animated fadeInRight">
                                                Difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive. interested collecting.
                                            </p> */}
                                            <a className="btn circle btn-light effect btn-md" href="#"  data-animation="animated fadeInDown">Learn More &nbsp; <BsArrowRight size={18}/></a>
                                            <a className="btn circle btn-light effect btn-md" href="#"  data-animation="animated fadeInDown"><TbPlayerPlay size={18}/> &nbsp; Play Video Now</a>
                                        </div>
                                        <div className="col-lg-6 thumb" data-animation="animated slideInUp">
                                            <img src="assets/img/illustration/24.png" alt="Thumb"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Wrapper for slides --> */}
        </div>
            {/* Start Side Menu  */}
            <div className="side">
                <a href="#" className="close-side"><RxCross2/></a>
                <div className="widget">
                    <img src="assets/img/logo.png" alt="Logo" />
                    <p>
                    He is a deeply spiritual Jainmonk, with a secular & universal orientation to the pursuit of non-violent conflict resolution, promotion of peace, tolerance, and brother-hood of man.                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p> 
                                    <strong>Shree Parshwa Padmavati Nagar,<br/>Sadhanpalli, Sundampatti Post,<br/>Post: Orappam Krishnagir</strong>
                                </div>
                            </li>
                            {/* <li>
                                <div className="content">
                                    <p>Email</p> 
                                    <strong>support@validtheme.com</strong>
                                </div>
                            </li> */}
                            <li>
                                <div className="content">
                                    <p>Contact</p> 
                                    <strong>+91 4343 329 323</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">Get Subscribed!</h4>
                    <form action="#">
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                            <span className="input-group-addon">
                                <button type="submit">
                                <BsArrowRightCircle/>
                                </button>  
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><SiTwitter/></a></li>
                        <li><a href="#"><RxLinkedinLogo/></a></li>
                        <li><a href="#"><BsInstagram/></a></li>
                    </ul>
                </div>
            </div>
             {/* End Side Menu  */}
    </div>
  )
}

export default HeroSection