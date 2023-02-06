import React from 'react'
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'

const About = () => {
  return (
    <>
    
    <div class="feature-area text-light default-padding bg-dark">
        <div class="container">
            <div class="row align-center">
            <div class="col-lg-6 offset-lg-3">
                    <div class="heading-center text-center">
                        <h2>About Us</h2>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInLeft">
                    <img src="assets/img/illustration/23.png" alt="illustration"/>
                </div>
                <div class="col-lg-5 offset-lg-1">
                    {/* <h2 class="wow fadeInRight" data-wow-delay="300ms">Powered with multiple design blocks</h2> */}
                    <ul>
                        <li class="feature-style-three wow fadeInRight" data-wow-delay="500ms">
                            <div class="icon">
                                <VscDebugBreakpointLogUnverified size={30}/>
                            </div>
                            <div class="info">
                                {/* <h4>Custom Shortcuts</h4> */}
                                <p>
                                With a focus on strengthening the local garage network, SpotGarage works to ensure that you receive the quality service you deserve.
                                </p>
                            </div>
                        </li>
                        <li class="feature-style-three wow fadeInRight" data-wow-delay="800ms">
                            <div class="icon">
                            <VscDebugBreakpointLogUnverified size={30}/>
                            </div>
                            <div class="info">
                                {/* <h4>
                                    Secure Integration</h4> */}
                                <p>
                                We are an expert and experienced team of technicians and mechanics who offers repair services, maintenance, the utmost care, and much more for vehicles on your doorstep without you ever stepping out.
                                </p>
                            </div>
                        </li>
                        <li class="feature-style-three wow fadeInRight" data-wow-delay="1100ms">
                            <div class="icon">
                            <VscDebugBreakpointLogUnverified size={30}/>
                            </div>
                            <div class="info">
                                {/* <h4>Free Live Chat</h4> */}
                                <p>
                                Our top-notch equipment, technology-aided facilities, and motivated team aim to resolve almost any vehicle-related issue related to your face. SpotGarage offers a new alternative to traditional car service providers. 
                                </p>
                            </div>
                        </li>
                        <li class="feature-style-three wow fadeInRight" data-wow-delay="1100ms">
                            <div class="icon">
                            <VscDebugBreakpointLogUnverified size={30}/>
                            </div>
                            <div class="info">
                                {/* <h4>Free Live Chat</h4> */}
                                <p>
                                unique online car service is changing the face of the automobile maintenance industry. Our firm belief in timely service makes us a step ahead of other similar services.
                                </p>
                            </div>
                        </li>
                        <li class="feature-style-three wow fadeInRight" data-wow-delay="1100ms">
                            <div class="icon">
                            <VscDebugBreakpointLogUnverified size={30}/>
                            </div>
                            <div class="info">
                                {/* <h4>Free Live Chat</h4> */}
                                <p>
                                we are now successfully running in 5 Cities of Bihar & Jharkhand. We focus on satisfying our client’s needs and make sure each step is carried out with the utmost care and the highest level of precision.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About