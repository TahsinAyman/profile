import {React, Component} from "react";
import ReactDOM from "react-dom";
import config from "./data/backend"

class Projects extends Component {

    constructor() {
        super();
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const data = JSON.parse(this.responseText);
            const context = ReactDOM.createRoot(document.getElementById("context-project"));
            context.render(
                data.map((i) => {
                    return (
                         <div class="col">
                             <div class="card">
                                 <div class="card-body">
                                     <h5 class="card-title">{i.title}</h5>
                                     <h6 class="card-subtitle mb-2 text-muted">{i.company}</h6>
                                     <p class="card-text">{i.description}</p>
                                     <a href={i.url} target="blank" class="card-link">View Website</a>
                                 </div>
                             </div>
                         </div>
                    )
                })
            );
        }
        xhttp.open("GET", `${config.url}/projects/`);
        xhttp.send();
    }

    render() {
        return (
            <div id="context-project" class="row">

            </div>         
        )
    }
}

export default Projects;