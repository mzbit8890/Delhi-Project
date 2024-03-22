"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import arrow from "@/components/Account/wishlists/assets/accrow.png"

const BackButton = () => {
let {back} = useRouter()
let Back = () => {
return(
back()
)
}
return (
<button>
<Image src={arrow} onClick={Back} alt="Arrow" className="w-[25px] h-[25px]" />
</button>
)
}

export default BackButton