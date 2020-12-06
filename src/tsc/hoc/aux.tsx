import React from 'react';

import { AuxProps } from '../utils/types-and-interfaces';

const Aux = (props: AuxProps): JSX.Element =>
  props.children as React.ReactElement;

export default Aux;
