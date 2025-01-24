import React from 'react'

const Values = () => {
  return (
    <div className='bg-black'>
       
{/* Values Section */}
<div className="relative z-0 h-screen">
      
    <section className="px-40 pt-40 flex flex-col lg:flex-row items-center justify-between lg:px-40 py-16 gap-10"
      style={{paddingLeft: '120px', paddingRight: '120px'}}>
        <div className="w-full md:w-1/2 text-left space-y-4 ">
         <h1 className="text-2xl text-gray-200">Our Values</h1>
        <h2 className="text-6xl  text-white mb-4 "
        style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '600px',  }}>
         Our Company&apos;s Values
        </h2>
        </div>

        <div className="flex flex-col ">

        <p className="text-xl text-gray-200 pt-10 pl-20 mt-10 "
        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
         Collaboration fuels innovation and drives success. Wisematic fosters a culture of seamless collaboration.
        </p>
        </div>
      </section>

{/* Values Boxes */}
          <div className="container mx-auto px-20"
          style={{paddingLeft: '130px'}}>
         
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
             {/* Box 1 */}
              <div className="flex flex-col items-center bg-white/30 text-white text-center backdrop-blur-lg  z-10 p-6 w-[380px] h-[200px] rounded-lg shadow-md hover:scale-105 transition-all duration-300">

               <h3 className="text-3xl text-white font-bold mb-4"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Innovate with Insight</h3>
               <p className="text-center text-gray-300 text-lg"
               style={{ fontFamily: "'Poppins', sans-serif"}}>
               Harness the power of technology and insight to drive your business forward. Our expertise turns challenges into opportunities.
               </p>
             </div> 
            

          {/* Box 2 */}
             <div className="flex flex-col items-center bg-white/30 text-white text-center backdrop-blur-lg  z-10 p-6 w-[380px] h-[200px] rounded-lg shadow-md hover:scale-105 transition-all duration-300">

               <h3 className="text-3xl font-bold mb-4 text-white "
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
               >Empower your vision</h3>
               <p className="text-center text-gray-300 text-lg"
               style={{ fontFamily: "'Poppins', sans-serif" }}>
               Your vision, our mission. Together, we create solutions that transform ideas into reality and push boundaries.
               </p>
             </div>

             {/* Box 3 */}
             <div className="flex flex-col items-center bg-white/30 text-white text-center backdrop-blur-lg  z-10 p-6 w-[380px] h-[200px] rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              
               <h3 className="text-3xl font-bold text-white mb-4"
               style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Lead The Future</h3>
               <p className="text-center text-gray-300 text-lg"
               style={{ fontFamily: "'Poppins', sans-serif"}}>
                 Stay ahead with forward-thinking strategies and cutting-edge technology. Let&apos;s pioneer the future of your industry.
               </p>
             </div>
           </div>
         </div>
   
 </div>

    </div>
  )
}

export default Values
