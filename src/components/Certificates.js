import {React, Component} from "react";
import hackerrank from "./static/hackerrank.png"
import config from "./data/backend"
import ReactDOM from "react-dom"


class Certificates extends Component {
    constructor() {
        super();
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const data = JSON.parse(this.responseText)
            const context = ReactDOM.createRoot(document.getElementById("context-certificate"));
            context.render(
                data.map((i) => {
                    return (
                        <div class="col">
                            <div class="card">
                                <div class="col block-center">
                                    <img src={hackerrank} class="card-img-top" alt="school" />
                                 </div>
                                <div class="card-body">
                                    <h5 class="card-title">{i.title}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{i.company}</li>
                                    <li class="list-group-item">{i.birth}</li>
                                    <li class="list-group-item">{i.expiration}</li>
                                    <li class="list-group-item">Credential ID {i.credentialId.toUpperCase()}</li>
                                    <li class="list-group-item"><a href={i.link} class="card-link" target="blank">{i.title}</a></li>
                                </ul>   
                            </div> 
                        </div>
                        )
                    }
                )
            );
        }
        xhttp.open("GET", `${config.url}/certificates/`);
        xhttp.send();
    }

    render() {
        return (
            <div id="context-certificate" class="row">
                
            </div>
        )
    }
}

export default Certificates;