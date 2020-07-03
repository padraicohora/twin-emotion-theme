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
    NavbarText, Label, Input, FormGroup, CustomInput, Col, Button, Fade
} from 'reactstrap';
import {AiOutlineMenuUnfold} from "react-icons/ai"
import logoBlack from "../assets/logoBlack.svg";
import { GithubPicker  } from 'react-color';
import {THEME} from "../styles/theme";
import {  useTheme } from 'emotion-theming'
import {
    ColorOptionStyles,
    IconStyles,
    LogoStyles,
    NavbarStyles,
    SwatchStyles, SwitchStyles
} from "../styles/components/Header_Styles";
import {LinkHover} from "../styles/utilStyles";
import {StyledButton} from "../Buttons";
import tw, { css } from 'twin.macro'

const Header = (props) => {

    const [darkMode, toggleDarkMode] = useState(false)
    const [color, changeColor] = useState("BLUE")
    const [pickerOpen, onToggleColorPicker] = useState(false)

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

    const onChangeMode = (e) => {
        toggleDarkMode(e.target.checked)
        props.onChangeTheme(e.target.checked)
    }

    const onClickSwatch = () => {
        onToggleColorPicker(!pickerOpen)
    }

    const onChangeColor = (color, ev) => {
        const theme = getThemeByColor(coloursObj,color.hex)
        changeColor(theme)
        props.onChangeColor({
            color: theme
        })
        if(pickerOpen) {
            onToggleColorPicker(false)
        }
    }

    return (
        <div className={"shadow-sm position-relative "}
             css={[tw`z-50`]}>
            <Navbar css={NavbarStyles}
                    expand="md"
                    className={"py-0 px-2"}>
                    <AiOutlineMenuUnfold className={"h2 mb-0 mr-2"}
                                         css={IconStyles}
                    />
                <NavbarBrand href="/" className={"p-0"}>
                    <h1 css={LogoStyles}>LOGO</h1>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                <UncontrolledDropdown  nav inNavbar>
                    <DropdownToggle nav caret css={LinkHover}>
                        Theme Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <div className={"px-2"}>
                            <FormGroup>
                                <Label for="exampleCheckbox">Mode</Label>
                                <div>
                                    <CustomInput type="switch"
                                                 id="exampleCustomSwitch"
                                                 checked={darkMode}
                                                 onChange={onChangeMode}
                                                 name="customSwitch"
                                                 css={[SwitchStyles]}
                                                 label="Dark mode" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleCustomSelect">Color</Label>
                                <div className={"d-flex"}>
                                    <div css={SwatchStyles} onClick={onClickSwatch}/>
                                    <span style={{
                                        paddingLeft: "9px",
                                        paddingTop: "4px",
                                        color: theme.primary
                                    }}>{color}</span>
                                </div>
                                <Fade in={pickerOpen}
                                      className={"position-absolute"}
                                      style={{right:"113px"}}
                                      unmountOnExit="true">
                                    <GithubPicker colors={colourValues}
                                                  triangle="top-right"
                                                  width="187px"
                                                  onChange={onChangeColor}/>
                                </Fade>
                            </FormGroup>
                            {/*<DropdownItem divider />*/}
                            {/*<StyledButton block>*/}
                                {/*Customize*/}
                            {/*</StyledButton>*/}
                        </div>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;