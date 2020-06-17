import React from 'react'
// import styled from '@emotion/styled'
import { Button } from 'reactstrap';

// import 'twin.macro'

const buttonStyles = {
    backgroundColor: 'yellow',
    '&:hover': {
        color: 'lightgreen'
    }
}

export const Buttons = () => {
    return <div>
        <button tw="text-lg px-8 py-2 rounded mb-5">TW Button</button>
        <Button  css={buttonStyles}>This my button component.</Button>

    </div>
}