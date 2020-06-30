import {primaryBg} from "../declarations";


export const NavbarStyles = theme => ({
    backgroundColor: theme.background.normal,
    color: theme.font.normal,
})
export const IconStyles = theme => ({
    color: theme.primary,
})
export const ColorOptionStyles = theme => ({
    backgroundColor: theme.background.normal,
    color: theme.font.normal,
    width: "12px",
    height: "12px"
})
export const LogoStyles = theme => ({
    color: theme.font.normal,
    lineHeight: "50px",
    fontWeight: 700,
    fontSize: "30px"
})
export const SwatchStyles = theme => {
    return {
        ...primaryBg(theme),
        height: "32px",
        width: "32px",
        border:"1px solid grey",
        padding:"2px",
        borderRadius:"3px"
    }

}

export const SwitchStyles = theme => (`
      .custom-control-input:checked ~ .custom-control-label::before {
            color: #fff;
            border-color: ${theme.primary};
            background-color: ${theme.primary};
    }
`)


