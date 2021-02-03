import React from 'react';

import { AuxProps } from '../../../utils/types-and-interfaces';
import Backdrop from '../Backdrop/Backdrop';

interface ModalInterface extends AuxProps {
  show: boolean;
  modalClosed: () => void;
}

const modal = (props: ModalInterface): JSX.Element => {
  const modalStyle = {
    opacity: props.show ? '1' : '0',
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
  };

  return (
    <>
      <Backdrop show={props.show} click={props.modalClosed} />
      <div className="Modal" style={modalStyle}>
        {props.children}
      </div>
    </>
  );
};

export default modal;
