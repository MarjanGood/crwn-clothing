import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import  { Route ,Switch} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>
    Hats page 
    </h1>
  </div>
);

function App() {
  return (
    <div>

     <Switch>

       <Route exact path='/' component={HomePage}></Route>
       <Route  path='/hats' component={HatsPage}></Route>

    </Switch>
    </div>
  );
}
export default App;
