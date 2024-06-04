import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./components/Navbar1"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Apicall from './components/Apicall';
function App() {
  return (
    <div className="App">
<Navbar1/>
<Main/>
<Apicall/>
<Footer/>
    </div>
  );
}

export default App;
