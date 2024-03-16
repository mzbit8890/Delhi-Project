// import Image from "next/image"
// import Bg from "@../../../components/MunazzaComponent/pp.png"
// import IMG from "@../../../components/MunazzaComponent/left.png"
// import Line from "@../../../components/MunazzaComponent/line.png"
// import Interior from  "@../../../components/MunazzaComponent/interior.png"
// import people from  "@../../../components/MunazzaComponent/people.png"
// import Wrapper from "./Wrapper"
// import Featured from "@../../../components/MunazzaComponent/feat.png"

// // import "./globals.css"
// const MunazzaFacilities = () => {
//     return (
//     <Wrapper>
//         <div className="">
//      {/* <div className="grid grid-cols-2 mt-16 gap-x-20 "> */}
//      <div className="flex justify-center mt-16 2xl:gap-40 gap-10">
//      <div className="col-span-1 text-xl text-blue-500 ">
//       <h2 className="font-bold text-[40px] text-[#141414]/90 2xl:text-[50px] ">Why Stay With Us</h2>
//    <Image src={Bg} alt="Why Stays With us" className="mt-10 w-[800px] "/>




//     </div>   


//      <div className="col-span-1">
// <Image src={IMG} alt="" className="w-[700px] 2xl:[800px]"/>
//     </div>
//     </div>

//      </div>
//     </Wrapper>

//     )
// }

// export default MunazzaFacilities

import Image from "next/image"
import Bg from "./kk.png"
import mm from "./bg2.png"
import icon from "./oop.png"
import watch from "./watch.png"
import party from "./party.png"
import dumble from "./dumble.png"
import speed from "./speed.png"

import bills from "./bills.png"
import partry from "./partry.png"
import events from "./events.png"
import gym from "./gym.png"
import move from "./move.png"
import day from "./day.png"

import Wrapper from "./Wrapper"


// import "./globals.css"
const MunazzaFacilities = () => {
    return (
        <Wrapper>
            <div className="hidden mdd:flex">
                {/* <div className="grid grid-cols-2 mt-16 gap-x-20 "> */}
                <div className="flex justify-center items-center my-16 2xl:gap-40 gap-10">
                    <div className="col-span-1 text-xl text-blue-500 ">
                        <h2 className="font-bold text-3xl mdd:text-[40px] text-[#141414]/90 2xl:text-[50px] ">Why Stay With Us</h2>
                        <Image src={Bg} alt="Why Stays With us" className="mt-10 w-[900px] " />




                    </div>


                    <div className="col-span-1">
                        <Image src={mm} alt="" className="w-[900px] object-fit rounded-[25px] 2xl:[800px]" />
                    </div>
                </div>

            </div>
            <div className=" mdd:hidden flex justify-center px-2 ">
                {/* <div className="grid grid-cols-2 mt-16 gap-x-20 "> */}
                <div className="my-8 ">
                    <h2 className="font-bold text-[25px] smm:text-[40px] text-[#454545] text-center mdd:text-[50px] ">Why Stay With Us</h2>
                    <div className="flex gap-4 op:justify-center ">
                        <div className="">
                            <div className=" flex gap-1 op:gap-4 items-center mt-6">

                                <Image src={icon} alt="" className="w-[30px] h-[30px] op:h-[40px] op:w-[43px]" />

                                <button className="flex items-center justify-center w-full h-[50px] op:w-[160px]">
                                    <Image src={bills} alt="Bills"/>
                                   
                                </button>



                            </div>
                            <div className=" flex gap-1 op:gap-4 items-center mt-2 boxes:mt-6">

                                <Image src={dumble} alt="" className="op:mr-1 w-[30px] h-[30px] op:h-[40px] op:w-[37px]" />

                                <button className="flex items-center justify-center w-full h-[50px] op:w-[160px]">
                                    <Image src={gym} alt="Gym on the go"/>
                                   
                                </button>



                            </div>
                            <div className=" flex gap-1 op:gap-4 items-center mt-2 boxes:mt-6">

                                <Image src={speed} alt="" className="op:h-[40px] w-[30px] h-[30px] op:w-[43px]" />

                                <button className="flex items-center justify-center w-full h-[50px] op:w-[160px]">
                                    <Image src={events} alt="Events & activities"/>
                                   
                                </button>



                            </div>
                        </div>
                        <div className="boxes:flex hidden justify-center items-center ">
                            <svg width="6" height="250" viewBox="0 0 6 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.75562 187.667C4.22837 187.667 5.42228 186.473 5.42228 185C5.42228 183.528 4.22837 182.334 2.75562 182.334C1.28286 182.334 0.0889485 183.528 0.0889485 185C0.0889485 186.473 1.28286 187.667 2.75562 187.667ZM2.75562 5.66635C4.22837 5.66635 5.42228 4.47244 5.42228 2.99968C5.42228 1.52692 4.22837 0.333008 2.75562 0.333008C1.28286 0.333008 0.0889485 1.52692 0.0889485 2.99968C0.0889485 4.47244 1.28286 5.66635 2.75562 5.66635ZM3.25562 185L3.25562 2.99968H2.25562L2.25562 185H3.25562Z" fill="#F65656" fill-opacity="0.15" />
                            </svg>
                        </div>
                        <div className="boxes:hidden flex items-center">
                            <svg width="5" height="200" viewBox="0 0 6 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.75562 187.667C4.22837 187.667 5.42228 186.473 5.42228 185C5.42228 183.528 4.22837 182.334 2.75562 182.334C1.28286 182.334 0.0889485 183.528 0.0889485 185C0.0889485 186.473 1.28286 187.667 2.75562 187.667ZM2.75562 5.66635C4.22837 5.66635 5.42228 4.47244 5.42228 2.99968C5.42228 1.52692 4.22837 0.333008 2.75562 0.333008C1.28286 0.333008 0.0889485 1.52692 0.0889485 2.99968C0.0889485 4.47244 1.28286 5.66635 2.75562 5.66635ZM3.25562 185L3.25562 2.99968H2.25562L2.25562 185H3.25562Z" fill="#F65656" fill-opacity="0.15" />
                            </svg>
                        </div>


                        <div className="">
                            <div className=" flex gap-1 op:gap-5 items-center mt-6">

                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0)" fill-opacity="0.9"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_952_170" transform="scale(0.01)"/>
</pattern>
<image id="image0_952_170" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

<button className="flex items-center justify-center w-full h-[50px] op:w-[160px]">
                                    <Image src={move} alt="Move-in ready"/>
                                   
                                </button>



                            </div>
                            <div className=" flex gap-1 op:gap-4 items-center mt-2 boxes:mt-6">

                                <Image src={watch} alt="" className="w-[25px]  h-[25px] boxes:w-[30px] boxes:h-[30px] op:h-[38px]  op:w-[35px]" />

                                <button className="flex items-center justify-center w-full h-[50px] op:w-[160px]">
                                    <Image src={day} alt="Day/monthly stays"/>
                                   
                                </button>



                            </div>
                            <div className=" flex gap-1 op:gap-3 items-center mt-2 boxes:mt-6">
                              
                                    <Image src={party} alt="" className="w-[25px] h-[25px] boxes:w-[30px] boxes:h-[30px] op:h-[40px] op:w-[40px]" />
                              
                                

                                <button className="flex items-center justify-center w-full h-[50px] op:w-[160px]">
                                    <Image src={partry} alt="Find Party Nearby"/>
                                   
                                </button>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>

    )
}

export default MunazzaFacilities