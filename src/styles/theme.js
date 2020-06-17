import tailwind from "../../tailwind.config"

const {theme: {colors}} = tailwind
const  {blue, gray, black, white} = colors

export const COLORS = {};

for (const color in colors) {
    const label = color.toUpperCase();
    if(typeof colors[color] === "object"){
        COLORS[label] =  {
            primary: colors[color][600],
            primaryText: colors[color][100],
            colorBackgroundDark:colors[color][900],
            colorBackgroundLight:colors[color][300],
        }
    }
}

export const MODE = {
    DARK:{
        font: {
            normal:white,
            muted:gray[400],
        },
        background:{
            normal:black,
            muted:gray[700],
        }
    },
    LIGHT:{
        font: {
            normal:black,
            muted:gray[700],
        },
        background:{
            normal:white,
            muted:gray[400],
        }
    },
}

export const THEME = {MODE, COLORS}