import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Card, CardGroup } from "react-bootstrap";

const Men = () => {
    return (
        <div>
            <h1 className="text-center my-5">For men</h1>
            <CardGroup>
                <Card className="me-4 border shadow-lg">
                    <div className="d-flex justify-content-center mb-3 py-2">
                        <FontAwesomeIcon style={{ color: '#810054' }} icon={faHeartbeat} size="4x" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fw-bold text-center">Age under 40</Card.Title>
                        <p className="fs-6 text-center">
                            Focused on younger men, our focusses on younger men and their healthcare needs
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>10900<sub>/yr</sub></h4>
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
                        <Card.Title className="fw-bold text-center">Age under 40 - 65</Card.Title>
                        <p className="fs-6 text-center">
                            Feel good at every stage of life with our consultancy
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>17500<sub>/yr</sub></h4>
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
                        <Card.Title className="fw-bold text-center">Age over 65</Card.Title>
                        <p className="fs-6 text-center">
                            Focused on older men and their specific healthcare needs
                        </p>
                        <h4 className="fw-bold text-center"><sup>৳</sup>20800<sub>/yr</sub></h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn">See details</button>
                        </div>

                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Men;