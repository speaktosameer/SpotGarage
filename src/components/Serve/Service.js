import React from 'react'
import { GiByzantinTemple } from 'react-icons/gi' 

const Service = () => {
  return (
    <div className="services-area bg-fixed services-style-four default-padding bottom-less bg-gray" style={{backgroundimage: "url('assets/img/shape/banner.png')"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="heading-center text-center">
                        <h2>Our Services</h2>
                    </div>
                    <div className="text-center" style={{paddingBottom:'30px'}}>
                        {/* <h2>Our Services</h2> */}
                        <h5>Services we are giving to our FRANCHISEE</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                 {/* Single Itme  */}
                <div className="services-style-four col-lg-4 col-md-6">
                    <div className="item">
                    <img src="assets/logo.png"/>
                        {/* <h4><a href="#">Latest Tools</a></h4> */}
                        {/* <p>
                        Main activities are dharmik aayojans like Puja, Pujan, Bhakti, Aagam Sutra, etc
                        </p> */}
                    </div>
                    <a class="btn btn-theme effect btn-sm" href="#" style={{width:'100%', borderRadius:'0px 0px 8px 8px'}}>Latest Tools</a>
                </div>
                {/* Single Itme 
                Single Itme */}
                <div className="services-style-four col-lg-4 col-md-6">
                    <div className="item">
                    <img src="assets/logo.png"/>
                        {/* <h4><a href="#" >Spare Parts & Lubricants</a></h4> */}
                        {/* <p>
                        Main activities are for anukampa (for poverty alleviation)
                    </p> */}
                    </div>
                    <a class="btn btn-theme effect btn-sm" href="#" style={{width:'100%', borderRadius:'0px 0px 8px 8px'}}>Spare Parts & Lubricants</a>
                </div>
                 {/* Single Itme
                 Single Itme */}
                <div className="services-style-four col-lg-4 col-md-6">
                    <div className="item">
                    <img src="assets/logo.png"/>
                        {/* <h4><a href="#">Billing Software</a></h4> */}
                        {/* <p>
                        Established for maintaining peace in the world

                        </p> */}
                    </div>
                    <a class="btn btn-theme effect btn-sm" href="#" style={{width:'100%', borderRadius:'0px 0px 8px 8px'}}>Billing Software</a>
                </div>
                {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                <div className="services-style-four col-lg-4 col-md-6">
                    <div className="item">
                    <img src="assets/logo.png"/>
                        {/* <h4><a href="#">Stock Inventory</a></h4> */}
                        {/* <p>
                        Activities promoting compassion towards animals, humans and other living beings, Benefits of being vegan , Demerits of eating non-vegetarian
                        </p> */}
                    </div>
                    <a class="btn btn-theme effect btn-sm" href="#" style={{width:'100%', borderRadius:'0px 0px 8px 8px'}}>Stock Inventory</a>
                </div>
                {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                <div className="services-style-four col-lg-4 col-md-6">
                    <div className="item">
                    <img src="assets/logo.png"/>
                        {/* <h4><a href="#">24*7 Customer Support</a></h4> */}
                        {/* <p>
                        Lord Parshwanath Jain Temple was established on 21st September 2001, at Krishnagiri, a
location 250 km from Chennai.
                        </p> */}
                    </div>
                    <a class="btn btn-theme effect btn-sm" href="#" style={{width:'100%', borderRadius:'0px 0px 8px 8px'}}>24*7 Customer Support</a>
                </div>
                {/* <!-- Single Itme -->
                <!-- Single Itme --> */}
                 <div className="services-style-four col-lg-4 col-md-6">
                    <div className="item">
                    <img src="assets/logo.png"/>
                        {/* <h4><a href="#">Wheel Alignment</a></h4> */}
                        {/* <p>
                            Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy.
                        </p> */}
                    </div>
                    <a class="btn btn-theme effect btn-sm" href="#" style={{width:'100%', borderRadius:'0px 0px 8px 8px'}}>Spare Parts & Lubricants</a>
                </div>
                {/* <!-- Single Itme --> */}
            </div>
        </div>
    </div>
  )
}

export default Service