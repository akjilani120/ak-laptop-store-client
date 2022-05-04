import React from 'react';
import './CountUp.css';
import CountUp from 'react-countup';
import img from '../../img/countbg.jpg'
const CountUP = () => {
    return (
        <div className='countUp' style={{ 
            backgroundImage: `url(${img})` 
          }}>
           <div className='count-overflow'>
               <div className="count-number">
                   <h1></h1>
                   <h4>Current <span className='count-spa'>product</span></h4>
               </div>
               <div className="count-number">
                   <h1></h1>
                   <h4>Current <span className='count-spa'>product</span></h4>
               </div>
               <div className="count-number">
                   <h1></h1>
                   <h4>Current <span className='count-spa'>product</span></h4>
               </div>
           </div>
        </div>
    );
};

export default CountUP;