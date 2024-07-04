import React from 'react';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Authentication from './views/Authentication';
import Home from './views/Home';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ForgetPassword from './views/ForgetPassword';
import ResetPassword from './views/ResetPassword';
import Contact from './views/Contact';
import SignleProduct from './views/SignleProduct';
import Shop from './views/Shop';
import Cart from './views/Cart';
import Users from './views/Users';
import Categories from './views/Categories';
import Products from './views/Products';
import Activation from './views/Activation';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Profile from './views/Profile';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <PublicRoute restricted={false} exact path='/' component={Home} ></PublicRoute>
          <PublicRoute restricted={true} path='/authentication' component={Authentication} />
          <PublicRoute restricted={true} path='/forget' component={ForgetPassword} ></PublicRoute>
          <PublicRoute restricted={true} path='/reset/:token' component={ResetPassword} ></PublicRoute>
          <PublicRoute restricted={false} path='/contact' component={Contact} ></PublicRoute>
          <PublicRoute restricted={false} path='/product/:id' component={SignleProduct} ></PublicRoute>
          <PublicRoute restricted={false} path='/shop' component={Shop} ></PublicRoute>
          <PublicRoute restricted={false} path='/cart' component={Cart} ></PublicRoute>
          <PrivateRoute path='/users' roles={['admin']} component={Users} ></PrivateRoute>
          <PrivateRoute path='/categories' roles={['admin']} component={Categories} ></PrivateRoute>
          <PrivateRoute path='/Products' roles={['admin']} component={Products} ></PrivateRoute>
          <PrivateRoute path='/profile' roles={['admin', 'client', 'livreur']} component={Profile} ></PrivateRoute>
          <PublicRoute restricted={true} path='/activate/:token' component={Activation} ></PublicRoute>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
