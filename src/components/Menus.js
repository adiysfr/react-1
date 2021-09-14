import React from "react";
import { Col, Card } from "react-bootstrap";
import { formatThousand }  from '../utils/helper'

const Menus = ({ menu }) => {
  return (
      <Col md={4} xs={6} className="mb-4">
        <Card className="shadow">
          <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar}  />
          <Card.Body>
            <Card.Title>{menu.nama}</Card.Title>
            <Card.Text>
              Rp.{formatThousand(menu.harga)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default Menus;
