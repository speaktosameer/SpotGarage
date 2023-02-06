import React from 'react'
import {FaAward} from 'react-icons/fa'

const Choose = () => {
  return (
    <div class="blog-area full-blog default-padding bg-gray bottom-less">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3" style={{marginBottom:'20px'}}>
                    <div class="heading-center text-center">
                        {/* <h5>Latest News</h5> */}
                        <h2>Why Choose Us</h2>
                    </div>
                </div>
            </div>
            <div class="blog-items">
                <div class="row">
                    {/* <!-- Single Item --> */}
                    <div class="col-lg-4 col-md-6 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img src="assets/logo.png" style={{paddingTop:'60px', paddingBottom:'30px'}} alt="Thumb"/>
                                {/* <div class="date">15 Jul, 2021</div> */}
                            </div>
                            <div class="info">
                                <h4 style={{textAlign:'center'}}>
                                    <a href="#">Skilled Mechanics</a>
                                </h4>
                                {/* <div class="footer-meta">
                                   <ul>
                                       <li>
                                           <img src="assets/logo.png" alt="Author"/>
                                           <span>By </span>
                                           <a href="#">John Baus</a>
                                       </li>
                                       <li>
                                           <span>In </span>
                                           <a href="#">Agency</a>
                                       </li>
                                   </ul>
                                </div> */}
                                <p style={{textAlign:'center'}}>
                                With a team of experts, it takes minutes to diagnose and repair your vehicles.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}
                     {/* <!-- Single Item --> */}
                    <div class="col-lg-4 col-md-6 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img src="assets/logo.png" style={{paddingTop:'60px', paddingBottom:'30px'}} alt="Thumb"/>
                                {/* <div class="date">26 Aug, 2021</div> */}
                            </div>
                            <div class="info">
                                <h4 style={{textAlign:'center'}}>
                                    <a href="#">Customer Support</a>
                                </h4>
                                {/* <div class="footer-meta">
                                   <ul>
                                       <li>
                                           <img src="assets/img/100x100.png" alt="Author"/>
                                           <span>By </span>
                                           <a href="#">Mun Paul</a>
                                       </li>
                                       <li>
                                           <span>In </span>
                                           <a href="#">Digital</a>
                                       </li>
                                   </ul>
                                </div> */}
                                <p style={{textAlign:'center'}}>
                                With our accessible online services, we provide the best assistance to our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}
                     {/* <!-- Single Item --> */}
                    <div class="col-lg-4 col-md-6 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img src="assets/logo.png" style={{paddingTop:'60px', paddingBottom:'30px'}} alt="Thumb"/>
                                {/* <div class="date">18 Sep, 2021</div> */}
                            </div>
                            <div class="info">
                                <h4 style={{textAlign:'center'}}>
                                    <a href="#">Affordable Price</a>
                                </h4>
                                {/* <div class="footer-meta">
                                   <ul>
                                       <li>
                                           <img src="assets/img/100x100.png" alt="Author"/>
                                           <span>By </span>
                                           <a href="#">Hesam Doe</a>
                                       </li>
                                       <li>
                                           <span>In </span>
                                           <a href="#">Creative</a>
                                       </li>
                                   </ul>
                                </div> */}
                                <p style={{textAlign:'center'}}>
                                Our beyond standard services are designed to bring you great value at an affordable price.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Single Item --> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose