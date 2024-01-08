import './App.css';
import Header from './Header/Header.js';
import Slides from './Slides/Slides.js';
import NewArrivals from './NewArrivals/NewArrivals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Footer from './Footer/Footer';
import Home from './Home';
import About from './About';
import Collection from './Collection';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
return (
 <Router>
  <div className="app">
      <div style={{backgroundColor:"white", zIndex:"3", width:"100%"}}>
      <Header />
      </div>
      <Routes>
       <Route exact path= '/'  element={<Home/>}></Route>
       <Route exact path= '/about'  element={<About/>}></Route>
       <Route exact path= '/collection'  element={<Collection/>}></Route>
       <Route exact path= '/contact'  element={<Contact/>}></Route>

      </Routes>
  </div>
  </Router>
);
}




export default App;



