import { Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignInUpGroup from "./SignInUpGroup";
import AtomAccountDropdown from "../moleculles/MolecullesAccountDropdown";

import { useLogin } from "../../context/ContextLogin";
const NabarHead = () => {
    const navigate = useNavigate();
    const { user, auth } = useLogin();

    return (
        <>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand
                        onClick={() => navigate("/")}
                        style={{ cursor: "pointer" }}
                    >
                        Metaverse Night Club
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {!auth && <SignInUpGroup />}
                            {auth && <AtomAccountDropdown userId={user} />}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default NabarHead;
