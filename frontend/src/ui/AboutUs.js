import React from "react"
import {Col, Container, Row} from "react-bootstrap";

export function AboutUs() {
    return (
        <>
            <Container fluid className="background-image text-dark d-flex">
                <Row>
                    <Col md={2} className="p-3">
                        <h1>About Us</h1>
                    </Col>
                    <Col md={4} className="ms-auto d-flex align-items-end justify-content-end">
                        <p>Well, the way they make shows is, they make one show. That show's
                            called a pilot. Then they show
                            that show to the people who make shows, and on the strength of that one show they decide if
                            they're going to make more shows. Some pilots get picked and become television programs.
                            Some
                            don't, become nothing. She starred in one of the ones that became nothing.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-light p-4">
                <Row>
                    <Col md={2}>
                        <img
                            src="https://wallpaperaccess.com/full/84977.png"
                            className="img-fluid border border-dark" alt="Placeholder"/>
                    </Col>
                    <Col md={10} className="ps-4">
                        <p>
                            The path of the righteous man is beset on all sides by the iniquities of the selfish and the
                            tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the
                            weak through the valley of darkness, for he is truly his brother's keeper and the finder of
                            lost children. And I will strike down upon thee with great vengeance
                            and furious anger those who would attempt to poison and destroy My brothers. And you
                            will know My name is the Lord when I lay My vengeance upon thee.</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}