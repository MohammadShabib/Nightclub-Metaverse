import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import User from "../../services/User.service";
const MolecullesUpdateUserInfo = (props) => {
    const id = props.id;
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [lotalty, setLotalty] = useState(props.lotalty);
    const [membership, setMembership] = useState(props.membership);

    const navigate = useNavigate();
    const location = useLocation();

    const updateHandler = async (e) => {
        const user = new User({ id, firstName, lastName, email });
        const res = await user.updateInfo();
        if (res) {
            window.location = location.pathname;
        }
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-3 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group mb-3 ">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter first name"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                id="eMail"
                                placeholder="Enter email "
                            />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label htmlFor="website">Website URL</label>
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
                        <h6 className="mb-3 mt-3 text-primary">User Status</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group mb-3 ">
                            <label htmlFor="membership">Membership Type</label>
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
    );
};

export default MolecullesUpdateUserInfo;
