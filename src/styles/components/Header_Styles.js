import {bg_modeNormal, bg_primary, primaryBg, text_modeNormal, text_primary} from "../theme/declarations";


export const NavbarStyles = theme => ({
    ...bg_modeNormal(theme),
    ...text_modeNormal,
})
export const IconStyles = theme => ({
     ...text_primary(theme),
})
export const ColorOptionStyles = theme => ({
    ...bg_modeNormal(theme),
    ...text_modeNormal,
    width: "12px",
    height: "12px"
})
export const LogoStyles = theme => ({
    ...text_modeNormal,
    lineHeight: "50px",
    fontWeight: 700,
    fontSize: "30px"
})
export const SwatchStyles = theme => {
    return {
        ...bg_primary(theme),
        height: "32px",
        width: "32px",
        border:"1px solid grey",
        padding:"2px",
        borderRadius:"3px"
    }

}

export const SwitchStyles = theme => (`
      .custom-control-input:checked ~ .custom-control-label::before {
            border-color: ${primaryBg(theme)};
            background-color: ${primaryBg(theme)};
    }
`)


