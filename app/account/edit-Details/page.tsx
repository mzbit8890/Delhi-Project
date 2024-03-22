import AccountEditDetails from "@/components/Account/editDetails/EditDetails"
import changed from "@/components/Account/editDetails/assets/chaanged.png"
import Image from "next/image"



const EditDetailsPage = () => {
return (
<div><AccountEditDetails/> <footer className=" py-4 flex justify-end shadow-top px-4  sm:px-6 md:px-8 lg:px-10 xl:px-12 fixed bottom-0 w-full ">

<button  className="text-white rounded-[10px] w-[119px] h-[35px]  bg-[#F65656] text-[11px] font-bold">Save Changes</button>

</footer></div>

)
}

export default EditDetailsPage