import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProfileState } from "./ProfileContext";

const ProfileModal = ({ modalRef, onClose, user }) => {
  const { myProfile, setmyProfile, getMyProfile } = ProfileState();
  return (
    <div
      ref={modalRef}
      className="modal show  profile-modal"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-details">
            <p>{myProfile.data.firstName}</p>
            <p>{myProfile.data.lastName}</p>
          </div>
          <div>
            <p>Last updated at: </p>
            <p>{myProfile.data.updatedAt}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ProfileModal;
