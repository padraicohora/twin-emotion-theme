import {css} from "@emotion/core";
import {THEME} from "../theme/theme";

export const cssGlobal = (theme) => css`
:root {
    --blue: ${THEME.COLORS.BLUE.primary};
    --indigo: ${THEME.COLORS.INDIGO.primary};
    --purple: ${THEME.COLORS.PURPLE.primary};
    --pink: ${THEME.COLORS.PINK.primary};
    --red: ${THEME.COLORS.RED.primary};
    --orange: ${THEME.COLORS.ORANGE.primary};
    --yellow: ${THEME.COLORS.YELLOW.primary};
    --green: ${THEME.COLORS.GREEN.primary};
    --teal: ${THEME.COLORS.TEAL.primary};
    --cyan: ${THEME.COLORS.CYAN.primary};
    --white: #fff;
    --gray: ${THEME.COLORS.GRAY.primary};
    --gray-dark: #343a40;
    --primary: ${THEME.COLORS.BLUE.primary};
    --secondary: ${THEME.COLORS.GRAY.primary};
    --success: ${THEME.COLORS.GREEN.primary};
    --info: ${THEME.COLORS.CYAN.primary};
    --warning: ${THEME.COLORS.YELLOW.primary};
    --danger: ${THEME.COLORS.RED.primary};
    --light: ${theme.colorBackgroundLight};
    --dark: ${theme.colorBackgroundDark};
}

:focus {
    outline: transparent auto 0px;
}

`