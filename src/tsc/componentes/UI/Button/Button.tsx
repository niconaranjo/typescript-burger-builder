import React from 'react';

interface ButtonProps {
  clicked: () => void;
  children: React.ReactElement | React.ReactElement[] | string;
  btnType: 'Success' | 'Danger';
}

const button = (props: ButtonProps) => (
  <button
    className={['Button', props.btnType].join(' ')}
    type="button"
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
