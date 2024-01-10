import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';
import { Link } from "react-router-dom";


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
  type,
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <ActionButton/>
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
              className="button link white-text mr-3"
              onClick={() => {
                toggle();
                act();
              }}
            >
              {icon ? <i className={`fa ${icon} mr-1`}/> : null}
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

  function ActionButton() {
    const buttonContents = (
      <>
        {acting ? <i className="fa fa-spinner fa-spin mr-1"/> :
          icon ? <i className={`fa ${icon} mr-1`}/> : null}
        <span>{acting ? actingButtonText : buttonText}</span>
      </>
    )

    if (type === 'link') {
      return(
        <Link
          className={`${acting ? 'disabled' : null} ${className}`}
          disabled={acting}
          id={id}
          onClick={toggle}
        >
          {buttonContents}
        </Link>
      );
    } else {
      return (
        <Button
          className={`${acting ? 'disabled' : null} ${className}`}
          disabled={acting}
          id={id}
          onClick={toggle}
        >
          {buttonContents}
        </Button>
      );
    }
  }

}

export default ConfirmedActionButton;
