import React, { Component } from 'react';

import { AuxProps } from '../../../utils/types-and-interfaces';
import Backdrop from '../Backdrop/Backdrop';

interface ModalInterface extends AuxProps {
  show: boolean;
  modalClosed: () => void;
}

class Modal extends Component<ModalInterface> {
  shouldComponentUpdate(nextProps: ModalInterface) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const modalStyle = {
      opacity: this.props.show ? '1' : '0',
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
    };

    return (
      <>
        <Backdrop show={this.props.show} click={this.props.modalClosed} />
        <div className="Modal" style={modalStyle}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
