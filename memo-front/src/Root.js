import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // SPA를 바탕으로 작업할 때는 라우트 기능을 사용하자!
import App from 'components/App';

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Root;