import { Component } from "react";
import Navbar from "./components/Nav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Paint from './components/Paint';
import Paris from './components/Paris';
import Tiers from './components/Tiers';

class App extends Component{
  render(){
    return (
    <BrowserRouter>
    <div className="App">
    <Navbar/> 
    <Switch>
    <Route exact path='/' component={Home} /> 
    <Route path='/paint' component={Paint} /> 
    <Route path='/paris' component={Paris} /> 
    <Route path='/tiers' component={Tiers} /> 
    </Switch>
    </div>
    </BrowserRouter>
  );
}
  }


  
export default App;
