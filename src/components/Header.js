import { React, Component } from "react";
import icon from "./static/icon.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import cover from "./static/cover.jpeg"

class Header extends Component {
    render() {
        return (  
            <div>
                <nav class="navbar bg-light">
                    <div class="container-fluid row">
                        <div class="col-1">
                            <a class="navbar-brand" href="/">
                                <img src={icon} alt="photo.jpeg" width="50" height="50" class="d-inline-block align-text-top rounded-circle" />
                            </a>
                        </div>
                        <div class="col-1">
                            <a class="navbar-brand" href="/">
                                Tahsin Ayman
                            </a>
                        </div>
                        <div class="col-1">
                            <div class="nav-item">
                                <a class="nav-link" href="/education/">Education</a>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="nav-item">
                                <a class="nav-link" href="/certificates/">Certificates</a>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="nav-item">
                                <a class="nav-link" href="/scout/">Scout</a>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="nav-item">
                                <a class="nav-link" href="/about/">About</a>
                            </div>
                        </div>
                        <div class="col-1">
                            <div class="nav-item">
                                <a class="nav-link" href="/projects/">Projects</a>
                            </div>  
                        </div>
                    </div>
                </nav>

                <div class="col-3 product-holder">
                    <img class="img-responsive center-block d-block mx-auto" src={cover}/>
                    <img class="d-inline-block align-text-top img-thumbnail rounded-circle plus-image" src={icon}/>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <hr />
            </div>  
        )
    }
}

export default Header;