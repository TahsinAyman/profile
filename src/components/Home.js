import {React, Component} from "react";
import Education from "./Education";
import Scout from "./Scout";
import About from "./About";
import Certificates from "./Certificates";
import Projects from "./Projects";

class Home extends Component {
    render() {
        return (
            <div>
                <About />
                <hr />
                <Education /> 
                <hr />
                <br />
                <br />
                <h1>Certificates</h1>
                <br />
                <br />
                <div class="row">
                    <Certificates />
                </div>
                <hr />
                <Scout />
                <hr />
                <br />
                <br />
                <h1>Projects</h1>
                <br />
                <br />
                <Projects />
            </div>
        )
    }
}

export default Home;
