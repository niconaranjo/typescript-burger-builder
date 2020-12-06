import React from 'react';

interface BuildControlProps {
  label: string;
  addIngredient: () => void;
  removeIngredient: () => void;
  disabled: boolean;
}

const buildControl = (props: BuildControlProps) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button
      type="button"
      className="Less"
      onClick={props.removeIngredient}
      disabled={props.disabled}
    >
      Less
    </button>
    <button type="button" className="More" onClick={props.addIngredient}>
      More
    </button>
  </div>
);

export default buildControl;
