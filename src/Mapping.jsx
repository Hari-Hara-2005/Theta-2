import React from 'react'

function Mapping() {
  return (
    
    <div className='flex bg-slate-900 py-40 justify-center gap-20'>
    
      <div className='bg-white shadow-2xl p-10 h-[400px] w-[555px]'>
        <h1 className='text-3xl font-bold  '>Location</h1>
        <p className='mt-2 text-lg font-bold '>Get directions to our event center</p>
        <p className='mt-6 text-3xl  font-bold  '>Address:</p>
        <p className='text-lg font-bold'>01 Pascale Springs Apt. 339,<br/> NY City
          United State

        </p>
        <div className='flex gap-10 mt-6'>
          <div>
            <p className='text-slate-700'>Phone:</p>
            <h2 className='text-lg font-bold'>(+12)-345-67-8910</h2>
          </div>
          <div>
            <p className='text-slate-700'>
              Email:</p>
            <h3 className='text-lg font-bold'>info.colorlib@gmail.com</h3>
          </div>
        </div >
        <p>Website:</p>
        <h6>https://conference.colorlib.com</h6>
      </div>
      <div>
        <iframe width="555px" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=kovil%20devarayanpettai,papanasam%20,thanjaver+(Education%20web)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>

      </div>
    </div>

  )
}
export default Mapping;
