import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
             <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>At <b>HEVEN</b>, we redefine fashion with a perfect blend of 
                trend and comfort. Our collections embrace bold prints, timeless elegance, and sustainable fabrics, ensuring 
                you look and feel your best. From casual wear to statement pieces, we craft styles that empower confidence 
                and individuality. Join us in celebrating fashion that speaks to you!</p>
             </div>

             <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/contact'>About Us</Link></li>
                    <li><Link to='/orders'>Delivery</Link></li>
                    <li><Link to='/about'>Privacy Policy</Link></li>
                </ul>
             </div>
             <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 8247349814</li>
                    <li>heven.storess@gmail.com</li>

                </ul>
             </div>
      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2025 © heven.com - All Rights reserved</p>
        </div>

    </div>
  )
}

export default Footer
