import SidebarItems from '@/utils/SidebarItems'
import Image from 'next/image'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar  min-w-[264px] h-[100vh] overflow-y-auto'>
        <div className='p-10 flex items-center justify-center'>
        <Image
        width={135}
        height={14}
        alt='Logo'
        src="/vision-ui-logo.png"
        />
        </div>
        <Image
        src="/vector.png"
        width={235}
        height={0}
        className='opacity-80'
        alt='vector image'
        />
        <div className='h-[87%] mx-5 mt-5 flex flex-col justify-between items-center'>
        <div className='w-[219px] h-[408px] '>
            <SidebarItems/>
        </div>
<div className='mb-4'>
        <Image
        src="/need-help.png"
        width={218}
        height={169}
        alt='need help image'
        />
        <button className=' button py-3 px-6 w-full mt-4 hover:scale-[1.02] transition-all duration-300 font-semibold rounded-xl text-xs'>Update to PRO</button>
</div>
        </div>
    </div>
  )
}
