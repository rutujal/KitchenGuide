import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import App1 from './components/App1/App1';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';

const App = () => {



  return (
    <Router>
      
      
      <Switch>
        <Route exact path="/">
          <Header />
          <Menu />
        </Route>
        <Route exact path="/find">
        <Navbar/>
           <App1 />
        </Route>
        <Route exact path="/popular">
        <Navbar/>
           <Menu />
        </Route>
      </Switch>
    
    </Router>
  )
}

export default App;

