import React from 'react'
// import styled from '@emotion/styled'
import { Button } from 'reactstrap';
import {primaryBg, primaryDarkBg, primaryLightBg, primaryText} from "./styles/declarations";

// import 'twin.macro'

export const ButtonStyles = theme => {
    return {
        ...primaryBg(theme),
        ...primaryText(theme),
        borderColor:theme.primary,
        '&:hover, &:focus': {
            ...primaryDarkBg(theme),
        },
        '&:active, &:not(:disabled):not(.disabled):active': {
            ...primaryLightBg(theme),
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
    return <Button {...props} css={ButtonStyles}>{props.children}</Button>
}