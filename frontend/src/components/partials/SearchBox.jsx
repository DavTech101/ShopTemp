import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={searchSubmitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        value={keyword}
        className='mr-sm-2 ml-sm-5'
        placeholder='Search Products...'
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      ></Form.Control>
      <Button type='submit' className='p-2' variant='dark'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
