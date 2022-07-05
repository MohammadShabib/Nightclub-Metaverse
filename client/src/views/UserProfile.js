import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./UserProfile.css";

export default (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [lotalty, setLotalty] = useState("");
    const [membership, setMembership] = useState("");
    const navigate = useNavigate();

    const updateHandler = (e) => {
        axios
            .put(
                `http://localhost:8000/api/user/${id}`,
                { firstName, lastName, email },
                {
                    withCredentials: true,
                }
            )
            .then((user) => console.log(user));
    };
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${id}`, {
                withCredentials: true,
            })
            .then((user) => {
                setFirstName(user.data.firstName);
                setLastName(user.data.lastName);
                setEmail(user.data.email);
                setLotalty(user.data.loyaltyStatus);
                setMembership(user.data.membershipStatus);
            })
            .catch((err) => navigate("/"));
    }, []);
    return (
        <div className="container mt-5" style={{ margin: "50px 0px" }}>
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            alt="Maxwell Admin"
                                        />
                                    </div>
                                    <h5 className="user-name">{`${firstName} ${lastName}`}</h5>
                                    <h6 className="user-email">{email}</h6>
                                </div>
                                <div className="about">
                                    <h5 className="mb-2 text-primary">About</h5>
                                    <p>
                                        I'm Yuki. Full Stack Designer I enjoy
                                        creating user-centric, delightful and
                                        human experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-3 text-primary">
                                        Personal Details
                                    </h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Enter last Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="eMail">Email</label>
                                        <input
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            type="email"
                                            className="form-control"
                                            id="eMail"
                                            placeholder="Enter email "
                                        />
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="website">
                                            Website URL
                                        </label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="website"
                                            placeholder="Website url"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-3 mt-3 text-primary">
                                        User Status
                                    </h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group mb-3 ">
                                        <label htmlFor="membership">
                                            Membership Type
                                        </label>
                                        <input
                                            disabled
                                            defaultValue={"Reguler"}
                                            type="name"
                                            className="form-control"
                                            id="membership"
                                            placeholder="Enter Membership"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="loyalty">Loyalty</label>
                                        <input
                                            disabled
                                            value={lotalty}
                                            type="name"
                                            className="form-control"
                                            id="loyalty"
                                            placeholder="Enter loyalty"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="">
                                        <button
                                            value={membership}
                                            type="button"
                                            id="submit"
                                            name="submit"
                                            className="btn btn-secondary me-3 mt-3"
                                            onClick={() => {
                                                console.log("cancel");

                                                navigate("/");
                                            }}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            id="submit"
                                            name="submit"
                                            className="btn btn-primary me-3 mt-3"
                                            onClick={updateHandler}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
