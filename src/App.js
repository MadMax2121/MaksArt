import './App.css';
import Header from './Header/Header.js';
import Slides from './Slides/Slides.js';
import NewArrivals from './NewArrivals/NewArrivals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Footer from './Footer/Footer';


function App() {
 return (
   <div className="app">
       <div style={{backgroundColor:"white", zIndex:"3", width:"100%"}}>
       <Header />
       </div>
      
       <div style={{backgroundColor:"white"}}>
       <Slides />
      
      
       </div>
       <div style={{backgroundColor:"white"}}>
       <NewArrivals/>
       </div>


       <FeaturedProducts/>
       <div></div>
       <Footer/>
      
      




   </div>
 );
}


export default App;
