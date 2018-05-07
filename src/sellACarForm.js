import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback} from 'availity-reactstrap-validation';
var scrollToElement = require('scroll-to-element');

class sellACarForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '', 
      address: '', 
      city: '',
      phoneNumber: '',
      email: '',
      carModel: '',
      carYear: '',
      carManufacturer: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  }
  handleValidSubmit(e,values) {
    e.preventDefault();
    let name = this.state.name.trim();
    let address = this.state.address.trim();
    let city = this.state.city.trim();
    let phoneNumber = this.state.phoneNumber.trim();
    let email = this.state.email.trim();
    let carModel = this.state.carModel.trim();
    let carYear = this.state.carYear.trim();
    let carManufacturer = this.state.carManufacturer.trim();

    if (!name || !address || !city || !phoneNumber || !email || !carModel || !carYear || !carManufacturer ) {
      return;
    }
    this.props.onSellingSubmit({ name: name, address: address, city: city, phoneNumber: phoneNumber, email: email,  carModel: carModel, carYear: carYear, carManufacturer: carManufacturer });
    this.setState = { 
      name: '', 
      address: '', 
      city: '',
      phoneNumber: '',
      email: '',
      carModel: '',
      carYear: '',
      carManufacturer: ''
    };

    scrollToElement('.sale', {
      offset: 0,
      ease: 'linear',
      duration: 1500
    });
  }
  render() {
    return (
      <div>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField id="name" name="name" placeholder="Name" bsSize="lg" required onChange={ this.handleInputChange }/>
          <AvField id="address" name="address" placeholder="Address" bsSize="lg" required onChange={ this.handleInputChange }/>
          <AvField id="city" name="city" placeholder="City" bsSize="lg" required onChange={ this.handleInputChange }/>
          <AvGroup>
            <AvInput id="phoneNumber" name="phoneNumber" placeholder="Phone number" bsSize="lg" required onChange={ this.handleInputChange } pattern="^(\d{1,2}\s)?\(?\d{3}\)?[-]?\d{3}[-]\d{4}$"/>
            <AvFeedback>The phone format should be (999)999-9999 or 999-999-9999</AvFeedback>
          </AvGroup>
          <AvField id="email" name="email" placeholder="Email" type="email" bsSize="lg" required onChange={ this.handleInputChange }/>
          <AvField id="carModel" name="carModel" placeholder="Car model" bsSize="lg" required onChange={ this.handleInputChange } />
          <Row>
            <Col md="4">
              <AvGroup>
                <AvInput id="carYear" name="carYear" placeholder="Car year" bsSize="lg" type="number" min="1885" max="2018" required onChange={ this.handleInputChange } />
                <AvFeedback>Sorry, we can't sell cars from the future nor before 1885!</AvFeedback>
              </AvGroup>  
            </Col>
            <Col md="8">
              <AvField id="carManufacturer" name="carManufacturer" placeholder="Car manufacturer" bsSize="lg" required onChange={ this.handleInputChange } />
            </Col>
          </Row>
          <Button size="lg" block type='submit' color="info">Sell my car!</Button>
        </AvForm>
      </div>
    )
  }
}

export default sellACarForm;