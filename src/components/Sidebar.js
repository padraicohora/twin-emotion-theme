import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaHome , FaRegUserCircle, FaUserCircle, FaCubes, FaInfo} from 'react-icons/fa';
import {RiTeamLine} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";
import { IconContext } from "react-icons";
import {useTheme} from "emotion-theming";
import styled from "@emotion/styled";

const Sidebar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const theme = useTheme();

    const Wrapper = styled.div`
        display:flex;
        background-color: ${theme.primary};
        color: ${theme.primaryText};
    `

    const toggleNavbar = () => setCollapsed(!collapsed);
    const isOpen = false;
    const cn = isOpen ? "d-block" : "d-none"

    return (
        <Wrapper>
            <IconContext.Provider value={{ color: theme.primaryText }}>
                <Navbar color="faded" light className={"flex-column p-0"}>
                <Nav vertical>
                    <NavItem className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <FaHome/>
                            {/*<span className={cn}>Home</span>*/}
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#"  className="d-flex align-items-center">
                            <RiTeamLine/>
                            {/*<span>Team</span>*/}
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#"  className="d-flex align-items-center">
                            <FaCubes/>
                            {/*<span>Practice</span>*/}
                        </NavLink>
                    </NavItem>

                </Nav>
                <Nav vertical>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <FaUserCircle/>
                            {/*<span>Account</span>*/}
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <AiFillSetting/>
                            {/*<span>Settings</span>*/}
                        </NavLink>
                    </NavItem>
                    <NavItem  className={"py-1"}>
                        <NavLink href="#" className="d-flex align-items-center">
                            <FaInfo/>
                            {/*<span>About</span>*/}
                        </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
            </IconContext.Provider>
        </Wrapper>
    );
}

export default Sidebar;