import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Events from './components/Events';
import Jobs from './components/Jobs';
import Directory from './components/Directory';
import Magazine from './components/Magazine';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Projects from './components/Projects';
import Resource from './components/Resource';
import {BrowserRouter,Route} from 'react-router-dom';
import axios from 'axios';
// const dotenv=require('dotenv');
// dotenv.config();



class App extends Component {
  
  componentDidMount(){
    axios.get("https://cors-anywhere.herokuapp.com/http://142.93.38.157:5000/api/articles?kind=news")
    .then(resp=>{
      console.log(resp.data);
    })
    .catch(err=>{console.log(err)});
  }
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/events" component={Events}/>
            <Route path="/jobs" component={Jobs}/>
            <Route path="/directory" component={Directory}/>
            <Route path="/magazine" component={Magazine}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resource" component={Resource}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
