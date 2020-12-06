import React from 'react';

import { AuxProps } from '../../../utils/types-and-interfaces';

const modal = (props: AuxProps): JSX.Element => (
  <div className="Modal">{props.children}</div>
);

export default modal;
