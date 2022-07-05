import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

export default (props) => {
    const [firstName, setFirstName] = useState("ahmad");
    const [lastName, setLastName] = useState("samer");
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("pass123@");

    const { show, setShow } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const FormSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/user/register",
                {
                    firstName,
                    lastName,
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((data) => {
                handleClose();
                window.location.href = "/";
            })
            .catch((err) => console.log(err));
    };
    return (
        <Modal className="modal-dark-theme" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={FormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
