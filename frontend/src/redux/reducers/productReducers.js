import * as constants from '../constants/productConstants.js';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case constants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        products: action.payload.products,
      };
    case constants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case constants.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case constants.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case constants.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case constants.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case constants.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case constants.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case constants.PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case constants.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case constants.PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case constants.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case constants.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case constants.PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case constants.PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case constants.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case constants.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case constants.PRODUCT_TOP_RATED_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_TOP_RATED_SUCCESS:
      return { loading: false, products: action.payload };
    case constants.PRODUCT_TOP_RATED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};