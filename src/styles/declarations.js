import {primaryBg, primaryDarkBg, primaryLightBg, primaryText} from "./variables";

export const bg_primary = (theme) => ({backgroundColor:primaryBg(theme)})
export const text_primary = (theme) => ({color: primaryText(theme)})
export const bg_primaryDark = (theme) => ({backgroundColor: primaryDarkBg(theme)})
export const bg_primaryLight = (theme) => ({backgroundColor: primaryLightBg(theme)})


