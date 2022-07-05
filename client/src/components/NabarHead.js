import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

import { useState, useEffect } from "react";

import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";
import auth from "./auth";

const NabarHead = (props) => {
    const [showSigninModal, setShowSigninModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [loggedin, setLoggedin] = useState(false);
    const [UserId, setUserID] = useState();
    const singupButtonHandler = () => {
        setShowSignupModal(true);
    };
    const singinButtonHandler = () => {
        setShowSigninModal(true);
    };
    useEffect(() => {
        const userId = auth();
        if (userId) {
            setLoggedin(true);

            setUserID(userId);
        }
    }, []);
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
                    <Navbar.Brand href="/">Metaverse Night Club</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {!loggedin && (
                                <>
                                    <Button
                                        variant="primary"
                                        className="me-1"
                                        onClick={singupButtonHandler}
                                    >
                                        Sign up
                                    </Button>

                                    <Button
                                        variant="primary"
                                        className="me-1"
                                        onClick={singinButtonHandler}
                                    >
                                        Sign in
                                    </Button>
                                </>
                            )}
                            {loggedin && (
                                <NavDropdown
                                    title="Account"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href={`/user/${UserId}`}>
                                        Edit Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                        Support
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/logout">
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {showSignupModal && (
                <SignupModal
                    show={showSignupModal}
                    setShow={setShowSignupModal}
                />
            )}

            {showSigninModal && (
                <SigninModal
                    show={showSigninModal}
                    setShow={setShowSigninModal}
                />
            )}
        </>
    );
};
export default NabarHead;
