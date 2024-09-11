// import React from 'react'
// import { Link } from 'react-router-dom'

// function Banner() {
//   return (
//     <div>
//         <div className="steph z-0 overflow-hidden ">
//             <div className="">
//               {/* <video src="/img/LND_MY24_WelcomeMat_TCOM_NA-New_ENG_10_TDRMLPHeroDeskTab1920x796fs5mb_TYTW2579000H_UbpW1JohyROrHCpfkbp.mp4" autoPlay muted loop></video> */}
//             </div>
//                 <div className="steph-container font-bold text-4xl uppercase text-[#FBE042]">
//                     <h2>Welcome to JOE'S Autos</h2>
//                     <h2>Where Elegance meets Luxury</h2>
//                     <div className="text-2xl font-semibold py-4">
//                       <Link to="/product" className='text-[#FBE042] p-2 rounded-full border-solid border-white border-2 hover:p-3 hover:bg-[#FBE042] hover:text-[black] hover:font-bold hover:border-[black] '>See Products</Link>
//                     </div>
//                 </div>
//         </div>
//     </div>
//   )
// }

// export default Banner






import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="relative pb-16"> {/* Adjusted padding-bottom for space */}
      <div className="relative w-full lg:h-[91vh]"> {/* Adjusted height for responsiveness */}
        <img 
          src="/img/Pro 15.jpg" 
          alt="Product showcase" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <div className="text-center font-bold text-4xl uppercase text-[#fff] p-4">
            <h2 className="mb-4 text-3xl md:text-4xl text-yellow-300">Welcome to GizmoHub</h2> {/* Adjusted font size for smaller screens */}
            <h2 className="pb-6 text-xl md:text-3xl text-gray-200">Find the best products here.</h2> {/* Adjusted font size for smaller screens */}
            <button className="mt-4">
              <Link 
                to="/product" 
                className="border-2 border-[#fff] p-2 text-[#fff] rounded-md capitalize bg-[#502274] hover:text-[#502274] hover:bg-white transition-colors duration-300"
              >
                See Products
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
