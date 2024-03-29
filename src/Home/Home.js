import Slides from './Slides/Slides';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import NewArrivals from './NewArrivals/NewArrivals';


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

        </div>
    );
}


export default Home;
