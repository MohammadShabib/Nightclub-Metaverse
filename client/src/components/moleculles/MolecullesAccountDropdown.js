import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../context/ContextLogin";
import User from "../../services/User.service";

const AtomAccountDropdown = () => {
    const navigate = useNavigate();
    const { user, logout } = useLogin();

    const LogoutHandler = async () => {
        const res = await User.logout();
        if (res) {
            logout();
            navigate("/");
        }
    };

    return (
        <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => navigate(`/user/${user}`)}>
                Edit Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#support">Support</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item onClick={LogoutHandler}>Log out</NavDropdown.Item>
        </NavDropdown>
    );
};

export default AtomAccountDropdown;
