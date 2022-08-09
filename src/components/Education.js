import {React, Component} from "react";
import shksc_logo from "./static/shksc_logo.jpeg";


class Education extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <h1>Education</h1>
                <br />
                <br />
                <div class="card col">
                    <div class="col-3 block-center">
                        <img src={shksc_logo} class="card-img-top" alt="school" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Education</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: Tahsin Ayman</li>
                        <li class="list-group-item">Class: 6</li>
                        <li class="list-group-item">(1st Captain)</li>
                        <li class="list-group-item">Year: 2022</li>
                    </ul>
                </div> 
            </div> 
        )
    }
}

export default Education