import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Events from './components/Events';
import {BrowserRouter,Route} from 'react-router-dom'


class App extends Component {
  
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/events" component={Events}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
