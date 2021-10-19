import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Card, CardGroup } from "react-bootstrap";

const Special = () => {
    return (
        <div>
            <h1 className="text-center my-5">Special health checks</h1>
            <CardGroup>
                <Card className="me-4 border shadow-lg">
                    <div className="d-flex justify-content-center mb-3 py-2">
                        <FontAwesomeIcon style={{ color: '#810054' }} icon={faHeartbeat} size="4x" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center">Home Health Check</Card.Title>
                        <p className="fs-6 text-center">
                            Get the care you need from the comfort of your home and be happy always
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>6499<sub>/yr</sub></h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn">See details</button>
                        </div>

                    </Card.Body>
                </Card>
                <Card className="me-4 border shadow-lg">
                    <div className="d-flex justify-content-center mb-3 py-2">
                        <FontAwesomeIcon style={{ color: '#810054' }} icon={faHeartbeat} size="4x" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center">COVID Supplementary Health Check</Card.Title>
                        <p className="fs-6 text-center">
                            Get back on your feet with this care package and become healthy
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>6500<sub>/yr</sub></h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn">See details</button>
                        </div>

                    </Card.Body>
                </Card>
                <Card className="me-4 border shadow-lg">
                    <div className="d-flex justify-content-center mb-3 py-2">
                        <FontAwesomeIcon style={{ color: '#810054' }} icon={faHeartbeat} size="4x" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center">Cardiac Screening</Card.Title>
                        <p className="fs-6 text-center">
                            Ensure you keep your heart in the best health with our Cardiac Screening Test
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>8000<sub>/yr</sub></h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn">See details</button>
                        </div>

                    </Card.Body>
                </Card>
                <Card className="me-4 border shadow-lg">
                    <div className="d-flex justify-content-center mb-3 py-2">
                        <FontAwesomeIcon style={{ color: '#810054' }} icon={faHeartbeat} size="4x" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center">Diabetes Screening</Card.Title>
                        <p className="fs-6 text-center">
                            Keep your blood sugar in check with this Diabetes Screening Package
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>7400<sub>/yr</sub></h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn">See details</button>
                        </div>

                    </Card.Body>
                </Card>
                <Card className="me-4 border shadow-lg">
                    <div className="d-flex justify-content-center mb-3 py-2">
                        <FontAwesomeIcon style={{ color: '#810054' }} icon={faHeartbeat} size="4x" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center">COVID Supportive Pack</Card.Title>
                        <p className="fs-6 text-center">
                            Help COVID-positive patients manage their illness and get back on their feet quickly
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>3900<sub>/yr</sub></h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn">See details</button>
                        </div>

                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Special;