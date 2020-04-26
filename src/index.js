import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GiftBox from './component/gift-box/gift-box';
import DashLayout from './component/dash-layout/dash-layout';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

function App() {
  return (
    <DashLayout>
      <GiftBox />
    </DashLayout>
  )
}

