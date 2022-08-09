import {React, Component} from "react";
import hackerrank from "./static/hackerrank.png"
import data from "./data/certificate_data"


class Certificates extends Component {
    render() {
        return (
            data.map((i) => {
                return (
                    <div class="col-3">
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
            })
        )
    }
}

export default Certificates;