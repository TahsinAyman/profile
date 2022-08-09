import {React, Component} from "react";
import scout from "./static/scout.jpg"

class Scout extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <h1>Scout</h1>
                <br />
                <br />
                <p>Recently Started at 2022. After 3 months of Scout Class Eearned the Membership Badge.</p>
                <img src={scout} />
            </div>
        )
    }
}

export default Scout;