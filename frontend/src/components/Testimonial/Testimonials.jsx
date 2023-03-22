import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const setings = {
        dots:true,
        infinite:true,
        autoplay:1000,
        speed:1000,
        swipeToSlide:2000,
        slidesToShow:3,

        responsive:[
        {       breakpoint: 992,
                settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,     
            },
           },
           {
                breakpoint: 576,
                settings:{
                slidesToShow:1,
                slidesToScroll:1,

           },
        },
        ]
    }
  return (
    <Slider{...setings}>
    <div className='testimonial py-4 px-3'>
        <p>
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
        <div className='testimonial py-4 px-3'>
        <p>
        đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
        <div className='testimonial py-4 px-3'>
        <p>
        đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
            đẹp vãi loz hay vãi lozzz đẹp vãi loz hay vãi lozzz
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
    </Slider>
  )
}

export default Testimonials
