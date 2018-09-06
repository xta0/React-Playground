import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';

const App = () => (
  <div>
    <BookList />
    <BookDetail />
  </div>
);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container'),
);
