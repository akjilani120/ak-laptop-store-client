import React from 'react';
import { Container} from 'react-bootstrap';
import './Experience.css'
import img from '../../img/experience.jpg'



const Experience = () => {
    return (
        <div className='my-5'>
            <Container>
              <div className="row">
                  <div className="col-lg-6">
                        <div className="expre-img">
                            <img src={img} alt="about" />
                        </div>
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-0">
                    <div className="expre-title px-3">
                        <div className="expre-about d-flex align-items-center">
                            <h2 className='me-2 years'>22</h2>
                            <h4 className='years-about'>Years of experience in Digital Device Laptop Services</h4>
                        </div>

                        <p className='exper-pera'>Subject area Marketing/Consumer behaviour. Study level/applicability The case can be used for the postgraduate students and executives in a first-year Marketing Management class for an introductory session on understanding consumer decision in a business-to-consumer context. </p>
                        <p className='exper-pera'>This case would be most befitting to be used for the first introductory session of 75 minutes to give an overview on consumer behaviour. </p>
                        <h4 className='call'>Call to get free quotes</h4>
                        <p className='d-flex my-3 justify-content-between'><button className='number-btn'>+01722885544</button> 
                        <button className='date-btn'>24/7 Mon-Fri</button>
                      
                        </p>
                    </div>
                  </div>
              </div>
            </Container>
        </div>
    );
};

export default Experience;