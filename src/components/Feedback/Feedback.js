import React from "react";
import { Carousel } from "react-bootstrap";

const Feedback = () => {
    return (
        <div>
            <Carousel fade className="text-center my-5">

                <Carousel.Item className="d-flex justify-content-center">
                    <div className="w-75">
                        <h2 className="fst-italic">
                            BlueBuds Health is one of the finest COVID-19 test center in Bangladesh. I've tested two times. Their behaviour is very cordial with the patients and professional. They maintain proper health guidelines and time schedule. Definitely, I wish them best of luck and upcoming success in the future.
                        </h2>
                        <p className="mt-3">Md Rafayet Rashid</p>
                        <small>BlueBuds Patient</small>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="d-flex justify-content-center">
                    <div className="w-75">
                        <h2 className="fst-italic">
                            Family physicians are playing an increasingly important role in healthcare frontline and BlueBuds Health is doing an excellent job of promoting the family doctors who are relentlessly working to deliver accessible and integrated patient care. Best wishes for you all.
                        </h2>
                        <p className="mt-3">Md Azizul Bashar</p>
                        <small>BlueBuds Patient</small>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="d-flex justify-content-center">
                    <div className="w-75">
                        <h2 className="fst-italic">
                            BlueBuds Health stands out from the crowd because they are tech-based medical and health care. They have an app and a website where you can very smoothly make appointments. And everything they provide are 100% authentic and medically certified and proven. The BlueBuds team is absolutely great.
                        </h2>
                        <p className="mt-3">Ms Remin Mimi</p>
                        <small>BlueBuds Patient</small>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default Feedback;