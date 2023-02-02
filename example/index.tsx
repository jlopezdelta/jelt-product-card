import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product1 = {
  id      : "1",
  title   : "Coffee Mug - Card",
  img     : "./coffee-mug.png"
}

const product2 = {
  id      : "2",
  title   : "Coffee Mug - Meme",
  img     : "./coffee-mug2 (1).png"
}


const App = () => {
  return (
    <ProductCard 
      product={ product1 } 
      initialValues={{
          count: 0,
          maxCount: 10
      }}
    >
      {( { count, isMaxCountReached, maxCount, inCreaseBy, reset} )=>(
              <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
              </>
      )}
  </ProductCard> 
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
