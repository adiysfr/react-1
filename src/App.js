import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { ListCategories, NavbarComponent, Hasil, Menus } from "./components";
import { API_URL } from "./utils/constant";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categrorySelect: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categorySelect)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeCategory = (val) => {
    this.setState({
      categorySelect: val,
      menu: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + val)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { menus, categorySelect } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                categorySelect={categorySelect}
              />{" "}
              <Col>
                <strong> Daftar Produk </strong> <hr />
                <Row>
                  {" "}
                  {menus &&
                    menus.map((menu) => (
                      <Menus key={menu.id} menu={menu} />
                    ))}{" "}
                </Row>{" "}
              </Col>{" "}
              <Hasil />
            </Row>{" "}
          </Container>{" "}
        </div>{" "}
      </div>
    );
  }
}
