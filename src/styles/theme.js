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
            colorBackgroundDark:colors[color][800],
            colorBackgroundLight:colors[color][400],
        }
    }
}

export const MODE = {
    DARK:{
        font: {
            normal:white,
            muted:gray[400],
            reverse:"#1d2124",
        },
        background:{
            normal:"#1d2124",
            light:"#545b62",
            muted:gray[700],
            reverse:white
        }
    },
    LIGHT:{
        font: {
            normal:"#1d2124",
            muted:gray[700],
            reverse:white,
        },
        background:{
            normal:white,
            light:"#e9ecef",
            muted:gray[400],
            reverse:"#1d2124"
        }
    },
}

export const THEME = {MODE, COLORS}