import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home';
import About from './About/About';
import Collection from './Collection';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
  const location = useLocation(); // Get the current location

  const pageVariants = {
    initialState: {
      opacity: 0,

    },
    in: {
      opacity: 1,
    },
  };

  

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} transition='0.2' >
            <Home />
          </motion.div>
        } />
        <Route exact path='/about' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants}>
            <About />
          </motion.div>
        } />
        <Route exact path='/collection' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} >
            <Collection />
          </motion.div>
        } />
        <Route exact path='/contact' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} >
            <Contact />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <div style={{ backgroundColor: "white", zIndex: "3", width: "100%" }}>
          <Header />
        </div>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
