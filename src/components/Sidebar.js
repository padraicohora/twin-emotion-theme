import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaHome , FaRegUserCircle, FaUserCircle, FaCubes, FaInfo} from 'react-icons/fa';
import {RiTeamLine} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";
import { IconContext } from "react-icons";

const Sidebar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const isOpen = false;
    const cn = isOpen ? "d-block" : "d-none"

    return (
        <div className={"d-flex bg-primary"}>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <Navbar color="faded" light className={"flex-column p-0"}>
                <Nav vertical>
                    <NavItem className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <FaHome/>
                            <span className={cn}>Home</span>
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#"  className="d-flex align-items-center">
                            <RiTeamLine/>
                            <span>Team</span>
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#"  className="d-flex align-items-center">
                            <FaCubes/>
                            <span>Practice</span>
                        </NavLink>
                    </NavItem>

                </Nav>
                <Nav vertical>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <FaUserCircle/>
                            <span>Account</span>
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <AiFillSetting/>
                            <span>Settings</span>
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <FaInfo/>
                            <span>About</span>
                        </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
            </IconContext.Provider>
        </div>
    );
}

export default Sidebar;