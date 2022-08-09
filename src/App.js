import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Routing from "./components/Routing"

function App() {
  return (
    <div class="container">
      <div class="row">
        <Header />
      </div>
      <div class="row">
        <Routing />  
      </div>      
      <div class="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
