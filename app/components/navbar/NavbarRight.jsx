import React from 'react';

const NavbarRight = ({ userName, role, image, children}) => {
  return (
    <div className="hidden lg:flex flex-1 justify-end pl-40">
      <div className="flex items-center gap-4 pr-3">
        {children}
        <div className="flex items-center gap-2">
          <span
            data-slot="avatar"
            className="relative flex size-8 shrink-0 overflow-hidden rounded-full"
          >
            <img
              data-slot="avatar-image"
              className="aspect-square size-full object-cover object-center"
              src={image}
            />
          </span>
          <div>
            <p className="text-sm font-medium">{userName}</p>
            {role && <p className="text-xs text-custom-gray">Role: {role}</p>}
          </div>
        </div>
      </div>
    </div>
  )
};

export default NavbarRight;
