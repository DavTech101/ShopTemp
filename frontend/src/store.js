import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
  productDetailsReducer,
  productTopRatedReducer,
  productCreateReviewReducer,
} from './redux/reducers/productReducers.js';
import { cartReducer } from './redux/reducers/cartReducers.js';
import {
  userListReducer,
  userLoginReducer,
  userUpdateReducer,
  userDeleteReducer,
  userDetailsReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './redux/reducers/userReducers.js';
import {
  orderPayReducer,
  orderListReducer,
  orderListMyReducer,
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
} from './redux/reducers/orderReducers.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = combineReducers({
  cart: cartReducer,
  orderPay: orderPayReducer,
  userList: userListReducer,
  orderList: orderListReducer,
  userLogin: userLoginReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  productList: productListReducer,
  orderCreate: orderCreateReducer,
  orderListMy: orderListMyReducer,
  userDetails: userDetailsReducer,
  orderDeliver: orderDeliverReducer,
  userRegister: userRegisterReducer,
  orderDetails: orderDetailsReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productDetails: productDetailsReducer,
  productTopRated: productTopRatedReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productCreateReview: productCreateReviewReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
