import Meta from '../partials/Meta';
import { Link } from 'react-router-dom';
import Loader from '../partials/Loader';
import React, { useEffect } from 'react';
import Product from '../partials/Product';
import Message from '../partials/Message';
import { Col, Row } from 'react-bootstrap';
import Paginate from '../partials/Paginate';
import { useDispatch, useSelector } from 'react-redux';
import ProductCarousel from '../partials/ProductCarousel';
import { listProducts } from '../../redux/actions/productActions.js';

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
