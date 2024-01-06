import './App.css';
import Header from './Header/Header.js';
import FirstContainer from './FirstContainer/FirstContainer.js';
import FirstThree from './FirstThree/FirstThree';
import NewArrivals from './NewArrivals/NewArrivals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Footer from './Footer/Footer';


// In your component


function App() {
  return (
    <div className="app">
        <div style={{"background-color":"rgb(248, 248, 252)"}}>
        <Header />
        <FirstContainer />
        </div>
        <div className='secondSection' style={{"background-color":"white"}}>
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
