import React from 'react';
import './HealthCheck.css';
import Men from "./Men/Men";
import Special from "./Special/Special";
import Women from "./Women/Women";

const HealthCheck = () => {
    return (
        <div>
            <div className="health-check-banner d-flex align-items-center justify-content-center ">
                <div className="front-bg mb-5">
                    <h1>HEALTH CHECKS</h1>
                    <h2>We believe in prevention rather than treatment. Our health checks help you stay on top of your health. Choose the one that is right for you.</h2>
                    <br /><br />
                </div>
            </div>
            <div className="container my-5 health-check-detail">
                <Men></Men>
                <Women></Women>
                <Special></Special>
            </div>
        </div>
    );
}

export default HealthCheck;