import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import toast, { Toaster } from "react-hot-toast";
import axios from "./axios";
import { ProfileState } from "./ProfileContext";
import AddressFilled from "./AddressFilled";

function MyVerticallyCenteredModal(props) {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [state, setstate] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [pinCode, setpinCode] = useState("");

  const [addressState, setAddressState] = useState(false);

  const { createAddress, getAddress } = ProfileState();

  const address = {
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    state: state,
    country: country,
    city: city,
    pincode: pinCode,
  };

  const token = localStorage.getItem("accessToken");
  const addressId = localStorage.getItem("addressToken");

  const [addressResponse, setaddressResponse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (addressId != null || addressId != "") {
        try {
          const response = await getAddress();
          setaddressResponse(response);
          setAddressState(true);
        } catch (err) {
          toast.error("There is no address with us, please fill..");
          console.log(err);
        }
      } else {
        setAddressState(false);
      }
    };

    fetchData();
  }, [addressId]);

  const handleCreateAddress = async (e) => {
    e.preventDefault();
    try {
      createAddress(address);
      toast.success("address created");
      setAddressState(true);
    } catch (err) {
      console.log(err);
      setAddressState(false);
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Address1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={
                    addressState
                      ? addressResponse.data.addressLine1
                      : "Your address line1"
                  }
                  value={addressLine1}
                  disabled={addressState}
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Address2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={
                    addressState
                      ? addressResponse.data.addressLine2
                      : "Your address line2"
                  }
                  value={addressLine2}
                  disabled={addressState}
                  onChange={(e) => setAddressLine2(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder={
                  addressState ? addressResponse.data.city : "Your city.."
                }
                value={city}
                disabled={addressState}
                onChange={(e) => setcity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridstate">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder={
                  addressState ? addressResponse.data.state : "Your state.."
                }
                value={state}
                disabled={addressState}
                onChange={(e) => setstate(e.target.value)}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPin">
                <Form.Label>PinCode</Form.Label>
                <Form.Control
                  placeholder={
                    addressState ? addressResponse.data.pincode : "Your pin.."
                  }
                  value={pinCode}
                  disabled={addressState}
                  onChange={(e) => setpinCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  placeholder={
                    addressState ? addressResponse.data.country : "Your country"
                  }
                  value={country}
                  disabled={addressState}
                  onChange={(e) => setcountry(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              onClick={handleCreateAddress}
              disabled={addressState}
            >
              Submit
            </Button>
          </Form>
          <Toaster position="top-center" reverseOrder={false} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function AddressModal(props) {
  return (
    <>
      <MyVerticallyCenteredModal show={props.show} onHide={props.onClose} />
    </>
  );
}

export default AddressModal;
