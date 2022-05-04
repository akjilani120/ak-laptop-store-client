import React from 'react';
import './CountUp.css';
import CountUp from 'react-countup';
import img from '../../img/countbg.jpg'
const CountUP = () => {
    return (
        <div className='countUp' style={{ 
            backgroundImage: `url(${img})` 
          }}>
             
           <div className='count-overflow '>
               <h1 className='count-title text-center text-white pt-5 display-3'>Our Statistics</h1>
               <div className='count-part'>
               <div className="count-number">
                   <h1><CountUp end={5847} delay={2} /></h1>
                   <h4>Current <span className='count-spa'>Product</span></h4>
               </div>
               <div className="count-number">
                   <h1> <CountUp end={87450} delay={2} /></h1>
                   <h4>Happy <span className='count-spa'>Client</span></h4>
               </div>
               <div className="count-number">
                   <h1><CountUp end={22} delay={2} /></h1>
                   <h4>Years <span className='count-spa'>Experience</span></h4>
               </div>
               <div className="count-number">
                   <h1><CountUp end={98574} delay={2} /></h1>
                   <h4>Device <span className='count-spa'>Service</span></h4>
               </div>
               </div>
           </div>
        </div>
    );
};

export default CountUP;