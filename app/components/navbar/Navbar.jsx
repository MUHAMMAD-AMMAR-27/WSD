import React from "react";
import NavbarLeft from "./NavbarLeft.jsx";
import NavbarRight from "./NavbarRight.jsx"
import { Settings, Menu} from "lucide-react";

const Navbar = ({onSettingClick, userName, role, image}) => {
  return (
    <div className="fixed top-0  left-0 w-full bg-white h-[65px] text-black z-50 p-4 flex justify-between items-center">
        <NavbarLeft  userName={userName} >
          <Menu />
        </NavbarLeft>
        <NavbarRight userName={userName} role={role} image={image}>
          <Settings onClick={onSettingClick} />
        </NavbarRight>
    </div>
  )
}

export default Navbar;
