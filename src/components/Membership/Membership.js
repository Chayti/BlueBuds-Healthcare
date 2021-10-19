import React from "react";
import './Membership.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faHeartbeat, faUserShield, faUserMd, faHandHoldingHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card, CardGroup } from "react-bootstrap";

const Membership = () => {
    return (
        <div>

            <div className="membership-banner d-flex align-items-center justify-content-center ">
                <div>
                    <div className="front-bg mb-5">
                        <h1>Sign up to get unlimited access to exceptional care!</h1>
                        <h2>Our annual membership plans take the stress out of looking after your health, all year round.</h2>
                        <br /><br />
                        <button className="btn py-3 px-5 fs-4">Become a member</button>
                    </div>
                </div>
            </div>

            <div className="container my-5 membership-detail">
                <div>
                    <h1 className="text-center my-5">Why become a member?</h1>
                    <CardGroup>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faUserMd} size="5x" />
                            </div>
                            <Card.Body>
                                <p className="fs-6">
                                    Unlimited consultations with world class doctors
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faHandHoldingHeart} size="5x" />
                            </div>
                            <Card.Body>
                                <p className="fs-6">
                                    All the care you need under one roof
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faUserShield} size="5x" />
                            </div>
                            <Card.Body>
                                <p className="fs-6">
                                    Unlimited consultations for your children under 5 years (up to 3 children)
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faHeartbeat} size="5x" />
                            </div>
                            <Card.Body>
                                <p className="fs-6">
                                    25% off all additional services **
                                </p>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <button className="btn py-2 px-4 fs-5 rounded-pill">
                        <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faAngleLeft} size="1x" />
                        <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faAngleLeft} size="1x" />
                        &emsp;Become a member&emsp;
                        <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faAngleRight} size="1x" />
                        <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faAngleRight} size="1x" />
                    </button>
                    <br />
                    <small>** except MCD & COVID tests, VS consults, and additional plan purchases</small>
                </div>
            </div>

            <div className="membership-banner membership-banner-2 d-flex align-items-center justify-content-center ">
                <div className="front-bg py-5">
                    <h2>Annual Membership Plans allow us to help you manage your health better. They include a health check and ongoing monitoring of your and your family's health, and are tailored to your needs.</h2>
                </div>
            </div>

            <div className="front-bg d-flex align-items-center justify-content-center">
                <div className="py-5">
                    <h2 className="fw-bold text-center" style={{ color: "#810054" }}>BlueBuds is trusted by over 100k+ patients</h2>
                    <p>BlueBuds is the leading healthcare technology company in Bangladesh. We began in 2019 and today we help over 250,000 individuals across the country.</p>
                </div>
            </div>

            <div className="container my-5 px-5 membership-detail">
                <div>
                    <CardGroup>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#810054' }} icon={faUsers} size="4x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">1K+</Card.Title>
                                <p className="fs-6 text-center">
                                    new monthly users
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#810054' }} icon={faUserShield} size="4x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">60+</Card.Title>
                                <p className="fs-6 text-center">
                                    verified doctors
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#810054' }} icon={faHandHoldingHeart} size="4x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">5,000+</Card.Title>
                                <p className="fs-6 text-center">
                                    monthly consultations
                                </p>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn py-2 px-4 fs-5 rounded-pill shadow-lg" style={{ backgroundColor: '#00b9d1' }} >
                    &emsp;Annual membership plans&emsp;
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn py-2 px-4 fs-5 rounded-pill shadow-lg" style={{ backgroundColor: '#00b9d1' }} >
                    &emsp;Corporate membership plans&emsp;
                </button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn py-2 px-4 fs-5 rounded-pill shadow-lg" style={{ backgroundColor: '#00b9d1' }} >
                    &emsp;Video consult membership plans&emsp;
                </button>
            </div>
            <br /><br /><br />

        </div>
    );
}

export default Membership;