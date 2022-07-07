import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import User from "../../services/User.service";

import { useLogin } from "../../context/ContextLogin";

export default ({ handleClose }) => {
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("pass123@");
    const { login } = useLogin();

    const FormSubmitHandler = async (e) => {
        e.preventDefault();
        const user = new User({
            email,
            password,
        });
        const res = await user.signin();
        if (res) {
            login();
            handleClose();
        }
    };

    return (
        <Modal className="modal-dark-theme" show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={FormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
