import Image from "next/image"
import item1 from "@/components/Account/wishlists/assets/1item.png"
import item2 from "@/components/Account/wishlists/assets/2item.png"
import item3 from "@/components/Account/wishlists/assets/3item.png"
import item4 from "@/components/Account/wishlists/assets/3image.png"
import Delete from "@/components/Account/wishlists/assets/delete.png"
import { Hind } from "next/font/google";
import property from "@/components/Account/wishlists/assets/property.png"
import BackButton from "../BackButton"


let items = [
{
img: item1,
alt: "item1",
listText: "My List 1",

},
{
img: item2,
alt: "item2",
listText: "London",

},
{
img: item3,
alt: "item3",
listText: "Paris",

},
{
img: item4,
alt: "item4",
listText: "Berlin",

},
]

const hind = Hind({ subsets: ["latin"], weight: ['400'], variable: '--font-hind' });

const AccountWishlists = () => {
return (
<div className={`mx-2 xxs3:mx-3 xxs:mx-5 ${hind.variable}`}>
<div className={`flex gap-3 items-center mt-4 font-bold text-[20px] text-[#575757]`}>
<BackButton/>
<h1 className="hover:cursor-default">
Wishlists
</h1>
</div>
<div className="">
{
items.map((item) => {
return (
<div className="flex justify-center mt-7">
<div className="flex items-center gap-2 xxs2:gap-3 w-[390px] h-[76px] xxs:h-[80px] border pl-1 pr-3 xxs:pr-5 xxs:py-1 border-[#0C2D57]/15 rounded-[15px]">
<Image src={item.img} alt={item.alt} className="w-[60px] h-[62px] xxs3:w-[63px] xxs3:h-[65px] xxs:w-[70px] xxs:h-[70px] object-cover rounded-[10px]" />
<div className="flex justify-between w-full">
<div >
<h3 className="text-[12px] xxs2:text-[14px] font-bold text-[#454545] hover:cursor-default">{item.listText}</h3>
<div className="flex gap-1 items-center justify-between">

<Image src={property} alt="Property" className="w-[10px] h-[10px] object-cover" />
<p className="text-[10px] xxs:text-[12px] font-[400] text-[#454545] gap-[2px]">1<span>Property</span></p>


</div>

</div>
<button className=" "><Image src={Delete} alt="Delete icon" className="w-[17px] h-[17px] xxs2:w-[20px] xxs2:h-[20px]" /></button>
</div>
</div>
</div>
)
})
}

</div>
<div className="flex justify-center mt-8">
<button className=" font-bold text-[#454545] ">
+ <span className="underline font-bold text-[12px]">Create a new list</span>
</button>
</div>

</div>
)
}

export default AccountWishlists