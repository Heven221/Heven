import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]  ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Heven is a premier online shopping platform dedicated to redefining fashion retail. As a one-stop destination for trendsetters, 
                we offer a diverse collection of stylish apparel, footwear, and accessories that cater to every taste and occasion. At Heven,
                 we believe fashion should be accessible, effortless, and inspiring. Our platform brings together the latest trends, high-quality
                  products, and seamless shopping experiences to ensure customer satisfaction. </p>

              <p>At Heven, we prioritize customer satisfaction by offering an intuitive shopping interface, secure transactions, and fast,
                 reliable shipping. Our commitment to quality ensures that every product meets high standards, while our competitive pricing 
                 makes fashion accessible to all. </p>

                  <b className='text-gray-800'>OUR MISSION</b>
                  <p>At Heven, our mission is to revolutionize online fashion shopping by providing a seamless, stylish, and customer-centric
                     experience. We aim to make fashion accessible, affordable, and inspiring for people worldwide. Through a diverse collection 
                     of high-quality apparel, footwear, and accessories, we empower individuals to express their unique style effortlessly.</p>

        </div>

      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  '>

          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Heven, quality is our top priority. We are committed to offering fashion that combines style, durability, and comfort. </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  '>
                <b>Convenience:</b>
                <p className='text-gray-600'>At Heven, customer convenience is at the heart of our online shopping experience. We understand that fashion should be accessible and effortless.
                   </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  '>
                <b>Exceptional Coustomer Service:</b>
                <p className='text-gray-600'>At Heven, customer convenience is at the heart of everything we do. Our platform is designed to provide a seamless and enjoyable shopping experience, from browsing 
                  to checkout. </p>
        </div>
      </div>

      <NewLetterBox/>
    </div>
  )
}

export default About
