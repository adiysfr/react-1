import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { categories } = this.state;
    const { changeCategory, categorySelect } = this.props;
    console.log(categorySelect)
    return (
      <Col md={3} mt="2">
        <h4>Daftar Kategori </h4> <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={categorySelect === category.nama && "active"}
                style={{cursor: 'pointer'}}
              >
                <FontAwesomeIcon icon={faBox} /> {category.nama}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
