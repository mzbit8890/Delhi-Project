"use client"
import { Hind } from "next/font/google";
import { useRouter } from "next/navigation"
import BlackIcon from "./blackarrow.png"
import Image from "next/image"
import CurrencySelector from "./CurrencySelector";
import Horizontall from "./horizontalline.png"
import ee from "./eed.png"
import Horizontal from "./himg.png"
import Dustbin from "./dustbin.png"
import Logout from "./login.png"
import DistanceUnit from "./DistanceUnit";

const hind = Hind({ subsets: ["latin"], weight: ['400'], variable: '--font-hind' });


const options = [
    { value: 'INR', label: 'INR', symbol: '₹' },
    { value: 'USD', label: 'USD', symbol: '$' },
    { value: 'EUR', label: 'EUR', symbol: '€' },
    { value: 'JPY', label: 'JPY', symbol: '¥' }, // Japanese Yen (JPY)
  { value: 'AUD', label: 'AUD', symbol: 'A$' }, // Australian Dollar (AUD)
  { value: 'CAD', label: 'CAD', symbol: 'C$' }, // Canadian Dollar (CAD)
  { value: 'INR', label: 'INR', symbol: '₹' }, // Indian Rupee (INR)
  { value: 'CHF', label: 'CHF', symbol: 'CHF' }, // Swiss Franc (CHF)
  { value: 'SGD', label: 'SGD', symbol: 'S$' }, // Singapore Dollar (SGD)
  { value: 'NZD', label: 'NZD', symbol: 'NZ$' }, // New Zealand Dollar (NZD)
  { value: 'BRL', label: 'BRL', symbol: 'R$' }, // Brazilian Real (BRL)
  { value: 'MXN', label: 'MXN', symbol: 'Mex$' }, // Mexican Peso (MXN)
  { value: 'RUB', label: 'RUB', symbol: '₽' }, // Russian Ruble (RUB)
    // Add more currency options as needed
  ];
const options1 = [
    { value: 'Kilometers', label: 'Kilometers', symbol: 'Km' },
    { value: 'Meters', label: 'Meters',symbol: 'm' },
    { value: 'Centimeters',label: 'Centimeters', symbol: 'cm' },
    { value: 'Millimeters',label: 'Millimeters', symbol: 'mm' },
    { value: 'Inches', label: 'Inches',symbol: 'in' },
    { value: 'Feet', label: 'Feet',symbol: 'ft' },
    { value: 'Yards', label: 'Yards',symbol: 'yd' },
    { value: 'Miles', label: 'Miles',symbol: 'mi' },
    // Add more currency options as needed
  ];




const page = () => {
    const {back} = useRouter()
    function Back () {
        return back()
    }
  return (
    <div className="swe:hidden block  cecr:mx-4 mx-3">
   <div className={hind.variable}>
     <div className="flex  mt-5  gap-x-4">
    <button onClick={Back} className="text-[]">
            <Image src={BlackIcon} alt="Back Button Icon" className="w-[25px] h-[25px] "/>
         </button>
    <h2 className="text-[#454545] swt:text-[20px] iwd:text-[18px] wef:text-[16px]  cecr:text-[15px] text-[14px] font-bold">Settings</h2>
    </div>
    <div className="flex justify-between items-center mt-7">
    <h2 className="text-[#454545]/90 swt:text-[16px] iwd:text-[14px] wef:text-[12px] cecr:text-[10px] text-[9px]">Currency</h2>
    
    <CurrencySelector options={options} />

    </div>


    <div className="flex justify-between items-center mt-6">
    <h2 className="text-[#454545]/90 swt:text-[16px] iwd:text-[14px] wef:text-[12px] cecr:text-[10px] text-[9px]">Distance unit</h2>
    
    <DistanceUnit options={options1} />

    </div>
    <Image src={Horizontall} alt="" className="w-[390px] text-[#0C2D57]/15 mt-7"/>
   <div className="flex justify-between items-center mt-6">
   <h2 className="text-[#454545]/90 swt:text-[16px] iwd:text-[14px] wef:text-[12px] cecr:text-[10px] text-[9px] font-custom-normal">Privacy Preferences</h2>
    <Image src={ee} alt="" className="cecr:w-[12px] w-[10px] cecr:h-[12px] h-[10px]"/>
   </div>

   <div className="flex justify-between items-center mt-6">
   <h2 className="text-[#454545]/90 swt:text-[16px] iwd:text-[14px] wef:text-[12px] cecr:text-[10px] text-[9px] font-custom-normal">Advertising & 
   <br className="cecr:hidden block" />
   Analytics consent</h2>
    <Image src={ee} alt="" className="cecr:w-[12px] w-[10px] cecr:h-[12px] h-[10px]"/>
   </div>

   <div className="flex justify-between items-center mt-6">
   <h2 className="text-[#454545]/90 swt:text-[16px] iwd:text-[14px] wef:text-[12px] cecr:text-[10px] text-[9px] font-custom-normal">Other</h2>
    <Image src={ee} alt="" className="cecr:w-[12px] w-[10px] cecr:h-[12px] h-[10px]"/>
   </div>

   <div className="flex justify-between items-center mt-6">
   <h2 className="text-[#454545]/90 swt:text-[16px] iwd:text-[14px] wef:text-[12px] cecr:text-[10px] text-[9px] font-custom-normal">Help</h2>
    <Image src={ee} alt="" className="cecr:w-[12px] w-[10px] cecr:h-[12px] h-[10px]"/>
   </div>


   <Image src={Horizontal} alt="" className="w-[390px] mt-7"/>

   <div className="flex justify-between mt-5">
    <button className="flex items-center cecr:gap-1 gap-0">
        <Image src={Dustbin} className="cecr:w-[15px] w-[13px] cecr:h-[15px] h-[13px]" alt="logo"/>
        <h2 className="wef:text-[12px] cecr:text-[10px]  text-[9px] font-bold underline text-[#F65656]">Delete Account</h2>
    </button>
    <button className="flex items-center cecr:gap-1 gap-0">
        <Image src={Logout} className="cecr:w-[15px] w-[13px] cecr:h-[15px] h-[13px]" alt="logo"/>
        <h2 className="wef:text-[12px] cecr:text-[10px] text-[9px] font-bold underline text-[#454545]">Logout</h2>
    </button>
   </div>
   </div>
    </div>
  )
}

export default page
