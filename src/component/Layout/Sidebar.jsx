import React from "react";
import {
  analyticsIcon,
  arrowIcon,
  boardIcon,
  cashIcon,
  discountIcon,
  gridIcon,
  homeIcon,
  lightingIcon,
  micIcon,
  peopleIcon,
  themeIcon,
  truckIcon,
  arrow2Icon,
  walletIcon
} from "../../assets/icon";
import profilePic from "../../assets/img/profilePic.png"
const Sidebar = () => {
  const SIDE_MENU = [
    {
      label: "Home",
      icon: homeIcon,
    },
    {
      label: "Orders",
      icon: boardIcon,
    },
    {
      label: "Products",
      icon: gridIcon,
    },
    {
      label: "Delivery",
      icon: truckIcon,
    },
    {
      label: "Marketing",
      icon: micIcon,
    },
    {
      label: "Analytics",
      icon: analyticsIcon,
    },
    {
      label: "Payments",
      icon: cashIcon,
      isActive: true, // a little trick for the UI /  that can be change when we will use routing
    },
    {
      label: "Tools",
      icon: arrowIcon,
    },
    {
      label: "Discount",
      icon: discountIcon,
    },
    {
      label: "Audiance",
      icon: peopleIcon,
    },
    {
      label: "Appearance",
      icon: themeIcon,
    },
    {
      label: "Plugin",
      icon: lightingIcon,
    },
  ];
  return (
    <div className="w-[224px] flex flex-col px-2.5 py-4 bg-secondary justify-between">
      {/* Profile and Menu Section */}
      <div>
        <div className="flex justify-between items-center mb-6 px-2">
          <div className="flex gap-3">
            <img src={profilePic} alt="profile" className="w-[39px] h-[39px] rounded"/>
            <div className="flex flex-col">
              <p className="text-[15px] text-black-100">Nishyan</p>
              <p className="underline decoration-current text-[13px] text-black-100/[0.8]">Visit Store</p>
            </div>
          </div>
          <img src={arrow2Icon} alt="dropdownIcon"/>
        </div>
        <div>
          {SIDE_MENU.map(menuItem=>(
            <div className={`flex gap-3 px-4 py-2 ${menuItem.isActive && 'bg-black-100/[0.1] rounded'}`}>
              <img src={menuItem.icon} alt="menu-icon"/>
              <p className="text-black-100">{menuItem.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Wallet Section */}
      <div className="flex gap-3 px-3 py-1.5 bg-secondary2 rounded items-center">
          <div className="bg-black-100/[0.1] rounded p-1.5">
            <img src={walletIcon} alt="wallet-icon"/>
          </div>
          <div className="flex flex-col">
              <p className="text-[13px] text-black-100/[0.8]">Available Credits</p>
              <p className="text-[16px] text-black-100">220.10</p>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
