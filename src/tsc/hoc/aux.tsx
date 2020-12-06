import React from 'react';

interface AuxProps {
  children: React.ReactElement | React.ReactElement[];
}

const Aux = (props: AuxProps): JSX.Element =>
  props.children as React.ReactElement;

export default Aux;
