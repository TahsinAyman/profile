import {React, Component} from "react";
import scout from "./static/scout.jpg"

class Scout extends Component {
    render() {
        return (
            <div>
                <h1>Scout</h1>
                <p>Recently Started at 2022. After 3 months of Scout Class Eearned the Membership Badge.</p>
                <img class="img-fluid" src={scout} />
            </div>
        )
    }
}

export default Scout;