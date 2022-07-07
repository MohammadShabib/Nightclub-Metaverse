import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import SignupModal from "../moleculles/MolecullesSignupModal";
import SigninModal from "../moleculles/MolecullesSigninModal";

const SingInUpGroup = () => {
    const [showSigninModal, setShowSigninModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const singupButtonHandler = () => {
        setShowSignupModal(true);
    };
    const singupCloseHandler = () => {
        setShowSignupModal(false);
    };
    const singinButtonHandler = () => {
        setShowSigninModal(true);
    };

    const singinCloseHandler = () => {
        setShowSigninModal(false);
    };

    return (
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

            {showSignupModal && (
                <SignupModal handleClose={singupCloseHandler} />
            )}

            {showSigninModal && (
                <SigninModal handleClose={singinCloseHandler} />
            )}
        </>
    );
};
export default SingInUpGroup;
