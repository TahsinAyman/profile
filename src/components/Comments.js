import {React, Component} from "react";
import config from "./data/backend"
import ReactDOM from "react-dom"

class Comment extends Component {
    constructor() {
        super();
        this.comment = this.comment.bind(this);
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const data = JSON.parse(this.responseText);
            console.log(data);
            const context = ReactDOM.createRoot(document.getElementById("context-comment"));
            context.render(
                data.map((i) => {
                    return (
                        <div>
                            <div>
                                <label class="form-label">{i.name}</label>
                            </div>
                            <div>
                                <textarea class="form-control" readOnly rows="1">{i.comment}</textarea>
                            </div>
                        </div>
                    )
                })
            );
        }
        xhttp.open("GET", `${config.url}/comments/`);
        xhttp.send();
    }

    comment(event) {
        event.preventDefault();
        const postData = {
            "name": event.target.user.value,
            "comment": event.target.comment.value
        }
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (! JSON.parse(this.responseText).result) {
                const result = ReactDOM.createRoot(document.getElementById("result-box"))
                result.render(
                    <div class="alert alert-danger" role="alert">
                        Couldn't Add Comment. Please Try Again.
                    </div>
                );
            } else {
                window.location.reload(false);
            }
        }
        xhttp.open("POST", `${config.url}/comments/add/`);
        xhttp.send(JSON.stringify(postData));
        event.target.user.value = "";
        event.target.comment.value = "";
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                <div class="row" id="context-comment">
                    
                </div>
                <hr />
                <form class="row" onSubmit={this.comment}>
                    <div class="mb-3">
                        <label for="user" class="form-label">User Name</label>
                        <input type="text" required class="form-control" id="user" name="user" placeholder="Your Name" />
                    </div>
                    <div class="mb-3">
                        <label for="comment" class="form-label">Comment</label>
                        <textarea class="form-control" required id="comment" name="comment" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div id="result-box">

                </div>
            </div>
        )
    }
}

export default Comment;