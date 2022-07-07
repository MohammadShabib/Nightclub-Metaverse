import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import UpdateUserInfo from "../components/moleculles/MolecullesUpdateUserInfo";
import UserProfileInfo from "../components/moleculles/MolecullesUserProfileInfo";

import User from "../services/User.service";
import "./UserProfile.css";

export default (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [lotalty, setLotalty] = useState("");
    const [membership, setMembership] = useState("");
    const navigate = useNavigate();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getInfo = async () => {
            const user = new User({ id });
            const res = await user.getInfo();
            if (res) {
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setEmail(res.email);
                setLotalty(res.loyaltyStatus);
                setMembership(res.membershipStatus);
                setLoaded(true);
            } else {
                navigate("/");
            }
        };
        getInfo();
    });

    return (
        <>
            {loaded && (
                <div className="container mt-5" style={{ margin: "50px 0px" }}>
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <UserProfileInfo
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                            />
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <UpdateUserInfo
                                id={id}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                membership={membership}
                                lotalty={lotalty}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
