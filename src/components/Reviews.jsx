import React from 'react';

function Reviews() {
  return (
    <div className="reviews bg-[#F7ECDD] h-[90vh] flex flex-col items-center justify-center">
      <p className='font-bold text-4xl text-center py-12'>
        WHAT OUR CUSTOMERS SAY 
      </p>

      <div className="img w-[25vw] h-[30vh] mx-auto flex items-center justify-center overflow-hidden rounded-xl">
        <img 
          src="/img/ipad.jpg" 
          alt="Customer Review Image" 
          className='object-cover w-full h-full' 
        />
        
        {/* Star Rating Component */}
        <div className="rating flex justify-center mt-4">
          <input 
            value="5" 
            name="rating" 
            id="star5" 
            type="radio" 
            className="hidden" 
          />
          <label 
            htmlFor="star5" 
            className="fa fa-star text-[lime] text-2xl cursor-pointer"
          ></label>
          
          <input 
            value="4" 
            name="rating" 
            id="star4" 
            type="radio" 
            className="hidden" 
          />
          <label 
            htmlFor="star4" 
            className="fa fa-star text-[lime] text-2xl cursor-pointer"
          ></label>

          <input 
            value="3" 
            name="rating" 
            id="star3" 
            type="radio" 
            className="hidden" 
          />
          <label 
            htmlFor="star3" 
            className="fa fa-star text-[lime] text-2xl cursor-pointer"
          ></label>

          <input 
            value="2" 
            name="rating" 
            id="star2" 
            type="radio" 
            className="hidden" 
          />
          <label 
            htmlFor="star2" 
            className="fa fa-star text-[lime] text-2xl cursor-pointer"
          ></label>

          <input 
            value="1" 
            name="rating" 
            id="star1" 
            type="radio" 
            className="hidden" 
          />
          <label 
            htmlFor="star1" 
            className="fa fa-star text-[lime] text-2xl cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
