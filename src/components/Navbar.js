import {React, Component} from "react";
import icon from "./static/icon.png"

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                <img src={icon} alt="" width="50" height="50" />
                    <a class="navbar-brand" href="/">Tahsin Ayman</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/education/">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/certificates/">Certificates</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/projects/">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/scout/">Extra Curriculam</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;