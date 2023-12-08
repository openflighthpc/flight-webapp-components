import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';

function ConfirmedActionButton({
  act,
  acting,
  actingButtonText,
  buttonText,
  cancelButtonText="Cancel",
  className,
  confirmationHeaderText,
  confirmationText,
  icon,
  id,
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Button
        className={`${acting ? 'disabled' : null} ${className}`}
        disabled={acting}
        id={id}
        onClick={toggle}
      >
        { acting ? <i className="fa fa-spinner fa-spin mr-1"/> :
          icon ? <i className={`fa ${icon} mr-1`}/> : null }
        <span>{ acting ? actingButtonText : buttonText }</span>
      </Button>
      <Modal
        className="card-text"
        isOpen={modal}
        toggle={toggle}
        centered={true}
      >
        <ModalBody>
          <h3 className="mb-4">
            {confirmationHeaderText}
          </h3>
          {confirmationText}
          <div className="d-flex mt-4 justify-content-center">
            <a
              className="button link mr-3"
              onClick={() => { toggle(); act(); }}
            >
              { icon ? <i className={`fa ${icon} mr-1`}/> : null }
              <span>{buttonText}</span>
            </a>
            <a
              className="cancel-button button link blue-text mr-3"
              onClick={toggle}>
              {cancelButtonText}
            </a>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default ConfirmedActionButton;
