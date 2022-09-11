import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import  { Route ,Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";

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
       <Route  path='/shop' component={ShopPage}></Route>

    </Switch>
    </div>
  );
}
export default App;
