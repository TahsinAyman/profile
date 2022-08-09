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
                <h1>Certificates</h1>
                <div class="row">
                    <Certificates />
                </div>
                <Scout />
                <h1>Projects</h1>
                <div class="row">
                    <Projects />
                </div>
            </div>
        )
    }
}

export default Home;
