import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from './components/pages/UserList/UserList';
import User from './components/pages/User/User';
import NewUser from './components/pages/NewUser/NewUser';
import ProductList from './components/pages/ProductList/ProductList';
import ProductEdit from './components/pages/ProductEdit/ProductEdit';
import NewProduct from './components/pages/NewProduct/NewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path={"/newUser"}>
              <NewUser />
            </Route>
            <Route path={"/products"}>
              <ProductList />
            </Route>
            <Route path={"/product/:productId"}>
              <ProductEdit />
            </Route>
            <Route path={"/newProduct"}>
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
