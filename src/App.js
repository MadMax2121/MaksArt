import './App.css';
import Header from './Header/Header.js';
import FirstContainer from './FirstContainer/FirstContainer.js';
import FirstThree from './FirstThree/FirstThree';
import NewArrivals from './NewArrivals/NewArrivals';


// In your component


function App() {
  return (
    <div className="app">
        <div className='firstContainer'>
        <Header />
        <FirstContainer />
        </div>
      
        <div className='secondSection' style={{"background-color":"white"}}>
        <FirstThree/>
        <NewArrivals/>
        </div>
        


    </div>
  );
}

export default App;
