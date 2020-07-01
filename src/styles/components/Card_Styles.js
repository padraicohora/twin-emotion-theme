import {primaryBg} from "../declarations";


export const ThemeCard = theme => ({
    backgroundColor: theme.background.normal,
    color: theme.font.normal,
    borderColor:theme.background.normal,
})

export const InverseCard = theme => ({
    backgroundColor: theme.background.reverse,
    borderColor: theme.background.reverse,
    color: theme.font.reverse,
})

export const PrimaryCard = theme => ({
    backgroundColor: theme.primary,
    borderColor: theme.primary,
    color: theme.primaryText,
})

export const TitleStyles = theme => ({
    color: theme.font.muted,
    fontWeight: 600,
    fontSize: "larger",
})

export const InverseTitleStyles = theme => ({
    ...TitleStyles(theme),
    color: theme.font.reverse,
})

export const PrimayTitleStyles = theme => ({
    ...TitleStyles(theme),
    color: theme.primaryText,
})
