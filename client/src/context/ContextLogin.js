import React, { useContext, useState } from "react";
import Authenticate from "../utilities/Authenticate";
import User from "../services/User.service";
const LoginContext = React.createContext();

export const useLogin = () => {
    return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
    const [AUTH, setAUTH] = useState(Authenticate());

    const logout = () => setAUTH(Authenticate());
    const login = () => setAUTH(Authenticate());

    return (
        <LoginContext.Provider
            value={{ user: AUTH, auth: AUTH, logout, login }}
        >
            {children}
        </LoginContext.Provider>
    );
};
