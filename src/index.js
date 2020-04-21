import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GiftBox from './component/gift-box/gift-box';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  return (
    <GiftBox />
  )
}

