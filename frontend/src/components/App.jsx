import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import OrderListScreen from './screens/OrderListScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      {/* <CustomHeader /> */}
      <Header />
      <main className='py-3 '>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/orders/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/page/:pageNumber' component={HomeScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/admin/users/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/products/:id/edit'
            component={ProductEditScreen}
          />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
