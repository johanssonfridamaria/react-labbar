import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostsContextProvider from './contexts/PostsContext';


ReactDOM.render(
  <React.StrictMode>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

