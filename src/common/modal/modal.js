import { Modal as BsModal } from "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  id,
  show,
  fade,
  size,
  fullscreen,
  scrollable,
  center,
  customize,
  children,
}) => {
  const modalRef = useRef(null);

  const modal_root = `modal${fade ? " fade" : ""}${
    customize ? " customize-modal" : ""
  }`;
  const modal_dialog = `modal-dialog${size ? ` modal-${size}` : ""}${
    scrollable ? " modal-dialog-scrollable" : ""
  }${center ? " modal-dialog-centered" : ""}${
    fullscreen === true
      ? " modal-fullscreen"
      : fullscreen
      ? ` modal-fullscreen-${fullscreen}-down`
      : ""
  }`;

  const showModal = () => {
    const bsModal = new BsModal(modalRef.current, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = () => {
    const bsModal = BsModal.getInstance(modalRef.current);
    if (bsModal) {
      bsModal.hide();
    }
  };

  useEffect(() => {
    if (show) {
      showModal();
    } else {
      hideModal();
    }
  }, [show]);

  const container = document.getElementById("root");

  const content = (
    <div className={modal_root} ref={modalRef} tabIndex="-1" id={id}>
      <div className={modal_dialog}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );

  return createPortal(content, container);
};

export default Modal;
