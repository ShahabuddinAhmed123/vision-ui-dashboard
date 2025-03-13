import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[72px] flex items-center justify-between max-[1024px]:flex-col max-[1024px]:h-auto max-[1024px]:py-4 max-[1024px]:text-center'>
      <p className='text-[14px] max-[1024px]:mb-2'>
      @ 2021, Made with ❤️    by Simmmple&Creative Timfor a better web
      </p>
      <div className='flex items-center gap-10 font-semibold max-[768px]:gap-5'>
        <p>Marketplace</p>
        <p>Blog</p>
        <p>Licence</p>
      </div>
    </div>
  )
}

export default Footer
