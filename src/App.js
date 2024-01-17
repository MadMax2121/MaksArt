import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home';
import About from './About/About';
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer/Footer';
import ProductInfo from './ProductInfo/ProductInfo';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './Firebase';


function AnimatedRoutes() {
  const location = useLocation(); // Get the current location

  const pageVariants = {
    initialState: {
      opacity: 0,

    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const [paintings, setPaintings] = useState([]);

  useEffect (() =>{
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "paintings"));
      const paintingData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPaintings(paintingData);
    };

    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} transition='0.2' >
            <Home />
            <Footer/>
          </motion.div>
        } />
        <Route exact path='/about' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants}>
            <About />
            <Footer/>
          </motion.div>
        } />
        <Route exact path='/collection' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} >
            <Collection paintings = {paintings}/>
            <Footer/>
          </motion.div>
        } />
        <Route exact path='/contact' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} >
            <Contact />
            <Footer/>
          </motion.div>
        } />
        <Route exact path='/product_information' element={
          <motion.div initial="initialState" animate="in" exit="out" variants={pageVariants} >
            <ProductInfo/>
            <Footer/>
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
