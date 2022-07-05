import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

export default (props) => {
    const { show, setShow } = props;
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("pass123@");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const FormSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/user/login",
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((res) => {
                handleClose();
                window.location.href = "/";
            })
            .catch((err) => console.log(err));
    };

    return (
        <Modal className="modal-dark-theme" show={show} onHide={handleClose}>
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
