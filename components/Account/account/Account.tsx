import { Hind } from "next/font/google";
import Image from "next/image";
import search from "@/components/Account/account/assets/kkkk.png"
import edit from "@/components/Account/account/assets/edit45.png"
import heart from "@/components/Account/account/assets/heart.png"
import settings from "@/components/Account/account/assets/settings23.png"
import profile from "@/components/Account/account/assets/profile4.png"
import Link from "next/link";
// import edit from "@/public/edit.png"
// import profile from "@/public/profi.png"
// import settings from "@/public/setti.png"
// import wishlist from "@/public/wishlist.png"

let pages = [
{
pageName: "Edit Details",
svg: "/edit.png",
},
{
pageName: "My Profile",
svg: "/profi.png",
},
{
pageName: "Settings",
svg: "/setti.png",
},
{
pageName: "Wishlists",
svg: "/wishlist.png",
},

]


const hind = Hind({ subsets: ["latin"], weight: ['400'], variable: '--font-hind' });
const hind2 = Hind({ subsets: ["latin"], weight: ['300'], variable: '--font-hind' });
const hind3 = Hind({ subsets: ["latin"], weight: ['600'], variable: '--font-hind' });
const hind4 = Hind({ subsets: ["latin"], weight: ['700'], variable: '--font-hind' });

const page = () => {
return (
<div className={hind.variable} >
<div className="px-2 cal7:px-3 calen34:px-5 lg:px-20 pb-[88px] pt-11 lg:py-24 flex items-center bg-gradient-to-b from-[#06B5AA] to-[#01938A] gap-3">
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="48" height="48" rx="24" fill="#F65656" />
<rect x="1" y="1" width="48" height="48" rx="24" stroke="white" stroke-width="2" />
<path d="M32.81 17.586H23.698V24.352H31.654V27.854H23.698V37H19.38V14.084H32.81V17.586Z" fill="white" />
</svg>
<div >
<h1 className="text-[20px] font-bold sm:text-4xl lg:text-5xl text-white" >Fahad Bhat</h1>
</div>


</div>
<div className=" relative -top-16 rounded-[30px] bg-white">


<div >

<div className="px-2 cal7:px-3 calen34:px-5 lg:px-20 justify-between md:justify-start flex pt-10 md:gap-24 lg:gap-36 text-xl font-thin items-center" >
<Link href="/account/edit-Details">
<div className="flex ml-2 h-[40px] w-[40px] calen35:w-[44px] cal4:w-[50px] calen35:h-[44px] cal4:h-[50px] justify-center items-center bg-[#F37C7E]/15 rounded-[25px]">
<Image src={edit} alt="Search icon" className="h-[20px] w-[20px] cal4:h-[25px] cal4:w-[25px]" />

</div>

<h2 className="text-[10px] cal7:text-[11px] cal4:text-[12px] font-[400] text-[#454545] sm:text-xl text-center calen34:pl-1 pt-[1px]">Edit Details</h2>
</Link>
<Link href="/account/user_profile">
<div className="flex ml-2 h-[40px] w-[40px] calen35:w-[44px] cal4:w-[50px] calen35:h-[44px] cal4:h-[50px] justify-center items-center bg-[#03A9F4]/15 rounded-[25px]">
<Image src={profile} alt="Search icon" className="h-[20px] w-[20px] cal4:h-[25px] cal4:w-[25px]" />

</div>

<h2 className="text-[10px] cal7:text-[11px] cal4:text-[12px] font-[400] text-[#454545] sm:text-xl text-center pl-1 pt-[1px]">My Profile</h2>
</Link>
<Link href="/account/settings">
<div className="flex h-[40px] w-[40px] calen35:w-[44px] cal4:w-[50px] calen35:h-[44px] cal4:h-[50px] ml-2 justify-center items-center bg-[#808991]/15 rounded-[25px]">
<Image src={settings} alt="Search icon" className="h-[20px] w-[20px] cal4:h-[25px] cal4:w-[25px]" />

</div>

<h2 className="text-[10px] cal7:text-[11px] cal4:text-[12px] font-[400] text-[#454545] sm:text-xl text-center pl-1 pt-[1px]">Settings</h2>
</Link>
<Link href="/account/wishlists">
<div className="flex ml-2 mr-1 calen35:mr-2 h-[40px] w-[40px] calen35:w-[44px] cal4:w-[50px] calen35:h-[44px] cal4:h-[50px] justify-center items-center bg-[#E63460]/15 rounded-[25px]">
<Image src={heart} alt="Search icon" className="h-[20px] w-[20px] cal4:h-[25px] cal4:w-[25px]" />

</div>

<h2 className="text-[10px] cal7:text-[11px] cal4:text-[12px] font-[400] text-[#454545] sm:text-xl text-center pl-1 pt-[1px]">Wishlists</h2>
</Link>
</div>
<div className="px-2 cal7:px-3 calen34:px-5 sm:px-12 lg:px-20 pt-7">
<div ><h3 className="text-[17px] sm:text-3xl font-bold text-[#454545]">My Travel Stats</h3></div>

<div ><p className="text-[12px] sm:text-xl text-[#454545]">No countries or properties visited yet.</p></div>
</div>
<button className="mx-2 cal7:mx-3 calen34:mx-5 sm:mx-12 lg:mx-20 mt-6 w-[152px] px-3 h-[39px] border-[2px] rounded-[1.8rem] border-[#F65656] gap-2 flex items-center">
<Image src={search} alt="Search icon" className="h-[20px] w-[20px]" />
<div >
<p className="text-[#F65656] font-bold text-[13px] sm:text-xl">Start Exploring</p>
</div>



</button>
</div>



</div>

</div>
);
};

export default page;