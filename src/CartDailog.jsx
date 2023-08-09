import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function MyVerticallyCenteredModal(props) {
  const [totalPrice, settotalPrice] = useState();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name of the Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {props.cartdetails.map((prod, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{prod.product.name}</td>
                <td>{prod.product.price}</td>
                <td>{prod.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>
          Your grand total is :
          {props.cartdetails &&
            props.cartdetails.length > 0 &&
            props.cartdetails.reduce(
              (total, prod) => total + prod.product.price * prod.quantity,
              0
            )}
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button>CheckOut</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CartDailog(props) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={props.show}
        onHide={props.onClose}
        cartdetails={props.cartDetials}
      />
    </>
  );
}

export default CartDailog;
