import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import {BrowserRouter,Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Route path="/home" component={Home}/>
            <Route path="/news" component={News}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
