import React from 'react'
import { Modal, ModalBody } from 'reactstrap';

function StandardModal({
  buttons,
  children,
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
        <div className={'header'}>
          {title}
          <a
            className={'close-button text-muted'}
            onClick={toggle}
          >
            X
          </a>
        </div>
        {children}
        {buttons}
      </ModalBody>
    </Modal>
  );
}

export default StandardModal;
