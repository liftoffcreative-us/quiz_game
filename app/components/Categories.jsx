
import Link from 'next/link'
import React from 'react'

const Categories = ({ allCategories }) => {

  // print out categories array
  console.log(allCategories);

  return (
    <div className='flex flex-col items-center justify-center w-3/4 h-3/4 bg-gray-900 rounded-xl'>
      <h1 className='my-6 text-4xl'>CATEGORIES</h1>
      <div className='flex items-start flex-wrap gap-6 w-[80%] h-full'>
        <Link href="/questions" className='border border-white flex flex-col items-center justify-center w-1/6 h-1/4 rounded-lg overflow-hidden'>
       
          <div className='w-full h-full bg-[url("../public/History.jpg")] bg-cover bg-right'></div>
          <div className='w-full flex items-center justify-center bg-blue-900 font-bold text-lg'>HISTORY</div>
         
        </Link>
        
      </div>
      
    </div>
  )
}

export default Categories