import axios from "axios";
import { useState, useEffect } from "react";
import auth from "./auth";
export default () => {
    useEffect(() => {
        if (auth()) {
            axios
                .get("http://localhost:8000/api/logout", {
                    withCredentials: true,
                })
                .then(() => (window.location.href = "/"))
                .catch((err) => console.log(err));
        } else window.location.href = "/";
    });
};
