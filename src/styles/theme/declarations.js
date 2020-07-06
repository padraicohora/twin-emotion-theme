import {
    modeBgLight,
    modeBgNormal, modeBgReverse,
    modeFontNormal,
    primaryBg,
    primaryDarkBg,
    primaryLightBg,
    primaryText
} from "./variables";

export const bg_primary = (theme) => ({backgroundColor:primaryBg(theme)})
export const text_primary = (theme) => ({color: primaryText(theme)})
export const bg_primaryDark = (theme) => ({backgroundColor: primaryDarkBg(theme)})
export const bg_primaryLight = (theme) => ({backgroundColor: primaryLightBg(theme)})

export const bg_modeNormal = (theme) => ({backgroundColor:modeBgNormal(theme)})
export const text_modeNormal = (theme) => ({color: modeFontNormal(theme)})
export const bg_modeReverse = (theme) => ({backgroundColor: modeBgReverse(theme)})
export const bg_modeLight = (theme) => ({backgroundColor: modeBgLight(theme)})



