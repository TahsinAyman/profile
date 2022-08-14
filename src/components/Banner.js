import {React, Component} from "react";
import cover from "./static/cover.jpeg"
import icon from "./static/icon.jpeg"

class Banner extends Component {
    render() {
        return (
                <div class="banner">
                    <img class="rounded-circle plus-image" src={icon} />
                </div>
        )
    }
}

export default Banner;