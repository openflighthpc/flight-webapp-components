import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function StandardModal({
  buttons,
  children,
  closeButtonText='Close',
  isOpen,
  size,
  title,
  toggle,
  ...rest
}) {
  return (
    <Modal
      isOpen={isOpen}
      size={size}
      toggle={toggle}
      centered={true}
      {...rest}
    >
      <ModalBody>
        {title}
        {children}
        {buttons}
        <Button
          color="link"
          onClick={toggle}
        >
          {closeButtonText}
        </Button>
      </ModalBody>
    </Modal>
  );
}

export default StandardModal;
