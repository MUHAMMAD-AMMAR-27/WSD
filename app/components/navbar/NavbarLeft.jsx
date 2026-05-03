import React from 'react';
import WSD from "/assets/Logo.png";

const NavbarLeft = ({userName, children}) => {
  return (
    <div className="flex flex-row-reverse md:flex-row justify-between w-screen md:w-auto md:justify-start items-center gap-4">
      <button className="lg:hidden">{children}</button>
      <div className="text-sm text-green-600 flex gap-2 items-center font-bold cursor-pointer">
        <img className="w-9 h-auto object-contain" src={WSD} />
        <h2 className="mt-0">World Student Destination</h2>
        {userName && <h2 className="mt-0 text-lg">({userName})</h2>}
      </div>
    </div>
  )
};

export default NavbarLeft;
