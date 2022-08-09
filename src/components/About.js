import {React, Component} from "react";
import tahsin_at_forest from "./static/tahsin_at_forest.jpg"

class About extends Component {
    render() {
        return (           
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={tahsin_at_forest} class="img-fluid rounded-start" />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">About</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Tahsin Ayman</h6>
                        <p class="card-text">My Name is Tahsin Ayman. I am 13 years old. I'm currently at Demra, Dhaka.
                        I read in Class 6 at Shamsul Haque Khan School.
                        There are 7 members in my Family. They are- father, mother, brother, sister, grandmother, grandmother's sister.
                        I started doing Programming when i was at Class 5.
                        At First I learned C and then C++, Java, Python, JavaScript, React and manymore.
                        I've also solved hard alogrithm problems in hackerrank so i got certified at many programming language.
                        I also do Scout. After 3 months being in Scout I Finally Became The Member of Bangladesh Scout.
                        I also have a facebook, github, replit, fiverr, stackoverflow, upwork, google account.
                        Make sure to Check them.</p>
                    </div>
                    </div>
                </div>
            </div> 
            
        )
    }
}

export default About;