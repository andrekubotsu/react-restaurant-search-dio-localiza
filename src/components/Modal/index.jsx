import React, { useEffect } from 'react';

import Portal from './Portal';
import { Overlay, Dialog } from './styles';

const Modal = ({ children, isOpen, onClose }) => {
  // component did mount
  useEffect(() => {
    function onEsc(event) {
      if (event.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    // component will unmount
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  function onOverlayClick() {
    onClose();
  }

  // this function stops any onClick propagation
  function onDialogClick(event) {
    event.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
