import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Routing from "./components/Routing"
import Comment from "./components/Comments"

function App() {
  return (
    <div class="container">
      <div class="row">
        <Header />
      </div>
      <div class="row"><hr /></div>
      <div class="row">
        <Routing />  
      </div>     
      <div class="row"><hr /></div>
      <div class="row">
        <Comment />
      </div>
      <div class="row"><hr /></div>
      <div class="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
