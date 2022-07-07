import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import NabarHead from "./components/organism/NabarHead";
import Footer from "./components/atoms/AtomFooter";

import { LoginProvider } from "./context/ContextLogin";

import Authenticate from "./utilities/Authenticate";

function App() {
    return (
        <BrowserRouter>
            <LoginProvider>
                <div className="App">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <NabarHead />
                        </div>
                        <div className="row">
                            <Routes>
                                <Route
                                    path="/user/:id"
                                    element={<UserProfile />}
                                />

                                <Route path="/" element={<Home />} />
                            </Routes>
                        </div>
                        <div className="row">
                            <Footer />
                        </div>
                    </div>
                </div>
            </LoginProvider>
        </BrowserRouter>
    );
}

export default App;
