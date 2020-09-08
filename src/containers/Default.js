import React from 'react';
import { Container, Card,  Row, Col, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import tw, { css } from 'twin.macro'
import {useTheme} from "emotion-theming";
// import {StyledButton} from "../styles/components/Buttons";
import {Button} from "my-design-app"

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import {
    InverseCard,
    InverseTitleStyles,
    PrimaryCard,
    PrimayTitleStyles,
    ThemeCard,
    TitleStyles
} from "../styles/components/Card_Styles";


const Background  = theme => ({
    backgroundColor: theme.background.muted,
})
const Default = (props) => {
    const theme = useTheme();
    return (
        <React.Fragment>
        <div css={[
            tw`p-3 mx-auto w-full overflow-auto`,
            css`background-color: ${theme.background.light};`
        ]}>
            <CardColumns>
                <Card css={ThemeCard}>
                    <CardImg top width="100%" src={img1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle css={TitleStyles}>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>

                    </CardBody>
                </Card>
                <Card  css={ThemeCard}>
                    <CardImg top width="100%" src={img2} alt="Card image cap" />
                </Card>
                <Card css={ThemeCard}>
                    <CardBody>
                        <CardTitle css={TitleStyles}>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>
                            View
                        </Button>
                    </CardBody>
                </Card>
                <Card body css={InverseCard}>
                    <CardTitle css={InverseTitleStyles}>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>
                        View
                    </Button>
                </Card>
                <Card css={ThemeCard}>
                    <CardImg top width="100%" src={img3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle css={TitleStyles}>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>
                            View
                        </Button>
                    </CardBody>
                </Card>
                <Card body  css={PrimaryCard}>
                    <CardTitle css={PrimayTitleStyles}>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button inverse>
                        View
                    </Button>
                </Card>
            </CardColumns>
        </div>
        </React.Fragment>
    );
}

export default Default;