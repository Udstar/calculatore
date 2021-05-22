import './App.css';
import { Calculatore } from './camponent/Calculatore';
import { Header } from "./camponent/Header";
import { About } from './camponent/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
    
    <> 
    <Router>
      <Header/> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Calculatore/>
            </>)
          }}> 
          </Route>
          <Route exact path="/About">
            <About />
          </Route> 
        </Switch> 
    </Router>
    </>
  );
}

export default App;
