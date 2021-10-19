import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import { faUserMd, faVials, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import MyCarousel from '../Carousel/Carousel';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import styled, { keyframes } from 'styled-components';
import { pulse, flash } from 'react-animations';

const flashAnimation = keyframes`${flash}`;
const FlashDiv = styled.div`
  animation: infinite 3s ${flashAnimation};
`;

const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 5s ${PulseAnimation};
`;

const Home = () => {
    return (
        <>
            <div className="section-1 box">
                <div className="front-bg">
                    <PulseDiv>
                        <h1>HEALTHCARE - Anytime, Anywhere</h1>
                    </PulseDiv>
                    <h2>Join BlueBuds, a healthcare system that puts you first</h2>
                    <br /><br />
                    <button className="btn">Book a consultation</button>
                    <button className="btn">Buy packages</button>
                    <button className="btn">Pharmacy Order</button>
                </div>
            </div>

            <div className="section-2 box">

                <div>
                    <h1>Primary care built around you</h1>
                    <br />
                    <h2>At BlueBuds, we have built a healthcare system where you come first.
                        Because nothing is more important than your and your family’s health.</h2>
                </div>

            </div>

            <div className="section-3">
                <PulseDiv>
                    <h1 className="mb-5">The BlueBuds Difference</h1>
                </PulseDiv>
                <CardGroup>
                    <Card className="me-4 border-0">
                        <div className="d-flex justify-content-center mb-3">
                            <FontAwesomeIcon icon={faUserMd} size="8x" />
                        </div>
                        <small className="text-muted text-center">Our Doctors</small>
                        <Card.Body>
                            <Card.Title className="fw-bold">BlueBuds doctors listen</Card.Title>
                            <p className="fs-6">
                                At BlueBuds you will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.
                            </p>
                            <button className="btn ms-0">Book now</button>
                        </Card.Body>
                    </Card>
                    <Card className="me-4 border-0">
                        <div className="d-flex justify-content-center mb-3">
                            <FontAwesomeIcon icon={faVials} size="8x" />
                        </div>
                        <small className="text-muted text-center">Our Lab</small>
                        <Card.Body>
                            <Card.Title className="fw-bold">Diagnostics you can trust</Card.Title>
                            <p className="fs-6">
                                Our lab participates in the world’s largest external quality assessment scheme. Our average accuracy score is 99.9% and rated one of the best in Bangladesh.
                            </p>
                            <button className="btn ms-0">Book a test</button>
                        </Card.Body>
                    </Card>
                    <Card className="me-4 border-0">
                        <div className="d-flex justify-content-center mb-3">
                            <FontAwesomeIcon icon={faHandHoldingMedical} size="8x" />
                        </div>
                        <small className="text-muted text-center">Our Mission</small>
                        <Card.Body>
                            <Card.Title className="fw-bold">Healthcare anytime, anywhere</Card.Title>
                            <p className="fs-6">
                                You can get the care you need 24/7 – be it online or in clinic. And you can manage your health via our app: book appointments, access your test results, and more.
                            </p>
                            <button className="btn ms-0">Learn more</button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

            <div className="section-4 box">
                <h1>Healthcare without the worry</h1>
                <p className="fs-2">Over 250,000 patients already trust BlueBuds and our services. We operate at the highest standards of care, all for a price you can afford.</p>
                <FlashDiv>
                    <button className="btn ms-0">Book a consultation</button>
                </FlashDiv>
            </div>

            <div className="section-5 box">
                <Feedback></Feedback>
            </div>

            <MyCarousel></MyCarousel>

            <Services></Services>
        </>
    );
}

export default Home;