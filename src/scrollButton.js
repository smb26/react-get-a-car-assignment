//ScrollButton.js
import React, { Component } from 'react';
import { Button } from 'reactstrap';
var scrollToElement = require('scroll-to-element');

class Scrollbutton extends Component {
  handleClick(event) {
    const target = event.target;
    const name = target.id;

    scrollToElement(name, {
      offset: 0,
      ease: 'linear',
      duration: 1500
    });
  }
  render() {
    return (
      <Button className="scrollButton" onClick={ this.handleClick } id={this.props.scroll} color="info">
        {this.props.msg}
      </Button>
    )
  }
}

export default Scrollbutton;