import Header from "./Header";
import Footer from "./Footer";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import ContactUs from "./Contactus";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      Hello World.I am learning React.
      
     <Header/>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<About />}/>
        <Route path="/services"element={<Services />}/>
        <Route path="/contactus"element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div></BrowserRouter>
    
  );
}

export default App;
