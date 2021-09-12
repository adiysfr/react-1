import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import { ListCategories, NavbarComponent, Hasil } from './components';
import { API_URL } from './utils/constant';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: []
    }
  }

  componentDidMount() {
    axios.get(API_URL + 'products')
      .then(res => {
        const menus = res.data;
        console.log(menus)
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const {menus} = this.state
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <strong>Daftar Produk</strong>
                <hr />
                <Row>
                  {menus && menus.map((menu)=>(
                    <h2>{menu.nama}</h2>
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}