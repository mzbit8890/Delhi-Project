import IMG from "@../../../app/user_profile/profileimage.png"
import Image from "next/image"
import { useEffect, useState } from "react"




const UserProfile = () => {
    return (
       <>
       <div className="bg-[#091A47] ">
        <Image src={IMG} alt="Profile Image" className="w-[100px] h-[100px]"/>
       </div>
       </>
    )
}

export default UserProfile