import first from "@/components/HomeSection/Destination/pl2.png"
import green from "@/components/HomeSection/Destination/green3.png"
import sun from "@/components/HomeSection/Destination/ooo.png"
import build from "@/components/HomeSection/Destination/build2.png"
import castle from "@/components/HomeSection/Destination/castle2.png"
import delhi from "@/components/HomeSection/Destination/delhi2.png"
import kumaon from "@/components/HomeSection/Destination/kumau.png"
import amrit from "@/components/HomeSection/Destination/amrit2.png"

import mapIcon from "@/components/AllDestinations/map.png"
import Image from 'next/image'
let SecondRow = [
    {
        img: first,
        text: "Karnataka",
        altText: "Karnataka image"
    },
    {
        img: green,
        text: "Kerela",
        altText: "Kerela image"
    },
    {
        img: sun,
        text: "Jaisalmer",
        altText: "Jaisalmer image"
    },
    {
        img: build,
        text: "Agra",
        altText: "Agra image"
    },
    {
        img: castle,
        text: "Jaipur",
        altText: "Jaipur image"
    },
    {
        img: delhi,
        text: "Delhi",
        altText: "Delhi image"
    },
    {
        img: kumaon,
        text: "Kumaon",
        altText: "Kumaon image"
    },
    {
        img: amrit,
        text: "Amritsar",
        altText: "Amritsar image"
    },
    {
        img: first,
        text: "Karnataka",
        altText: "Karnataka image"
    },
    {
        img: green,
        text: "Kerela",
        altText: "Kerela image"
    },
    {
        img: sun,
        text: "Jaisalmer",
        altText: "Jaisalmer image"
    },
    {
        img: build,
        text: "Agra",
        altText: "Agra image"
    },
    {
        img: castle,
        text: "Jaipur",
        altText: "Jaipur image"
    },
    {
        img: delhi,
        text: "Delhi",
        altText: "Delhi image"
    },
    {
        img: kumaon,
        text: "Kumaon",
        altText: "Kumaon image"
    },
    {
        img: amrit,
        text: "Amritsar",
        altText: "Amritsar image"
    },
    {
        img: first,
        text: "Karnataka",
        altText: "Karnataka image"
    },
    {
        img: green,
        text: "Kerela",
        altText: "Kerela image"
    },
    {
        img: sun,
        text: "Jaisalmer",
        altText: "Jaisalmer image"
    },
    {
        img: build,
        text: "Agra",
        altText: "Agra image"
    },
    {
        img: castle,
        text: "Jaipur",
        altText: "Jaipur image"
    },
    {
        img: delhi,
        text: "Delhi",
        altText: "Delhi image"
    },
    {
        img: kumaon,
        text: "Kumaon",
        altText: "Kumaon image"
    },
    {
        img: amrit,
        text: "Amritsar",
        altText: "Amritsar image"
    },
]

const Locations2 = () => {
    return (
        <div className='mt-[92px]'>

            <h2 className='bg-[#F65656]/15 px-3 sm:px-6 ui:px-0 py-6 text-[15px] sm:text-[20px] font-bold flex items-center justify-center'>
                BOOK YOUR ESCAPE NOW AND ENJOY A FLAT 29% OFF YOUR STAY!
            </h2>

            <div className='grid grid-cols-2 ui2:grid-cols-3 ui:grid-cols-4 grid-rows-5 justify-center gap-4 sm:gap-8 ui:gap-10 mb-36 mx-3 sm:mx-6 ui3:mx-12 ui:mx-14 mt-12'>
                {
                    SecondRow.map((item) => {
                        return (

                            <div className='h-[189px] sm:h-[230px] ui3:h-[380px] rounded-[15px] w-full mt-1 sm:mt-3 relative md:hover:scale-110 sm:duration-300'>
                                <Image src={item.img} alt={item.altText} className=' row-span-1 object-cover rounded-[20px] h-[189px] sm:h-[230px] ui3:h-[380px] ui:h-[390px]' />
                                <div className="absolute inset-0 bg-black/10 flex justify-center rounded-[15px] px-3 xs:px-8 pt-32">
                                    {/* <p className="text-white text-[30px] font-bold">{item.text}</p> */}
                                    <div className='flex xs:justify-end sm:h-[130px] ui3:h-[430px] items-center w-full '>
                                        <button
                                            className="w-full h-[30px] sm:h-[38px] text-[11px] xs:text-[13px] sm:text-[15px] bg-white hover:border-white font-bold text-center xs:pb-2 rounded-[25px] text-[#454545] hover:bg-white/80"

                                        >
                                            <div className="flex justify-center gap-1 xs:gap-2 items-center uppercase pt-1">
                                                <Image src={mapIcon} alt="Map Icon" className="h-4 w-4 xs:h-5 xs:w-5" />
                                                <p className="">{item.text}</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default Locations2
