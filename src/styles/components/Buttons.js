import React from 'react'
// import styled from '@emotion/styled'
import { Button } from 'reactstrap';
import {
    bg_primary,
    bg_primaryDark,
    bg_primaryLight,
    text_primary
} from "../theme/declarations";


// import 'twin.macro'

export const ButtonStyles = theme => {
    return {
        ...bg_primary(theme),
        ...text_primary(theme),
        borderColor:theme.primary,
        '&:hover, &:focus': {
            ...bg_primaryDark(theme),
        },
        '&:active, &:not(:disabled):not(.disabled):active': {
            ...bg_primaryLight(theme),
        }
    }
}

export const InverseButtonStyles = theme => {
    console.log(`bg_primaryLight(theme)`, bg_primaryLight(theme))
    return {
        backgroundColor:theme.background.reverse,
        color:theme.font.reverse,
        borderColor:theme.background.reverse,
        '&:hover, &:focus': {
            ...bg_primaryDark(theme),
        },
        '&:active, &:not(:disabled):not(.disabled):active': {
            ...bg_primaryLight(theme),
        }
    }
}


export const Buttons = () => {
    return <div>
        <button tw="text-lg px-8 py-2 rounded mb-5">TW Button</button>
        <Button  css={ButtonStyles}>This my button component.</Button>

    </div>
}

export const StyledButton = (props) => {
    const styles = props.inverse ? InverseButtonStyles : ButtonStyles;
    return <Button {...props} css={styles}>{props.children}</Button>
}