"use client";
import { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <div className="text-center display-5">Bootstrap</div>
      <Button variant="primary" onClick={handleShow}>
        Click Me
      </Button>
      <Button variant="secondary" onClick={handleShow}>
        Click Me
      </Button>
      <ModalComponent show={show} handleClose={handleClose} />
    </div>
  );
}

const ModalComponent: FC<{ show: boolean; handleClose: () => void }> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};
