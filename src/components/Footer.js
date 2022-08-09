import {React, Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

class Footer extends Component {
    render() {
        return (
            <div>
                <hr />
                <footer class="text-center">
                    This is a Profile of Tahsin Ayman
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} />
                    : <a href="mailto:mail4tahsin@gmail.com" target="blank">mail4tahsin@gmail.com</a>
                    <br />
                    Github
                    : <a href="https://github.com/TahsinAyman" target="blank">TahsinAyman</a>
                    <br />
                    Linkedin
                    : <a href="https://www.linkedin.com/in/tahsin-ayman/" target="blank">Tahsin Ayman</a>
                    <br />
                    Fiverr
                    : <a href="https://www.fiverr.com/users/tahsinayman" target="blank">tahsinayman</a>
                    <br />
                    Facebook
                    : <a href="https://www.facebook.com/Tahsin.Ayman" target="blank">TahsinAyman</a>
                    <br />
                    Copyright © 2022
                </footer>
            </div>
        )
    }
}

export default Footer;