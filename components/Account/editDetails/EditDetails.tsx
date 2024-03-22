"use client"
import Image from 'next/image';
import BackButton from '../BackButton'
import Flogo from "@/components/Account/editDetails/assets/flogo.png"
import plusIcon from "@/components/Account/editDetails/assets/plus.png"
import keyIcon from "@/components/Account/editDetails/assets/keyIcon.png"

import Link from 'next/link';
import { useState } from 'react';
import { CountryDropdown, DateOfBithDropdown } from './Dropdowns';




const AccountEditDetails = () => {

return (
<div className="mx-2 xxs3:mx-3 xxs:mx-6 ">
<div className={`flex gap-3 items-center mt-4 font-bold text-[20px] text-[#575757]`}>
<BackButton />
<h1 className="hover:cursor-default">
Edit Details
</h1>
</div>
<div className='flex justify-between gap-3 cal8:gap-5 cal7:gap-7 mt-10 items-center'>
<Image src={Flogo} alt="Flogo" className='w-[43px] h-[43px]'/>
<button className='h-[35px] flex justify-center items-center gap-2 text-white rounded-[10px] w-[313px] bg-[#F65656] text-[12px] font-bold text-center'>
<h2>Add Photo</h2>
<Image src={plusIcon} alt="Add Icon" className='w-[18px] h-[18px]'/></button>
</div>
<div className='mt-4'>
<p className='text-[11px] text-[#454545]/70 font-semibold pl-[14px] '>Full Name</p>
<div className='h-[40px] w-full mt-1 border-[#0C2D57]/25 flex pl-[14px] items-center rounded-[10px] border'>
<input type="text" placeholder="Fahad Bhat" className=' border-0 placeholder:text-[#454545] text-[#454545] w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent text-[16px] ' /></div>

</div>
<div className='mt-3'>
<p className='text-[11px] text-[#454545]/70 font-semibold pl-[14px] '>Date of Birth</p>
<DateOfBithDropdown/>

</div>
<div className='mt-3'>
<p className='text-[11px] text-[#454545]/70 font-semibold pl-[14px] '>Nationality</p>
<CountryDropdown/>

</div>
<div className='mt-3'>
<p className='text-[11px] text-[#454545]/70 font-semibold pl-[14px] '>Email</p>
<div className='h-[40px] w-full mt-1 border-[#0C2D57]/25 flex pl-[14px] items-center rounded-[10px] border'>
<input type="text" placeholder="fahad123@gmail.com" className='placeholder:text-[#454545] border-0 text-[#454545] w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent text-[16px] ' /></div>

</div>
<div className='flex gap-[6px] items-center mt-7'>
<Image src={keyIcon} alt="keyIcon" className='w-[14px] h-[14px]'/>
<Link href="/account/edit-Details" className='underline text-[11px] font-bold text-[#454545]'>Update Password</Link>
</div>


</div>

)
}

export default AccountEditDetails