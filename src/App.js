import './App.css';
import Header from './Header/Header.js';
import Slides from './Slides/Slides.js';
import FirstThree from './FirstThree/FirstThree';
import NewArrivals from './NewArrivals/NewArrivals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Footer from './Footer/Footer';


function App() {
 return (
   <div className="app">
       <div style={{"background-color":"white", "z-index":"3", width:"100%"}}>
       <Header />
       </div>
      
       <div style={{"background-color":"white"}}>
       <Slides />
      
      
       </div>
       <div classN ame='secondSection' style={{"background-color":"white"}}>
       <FirstThree/>
       <NewArrivals/>
       </div>


       <FeaturedProducts/>
       <div></div>
       <Footer/>
      
      




   </div>
 );
}


export default App;
