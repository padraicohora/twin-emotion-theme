
import {
    modeBgNormal,
    modeBgReverse,
    modeFontMuted,
    modeFontNormal,
    modeFontReverse,
    primaryBg,
    primaryText
} from "../theme/variables";

export const ThemeCard = theme => ({
    backgroundColor: modeBgNormal(theme),
    color:modeFontNormal(theme),
    borderColor:modeBgNormal(theme),
})

export const InverseCard = theme => ({
    backgroundColor: modeBgReverse(theme),
    borderColor: modeBgReverse(theme),
    color:modeFontReverse(theme),
})

export const PrimaryCard = theme => ({
    backgroundColor: primaryBg(theme),
    borderColor: primaryBg(theme),
    color: primaryText(theme),
})

export const TitleStyles = theme => ({
    color: modeFontMuted(theme),
    fontWeight: 600,
    fontSize: "larger",
})

export const InverseTitleStyles = theme => ({
    ...TitleStyles(theme),
    color: modeFontReverse(theme),
})

export const PrimayTitleStyles = theme => ({
    ...TitleStyles(theme),
    color: primaryText(theme),
})
