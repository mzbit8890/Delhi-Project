// import React from 'react';
// import Image from "next/image"
// import leftArow from "./arl.png"
// import right from "./arr.png"
// interface HorizontalScrollProps {
//     children: React.ReactNode;
// }

// const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
//     const scrollLeft = () => {
//         const container = document.getElementById("scroll-container");
//         if (container) container.scrollLeft -= 100;
//     };

//     const scrollRight = () => {
//         const container = document.getElementById("scroll-container");
//         if (container) container.scrollLeft += 100;
//     };

//     return (
//         <div className="relative">
//             <style jsx>{`
// #scroll-container::-webkit-scrollbar {
// display: none;
// }
// `}</style>
//             <button
//                 className="absolute  inset-0   h-full hover:text-gray-900"
//                 onClick={scrollLeft}
//             >
//                 <Image src={leftArow} alt="Left Arow" width={50} height={50}/>
//             </button>
//             <button
//                 className="absolute right-0 top-0 h-full hover:text-gray-900"
//                 onClick={scrollRight}
//             >
//                 <Image src={right} alt="Right Arow" width={50} height={50}/>

//             </button>

//             <div

//                 id="scroll-container"

//                 className="flex overflow-x-auto"

//             >

//                 {children}

//             </div>

//         </div>

//     );

// };



// export default HorizontalScroll;












import React, { useRef } from 'react';
import Image from "next/image"
import leftArow from "./arl.png"
import right from "./arr.png"

interface HorizontalScrollProps {
    children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100;
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100;
        }
    };

    return (
        <div className="relative">
             <style jsx>{`
#scroll-container::-webkit-scrollbar {
display: none;
}
`}</style>
            <button
                className="absolute  inset-0   h-full hover:text-gray-900"
                onClick={scrollLeft}
            >
                <Image src={leftArow} alt="Left Arow" width={50} height={50}/>
            </button>
            <button
                className="absolute right-0 top-0 h-full hover:text-gray-900"
                onClick={scrollRight}
            >
                <Image src={right} alt="Right Arow" width={50} height={50}/>

            </button>

           

            <div
                ref={containerRef}
                className="flex overflow-x-auto"
            >
                {children}
            </div>
        </div>
    );
};

export default HorizontalScroll;
