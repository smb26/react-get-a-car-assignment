import React, { Component } from 'react';

import IntroVideo from './introVideo';
import SellingBox from './sellingBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <IntroVideo />
        <SellingBox url='http://localhost:3001/api/sales'
        pollInterval={2000} />
      </div>
    );
  }
}




export default App;
