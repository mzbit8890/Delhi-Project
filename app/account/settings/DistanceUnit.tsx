import { useState, useRef, useEffect } from 'react';
import DropDownArrow from "./dropdown-arrow.png";
import Image from "next/image";

const DistanceUnit = ({ options }: { options: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const label = selectedOption.label;
  const symbol = selectedOption.symbol;

  return (
    <div className="relative inline-block">
    <button
      onClick={toggleDropdown}
      className="flex items-center border-b-2 border-transparent outline-none"
    >
      <span className="mr-1 font-bold text-[#454545] swt:text-[15px] iwd:text-[13px] wef:text-[11px] cecr:text-[9px] gft:text-[8px] text-[7px] relative">
        {label} ({symbol})
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#454545]"></span>
      </span>
      <Image src={DropDownArrow} alt="Dropdown Arrow" className="cecr:w-[12px] w-[10px] cecr:h-[12px] h-[10px]" />
    </button>

    {isOpen && (
      <div
        className="absolute bg-white border border-gray-200 rounded-md shadow-lg z-10 overflow-y-auto max-h-40" // Adjust max height as needed
        style={{
          top: dropdownRef.current?.getBoundingClientRect().bottom + window.scrollY,
          left: dropdownRef.current?.getBoundingClientRect().left - 100, // Adjust the margin-right value as needed
        }}
      >
        {options.map((option: any) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect(option)}
            className="w-[130px] px-2 py-2 text-left wef:text-[12px] cecr:text-[9px] text-[8px] hover:bg-gray-100 focus:bg-gray-100 flex items-center gap-1"
          >
            <span>{option.label}</span>
            <span>({option.symbol})</span>
          </button>
        ))}
      </div>
    )}
  </div>
  )
};

export default DistanceUnit;