//Sale.js
import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

class Sale extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      address: '',
      city: '',
      phoneNumber: '',
      email: '',
      carModel: '',
      carYear: '',
      carManufacturer: ''
    };
  }
  render() {
    return (
      <Card className="sale">
          <CardHeader tag="h3">{this.props.carModel} - {this.props.carYear}</CardHeader>
          <CardBody>
            <CardText>
              {this.props.name} <br/>
              {this.props.address} <br/>
              {this.props.city} <br/>
              {this.props.phoneNumber} <br/>
              {this.props.email}
            </CardText>
            <CardText>
              <small className="text-muted">{this.props.carManufacturer}</small>
            </CardText>
            <a href={"http://www.jdpower.com/cars/" + this.props.carManufacturer + "/" + this.props.carModel+ "/" +this.props.carYear} target="_blank">See more</a>
          </CardBody>
      </Card>
    )
  }
}

export default Sale;