import { Container, Row, Col } from "react-bootstrap";

import NabarHead from "../components/NabarHead";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Feature from "../components/Feature";

import homeBackground from "../assets/homeBackground.jpg";
export default (props) => {
    return (
        <>
            <NabarHead />
            <Container fluid></Container>
            <div
                className="container-fluid p-0"
                style={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: "1920px",
                }}
            >
                <JoinUs />

                <Feature />
            </div>

            <Footer />
        </>
    );
};
