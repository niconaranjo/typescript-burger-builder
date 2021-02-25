import React from 'react';

interface SpinnerProps {
  isActive: boolean;
}

const spinner = (props: SpinnerProps) => (
  <div className="loader loader-bouncing is-active"></div>
);

export default spinner;
