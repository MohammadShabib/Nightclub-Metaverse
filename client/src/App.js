import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import UserProfile from "./views/UserProfile";
import Logout from "./components/Logout";
import NabarHead from "./components/NabarHead";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container-fluid p-0">
                    <div className="row">
                        <NabarHead />
                    </div>
                    <div className="row">
                        <Routes>
                            <Route path="/user/:id" element={<UserProfile />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <div className="row">
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
