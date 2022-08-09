import {React, Component} from "react";
import data from "./data/project_data"

class Projects extends Component {
    render() {
        return (
            data.map((i) => {
               return (
                    <div class="card col-3">
                        <div class="card-body">
                            <h5 class="card-title">{i.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{i.company}</h6>
                            <p class="card-text">{i.description}</p>
                            <a href={i.url} target="blank" class="card-link">View Website</a>
                        </div>
                    </div>
               )
            })
        )
    }
}

export default Projects;