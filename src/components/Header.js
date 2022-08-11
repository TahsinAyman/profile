import {React, Component} from "react";
import favicon from "./static/favicon.jpeg"

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={favicon} width="30" height="30" class="d-inline-block align-top" alt="" />
                    Bootstrap
                </a>    
            </nav>
        )
    }
}

export default Header;