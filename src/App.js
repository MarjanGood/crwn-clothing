import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import  { Route ,Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.components";

import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp.components'
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
     <Header></Header>

     <Switch>

       <Route exact path='/' component={HomePage}></Route>
       <Route path='/shop' component={ShopPage}></Route>
       <Route path='/signin' component={SignInAndSignUp}></Route>

    </Switch>
    </div>
  );
}
export default App;
