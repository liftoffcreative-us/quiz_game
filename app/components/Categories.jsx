
import Link from 'next/link'
import React from 'react'

import Image from 'next/image';

const Categories = ({ allCategories }) => {

  // print out categories array
  console.log(allCategories);
  
  return (
    <div className='flex flex-col items-center justify-center w-3/4 h-3/4 bg-gray-900 rounded-xl'>
      <h1 className='my-6 text-4xl'>CATEGORIES</h1>
      <div className='flex justify-center items-start flex-wrap gap-6 w-[100%] h-full overflow-y-auto'>
        { allCategories.slice(0,16).map((category, index) => {
          const idNum = category.id
          
          console

          return(
            <Link key={index} href="/questions" className='border border-white flex flex-col items-center justify-center w-1/5 h-1/3 rounded-lg overflow-hidden'>
       
            <Image src={`/${idNum.toString()}.jpg`} alt="Category Image" width={1390} height={900} className='w-full h-[75%] bg-cover bg-right' />
            <div className='w-full h-[25%] flex items-center justify-center bg-blue-900 font-bold text-[.7rem] text-center'>{category.name}</div>
         
            </Link>
          )
        })
        
        }
      </div>
      
    </div>
  )
}

export default Categories