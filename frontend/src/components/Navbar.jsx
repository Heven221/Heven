import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
    const [visible,setVisible] = useState(false);
    
     
    const {setShowSearch , getCartCount , navigate , token , setToken , setCartItems} = useContext(ShopContext);

    const logout = ()=>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
       
    }


  return (
    
   
    <div className='flex items-center justify-between py-5 font-medium '>
       <Link to='/'> <img src={assets.logo}  className='w-36' alt=""/></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className="flex flex-col items-center gap-1">
                <p className='font-bold hover:text-yellow-600'>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collections' className="flex flex-col items-center gap-1">
                <p className='font-bold  hover:text-yellow-600'>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1">
                <p className='font-bold  hover:text-yellow-600'>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1">
                <p className='font-bold  hover:text-yellow-600'>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true) || navigate('/collections')} src={assets.search_icon} alt="" className='w-5 cursor-pointer ' />

            <div className='group relative'>
                <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} alt="" srcset=""  className='w-5 cursor-pointer'/>
              {/* Dropdown menu  */}
                {token &&                 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>

                    </div>

                </div> }

            </div>
            <Link to='/Cart' className='relative'>
                <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
            </Link>

            <img onClick={()=> setVisible(true)} src={assets.menu_icon}  className='w-5 cursor-pointer sm:hidden ' alt="" />

        </div>
        {/* Side bar for Small Screen  */}
        <div className={`absolute top-0 right-0 bottom-0 qverflow-hidden bg-white transition-all ${visible ? 'w-full' :'w-0'}`}>
            <div className='flex flex-col text-gray-600 '>
                <div  onClick={()=> setVisible(false)} className='flex items-center gap-4 pt-3 cursor-pointer' >
                    <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
                    <p className=''>Back</p>


                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)}className='py-4 pl-6 border' to='/collections'>COLLECTIONS</NavLink>
                <NavLink onClick={()=>setVisible(false)}className='py-4 pl-6 border'to='/orders'>Orders</NavLink>
                <NavLink onClick={()=>setVisible(false)}className='py-4 pl-6 border'to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)}className='py-4 pl-6 border'to='/contact'>CONTACT</NavLink>
                <p onClick={logout} className='cursor-pointer  font-bold text-3xl hover:text-black'>Logout</p>



            </div>

        </div>
      
    </div>
  )
}

export default Navbar
