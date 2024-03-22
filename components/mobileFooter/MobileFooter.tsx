"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import redProfile from './assets/redprofile.png';
import grayProfile from './assets/grayprofile.png';
import eventsgray from './assets/eventsgray.png';
import explorered from './assets/explorered.png';
import exploregray from './assets/exploregray.png';
import explorered2 from './assets/explorered2.png';
import tripsgray from './assets/tripsgray.png';
import tripsred from './assets/tripsred.png';
import chat from './assets/chat.png';
import Link from 'next/link';



const MobileFooter: React.FC = () => {
    const router = usePathname();

    // Define your navigation items with icons, text, and active state information
    const navItems = [
        { id: 1, text: 'Explore', iconInactive: exploregray, iconActive: explorered2, route: '/' },
        { id: 2, text: 'My Trips', iconInactive: tripsgray, iconActive: tripsred, route: '/mytrips' },
        { id: 3, text: 'Chat', iconInactive: chat, iconActive: chat, route: '/chat' },
        { id: 4, text: 'Events', iconInactive: eventsgray, iconActive: explorered, route: '/events' },
        { id: 5, text: 'Account', iconInactive: grayProfile, iconActive: redProfile, route: '/account' },
    ];

    return (
        <div className="fixed bottom-0 shadow-top bg-white left-0 w-full shadow-md rounded-tl-2xl rounded-tr-2xl">
            <div className="flex justify-around items-center h-20">
                {navItems.map((item) => (
                    <NavItem key={item.id} item={item} isActive={router === item.route} />
                ))}
            </div>
        </div>
    );
};

interface NavItemProps {
    item: {
        id: number;
        text: string;
        iconInactive: string;
        iconActive: string;
        route: string;
    };
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isActive }) => {
    return (
        <Link href={item.route} className="flex flex-col items-center relative">
            {isActive && (
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute z-0 top-3 left-2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <rect x="4.01654" y="-1.11255" width="15" height="15" rx="4" transform="rotate(20 4.01654 -1.11255)" fill="#F65656" fillOpacity="0.25" />
                </svg>
            )}
            <Image src={isActive ? item.iconActive : item.iconInactive} alt={item.text} width={24} height={24} />
            <span className={isActive ? 'font-semibold mt-1 text-[10px] text-[#F65656]' : 'text-[#454545] mt-1 font-semibold text-[10px]'}>{item.text}</span>
        </Link>
    );
};

export default MobileFooter;
