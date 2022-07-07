import axios from "axios";
class User {
    constructor({ id, firstName, lastName, email, password }) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    register() {
        return axios
            .post("http://localhost:8000/api/user/register", this, {
                withCredentials: true,
            })
            .then((user) => user.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    signin() {
        return axios
            .post(
                "http://localhost:8000/api/user/login",
                {
                    email: this.email,
                    password: this.password,
                },
                { withCredentials: true }
            )
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    getInfo() {
        return axios
            .get(`http://localhost:8000/api/user/${this._id}`, {
                withCredentials: true,
            })
            .then((user) => user.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    updateInfo() {
        return axios
            .put(
                `http://localhost:8000/api/user/${this._id}`,
                {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                },
                {
                    withCredentials: true,
                }
            )
            .then((user) => user.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    static logout() {
        return axios
            .get("http://localhost:8000/api/logout", {
                withCredentials: true,
            })
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
}
export default User;
