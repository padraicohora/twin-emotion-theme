import React from 'react';
import { Container, Card,  Row, Col,  Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import tw, { css } from 'twin.macro'
import {useTheme} from "emotion-theming";


const Background  = theme => ({
    backgroundColor: theme.background.muted,
})
const Default = (props) => {
    const theme = useTheme();
    return (
        <React.Fragment>
        <div css={[
            tw`p-3 mx-auto w-full`,
            css`background-color: ${theme.background.light};`
        ]}>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse color="primary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="secondary">Button</Button>
                </Card>
            </CardColumns>
        </div>
        </React.Fragment>
    );
}

export default Default;