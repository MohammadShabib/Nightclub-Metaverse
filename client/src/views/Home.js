import { useState } from "react";

import homeBackground from "../assets/homeBackground.jpg";

import NabarHead from "../components/NabarHead";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Feature from "../components/Feature";

export default (props) => {
    return (
        <>
            <div
                className="container-fluid p-0"
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: "1920px",
                }}
            >
                <NabarHead />
                <JoinUs />
                <Feature />
            </div>
        </>
    );
};
