import React from 'react'

const BlogCard = ({item}) => {
  return (
    <div key={item.id} className='text-white text-center border-solid border-2 border-yellow-500 pb-5'>
          <div className=' overflow-hidden'>
            <img src={item.img} alt='Food items' className='w-full h-auto max-h-60 object-cover hover:scale-125 transition duration-500 cursor-pointer' />
          </div>
            <div className="mt-4 mb-2 mx-2">
              <p className='text-2xl'>{item.title}</p>
              <p className='text-yellow-500 text-lg'>{item.date}</p>
              <p className='font-sans text-sm'>{item.des}</p>
              <button className='text-white bg-yellow-500 p-1 px-2 mt-4 hover:pl-5 hover:pr-5 hover:duration-300 hover:opacity-50'>Read More</button>
            </div>
          </div> 
  )
}

export default BlogCard