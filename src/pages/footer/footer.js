import React from 'react'
import './footer.css'
import img1 from './imgs/visa.png'
import img2 from './imgs/pp.png'

import img3 from './imgs/master.png'

import img4 from './imgs/rupay.png'
// import img5 from './imgs/294654_visa_icon.png'

export const Footer = () => {
  return (
    <>
    <div className='maindb'>
        
        
        
        <div className='fdb1'>

        <div className='hd'>Express delivery</div>
<div className='hd1'>
        Free delivery throughout Kazakhstan using the Der Mode Economy method or when purchasing goods for a certain amount, according to the conditions for each city individually. When paying for an order on the website with a bank card, delivery by any service is free.
        </div>
        
         </div>


        <div className='fdb2'>
        <div className='hd'>Trying on clothes before buying</div>
        <div className='hd1'>
        The Der Mode online store gives you the opportunity to try on clothes and shoes before paying for the order. Pay only for what fits and suits you. Also, you always have a whole year to return the unsuitable goods by mail or courier upon receipt of the next order.
        </div>
        </div>

        <div className='fdb3'>


            <div className='hd'>Convenient payment methods</div>
      <div className='hd1'>  You can pay for purchases not only in cash, but also by credit card. All sales representatives of Der Mode Express carry a mobile terminal for card payments. When paying for an order on the website with a bank card, delivery by any service is free.
      </div>

        </div>
        
        </div>

<div className='bb'>
<div className='aa a1'>10% discount for a review in online Maps</div>
<div className='aa a2'>Show a review in the store to receive a discount</div>
<div className='aa a3'>Payment Methods</div>
<div className='dn'>
  <img className="a"  src={img1}></img>


<img className="a" src={img3}></img>
<img className="a"  src={img4}></img>
<img className="a"  src={img2}></img>

</div>
<div className='aa a4'>Happy shopping!</div>
<div className='aa a5'>© 2022 P_Store. All rights reserved.</div>

</div>
</>

  )
}
export default Footer;