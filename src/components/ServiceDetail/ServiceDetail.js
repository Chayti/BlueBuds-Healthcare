import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ServiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical, faHeartbeat, faVials, faUserShield, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { Card, CardGroup } from "react-bootstrap";

const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: infinite 5s ${PulseAnimation};
`;

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    // const
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data.find(data => data.id == serviceId)));
    }, [])

    return (
        <div>
            <div className="service-banner d-flex align-items-center justify-content-center ">
                <div className="front-bg mb-5">
                    <PulseDiv>
                        <h1>Consult for {service.name}</h1>
                    </PulseDiv>
                    <h2>Know if you are unwell and have BlueBuds doctors help you recover</h2>
                    <br /><br />
                    <button className="btn py-3 px-5 fs-4">Book for {service.name}</button>
                </div>
            </div>
            <div className="container my-5 service-detail">
                <h1>What is the {service.name} & who is it for?</h1>
                <img className="my-3" src={service.img} />
                <h4>{service.description}</h4>
                <div>
                    <h1 className="text-center my-5">Why choose our {service.name}?</h1>
                    <CardGroup>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faUserShield} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">Safety</Card.Title>
                                <p className="fs-6">
                                    We also take samples from the safety of your home
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faVials} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">Quality</Card.Title>
                                <p className="fs-6">
                                    All results are processed in BlueBuds world class lab
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faHeartbeat} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">Experience</Card.Title>
                                <p className="fs-6">
                                    You'll have doctor consultation to help you recover faster
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className="me-4 border-0">
                            <div className="d-flex justify-content-center mb-3">
                                <FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faNotesMedical} size="6x" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold text-center">Convenience</Card.Title>
                                <p className="fs-6">
                                    Results are delivered online in as little as 24 hours
                                </p>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <button className="btn py-2 px-4 fs-5"><FontAwesomeIcon style={{ color: '#00b9d1' }} icon={faClipboardCheck} size="1x" />&nbsp;Book for {service.name}</button>

                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;