import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={SignUp}/>
      </Switch>
      <Footer/>
    </Router> 
    </>
  );
}

export default App;
