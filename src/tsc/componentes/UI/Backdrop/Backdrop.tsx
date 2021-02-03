/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface BackdropPros {
  show: boolean;
  click: () => void;
}

const backdrop = (props: BackdropPros) =>
  props.show ? <div className="Backdrop" onClick={props.click}></div> : null;

export default backdrop;
