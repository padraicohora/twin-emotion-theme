import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    NavbarText, Label, Input, FormGroup, CustomInput, Col
} from 'reactstrap';
import {AiOutlineMenuUnfold} from "react-icons/ai"
import logoBlack from "../assets/logoBlack.svg";
import { GithubPicker  } from 'react-color';
import {THEME} from "../styles/theme";
import {  useTheme } from 'emotion-theming'
import {ColorOptionStyles, IconStyles, NavbarStyles} from "../styles/components/Header_Styles";

const Header = (props) => {

    const [darkMode, toggleDarkMode] = useState(false)
    const [color, changeColor] = useState("BLUE")

    const mappedColors = () => {
        let colourValues = [];
        let coloursObj = {};
        for (const color in THEME.COLORS) {
            coloursObj[color] = THEME.COLORS[color].primary;
            colourValues.push(THEME.COLORS[color].primary);
        }
        return {colourValues, coloursObj}
    }

    const {colourValues, coloursObj} = mappedColors()
    const theme = useTheme();

    const getThemeByColor = (colourObject, colourValue) => {
        return Object.keys(colourObject).find(key => colourObject[key] === colourValue)
    }

    const activeTheme = getThemeByColor(coloursObj, theme.primary)


    const onChangeColor = (color, ev) => {
        const newTheme = getThemeByColor(coloursObj,color.hex)
        console.log(`newTheme`, newTheme)
        changeColor(newTheme)
    }

    const onSubmitTheme = (e) => {
        e.preventDefault();
        props.onChangeTheme({
            mode: darkMode,
            color: color
        })
    }



    return (
        <div className={"shadow-sm position-relative"}>
            <Navbar css={NavbarStyles}
                    expand="md"
                    className={"py-0 px-2"}>
                    <AiOutlineMenuUnfold className={"h2 mb-0 mr-2"}
                                         css={IconStyles}
                    />
                <NavbarBrand href="/" className={"p-0"}>
                    <img style={{height:"50px"}} src={logoBlack}/>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                <UncontrolledDropdown  nav inNavbar>
                    <DropdownToggle nav caret>
                        Theme Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Form onSubmit={e => onSubmitTheme(e)}>
                            <FormGroup>
                                <Label for="exampleCheckbox">Mode</Label>
                                <div>
                                    <CustomInput type="switch"
                                                 id="exampleCustomSwitch"
                                                 checked={darkMode}
                                                 onChange={() => toggleDarkMode(!darkMode)}
                                                 name="customSwitch"
                                                 label="Dark mode" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleCustomSelect">Color</Label>
                                <CustomInput type="select" id="exampleCustomSelect"
                                             name="customSelect"
                                             onChange={e => changeColor(e.target.value)}
                                             value={color}>
                                    <option value="BLUE"> <div css={ColorOptionStyles}></div>Blue</option>
                                    <option css={ColorOptionStyles} value="RED">Red</option>
                                    <option css={ColorOptionStyles} value="PURPLE">Purple</option>
                                    <option css={ColorOptionStyles} value="PINK">Pink</option>
                                    <option css={ColorOptionStyles} value="ORANGE">Orange</option>
                                    <option css={ColorOptionStyles} value="TEAL">Teal</option>
                                </CustomInput>
                                <GithubPicker colors={colourValues} onChange={onChangeColor}/>
                            </FormGroup>
                            <DropdownItem divider />
                            <DropdownItem onClick={onSubmitTheme}>
                                Submit
                            </DropdownItem>
                        </Form>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;