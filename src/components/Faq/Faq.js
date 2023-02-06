import React from 'react'

const Faq = () => {
  return (
    <div className="faq-area default-padding">
        <div className="container">
            <div className="faq-items">
            <div class="heading-center text-center"  style={{marginBottom:'60px'}}>
                        {/* <h5>Latest News</h5> */}
                        <h2>Frequently Asked Questions</h2>
                    </div>
                <div className="row">

                    <div className="col-lg-6 thumb">
                        <img src="assets/img/illustration/13.png" alt="Shape"/>
                    </div>

                    <div className="col-lg-6">
                        <div className="faq-content">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h4 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. Why should I choose SpotGarage over other service outlets in Patna?
                                        </h4>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                            Spotgarage has made its place in the automotive industry because of <br/><b>1.</b> Standardized services
<br/><b>2.</b> Best prices &
<br/><b>3.</b> Skilled mechanics

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. How can I book service with SpotGarage?
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illum earum nobis dolorum aliquid! Quos pariatur ipsam eum voluptates. Illum provident consequatur non aut labore, voluptates repudiandae maxime cum dolorem.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3. What kind of car services does SpotGarage offers?
                                      </h4>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iure accusamus ea, reprehenderit aspernatur deleniti corporis ad perspiciatis. Magnam sit enim animi, esse deleniti nobis quaerat veniam suscipit odit officiis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                        4. What kind of two-wheeler services does SpotGarage offers?
                                      </h4>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iure accusamus ea, reprehenderit aspernatur deleniti corporis ad perspiciatis. Magnam sit enim animi, esse deleniti nobis quaerat veniam suscipit odit officiis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq