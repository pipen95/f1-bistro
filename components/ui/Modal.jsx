import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ open, onClose, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!open) return null;

  return mounted
    ? createPortal(
        <>
          <div className="modal modal_overlay" />
          <div className="modal modal_card">
            <button
              onClick={onClose}
              className="modal modal_button btn btn--blue btn--blue-exit"
            >
              X
            </button>
            <div className="modal modal_text">{children}</div>
          </div>
        </>,
        document.getElementById('portal')
      )
    : null;
};

export default Modal;
