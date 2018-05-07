//SellingList.js
import React, { Component } from 'react';
import Sale from './sale';
import style from './style';
import { CardDeck, Row } from 'reactstrap';
import Scrollbutton from './scrollButton';

class SellingList extends Component {
  render() {
    let saleNodes = this.props.data.map(sale => {
      return (
        <Sale
          name={ sale.name }
          address={ sale.address }
          phoneNumber={ sale.phoneNumber }
          email={ sale.email }
          city={ sale.city }
          carModel={ sale.carModel }
          carYear={ sale.carYear }
          carManufacturer={ sale.carManufacturer }
        >
        </Sale>
      )
    })
    return (
      <div className="availableCars-container">
        <div className="container">
          <h2 className="display-4 availableCars-title">Available cars:</h2>
          <Scrollbutton scroll='#root' msg="^"></Scrollbutton>
          <Row>
          <CardDeck>
            { saleNodes }
          </CardDeck>
          </Row>
        </div>
      </div>
    )
  }
}

export default SellingList;