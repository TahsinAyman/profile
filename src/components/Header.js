import { React, Component } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Banner />
                </div>
            </div>
        )
    }
}

export default Header;