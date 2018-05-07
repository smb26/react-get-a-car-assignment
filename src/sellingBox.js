//SellingBox.js
import React, { Component } from 'react';
import axios from 'axios';
import SellingList from './sellingList';
import SellACarForm from './sellACarForm';
import { Container, Row, Col } from 'reactstrap';

class SellingBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleSaleSubmit = this.handleSaleSubmit.bind(this);
    this.pollInterval = null;
  }
  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handleSaleSubmit(sale) {
    let sales = this.state.data;
    sale.id = Date.now();
    let newSales = sales.concat([sale]);
    this.setState({ data: newSales });
    axios.post(this.props.url, sale)
      .catch(err => {
        console.error(err);
        this.setState({ data: sales });
      });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    }
  }
  render() {
    return (
      <div className="sellingBox">
        <Container className="sellingBox-formSection">
          <Row>
            <Col md="6">
              <h2 className="display-4 sellingform-title">So you need to sell your car first?</h2>
              <p className="sellingform-subtitle">Please input your personal info and car details on this form.<br/>All fields are mandatory.</p>
            </Col>
            <Col md="6">
              <SellACarForm onSellingSubmit={ this.handleSaleSubmit }/>
            </Col>
          </Row>
        </Container>
        
        
        <SellingList data={ this.state.data }/>
        
      </div>
    )
  }
}

export default SellingBox;