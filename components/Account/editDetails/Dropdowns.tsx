import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import arrow from "@/components/Account/editDetails/assets/lll.png"
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { ArrowBackIos, ArrowBackIosNew, ArrowBackIosNewRounded, ArrowBackIosNewTwoTone, ArrowDropDown, ArrowDropUpSharp } from '@mui/icons-material';

export const DateOfBithDropdown = () => {
const [selectedDate, setSelectedDate] = useState(null);
const handleDateChange = (date) => {
setSelectedDate(date);
};


return (
<div className=" space-x-4">
{/* Date of Birth Calendar */}
<div className="relative h-[40px] w-full mt-1 border-white flex justify-between pl-[14px] items-center rounded-[10px] border">
<div className="flex-grow ">
<DatePicker

selected={selectedDate}
onChange={handleDateChange}
dateFormat="dd MMMM yyyy"
placeholderText="22 May 2000"
style={{ '--tw-input-placeholder-color': '#0C2D57' }}
calendarClassName="custom-calendar"
className="focus:outline-none text-[#454545] w-[100%] cal7:w-[115%] cal6:w-[130%] cal5:w-[120%] cal4:w-[140%] cal3:w-[160%] cal2:w-[180%] cal1:w-[200%] "
/>
</div>
<div className="absolute top-0 left-0 h-[40px] w-full border-[#0C2D57]/25 flex justify-between pl-[14px] items-center rounded-[10px] border z-10 pointer-events-none">
{/* Content of the div */}

</div>

<button className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
<Image src={arrow} alt="Dropdown arrow" className="w-[12px] h-[12px]"/>
</button>

</div>

{/* Country Dropdown */}
</div>
);
};
export const CountryDropdown = () => {

const [selectedCountry, setSelectedCountry] = useState('');
const handleCountryChange = (e) => {
setSelectedCountry(e.target.value);
};
return (
<div className="relative w-full">
<div className="flex items-center border border-[#0C2D57]/25 rounded-[10px] overflow-hidden">
<select
className="text-[#454545] appearance-none h-[40px] w-full border-0 outline-none pl-[14px] pr-8"
value={selectedCountry}
onChange={handleCountryChange}
>
<option value="India">India</option>
<option value="USA">USA</option>
<option value="Canada">Canada</option>
<option value="UK">UK</option>
{/* Add more countries as needed */}
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700">
<Image src={arrow} alt="Dropdown arrow" className="w-[12px] h-[12px]" />
</div>
</div>
</div>

)
}