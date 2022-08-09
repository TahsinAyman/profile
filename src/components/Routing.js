import {React, Component} from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import UrlError from "./UrlError"
import Home from "./Home"
import Education from "./Education";
import Certificates from "./Certificates";
import Scout from "./Scout";
import About from "./About";
import Projects from "./Projects"


class Routing extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/education/" element={<Education />}/>
                    <Route path="/certificates/" element={<Certificates />}/>
                    <Route path="/scout/" element={<Scout />}/>
                    <Route path="/about/" element={<About />}/>
                    <Route path="/projects/" element={<Projects />}/>
                    <Route path="/*" element={<UrlError />} />
                </Routes>
            </Router>
        )
    }
}

export default Routing;