import {React, Component} from "react";
import tahsin_at_forest from "./static/tahsin_at_forest.jpg"

class About extends Component {
    render() {
        return (            
            <div class="card">
                <div class="col-5 block-center">
                    <img src={tahsin_at_forest} class="card-img-top w-20 h-20" alt="school" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">About</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Tahsin Ayman</h6>
                    <p class="card-text">My Name is Tahsin Ayman. I am 13 years old. I'm currently at Demra, Dhaka.</p>
                    <p class="card-text">I read in Class 6 at Shamsul Haque Khan School</p>
                    <p class="card-text">There are 7 members in my Family. They are- father, mother, brother, sister, grandmother, grandmother's sister</p>
                    <p class="card-text">I started doing Programming when i was at Class 5.</p>
                    <p class="card-text">At First I learned C and then C++, Java, Python, JavaScript, React and manymore</p>
                    <p class="card-text">I've also solved hard alogrithm problems in hackerrank so i got certified at many programming language.</p>
                    <p class="card-text">I also do Scout. After 3 months being in Scout I Finally Became The Member of Bangladesh Scout.</p>
                    <p class="card-text">I also have a facebook, github, replit, fiverr, stackoverflow, upwork, google account.</p>
                    <p class="card-text">Make sure to Check them.</p>
                </div>
            </div>
        )
    }
}

export default About;