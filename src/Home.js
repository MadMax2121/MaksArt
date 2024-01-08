import './App.css';
import Slides from './Slides/Slides.js';
import NewArrivals from './NewArrivals/NewArrivals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Footer from './Footer/Footer';


function Home() {
    return (
        <div className="app">
            <div style={{ backgroundColor: "white" }}>
                <Slides />
            </div>
            
            <div style={{ backgroundColor: "white" }}>
                <NewArrivals />
            </div>

            <FeaturedProducts />


            <Footer />
        </div>
    );
}


export default Home;
