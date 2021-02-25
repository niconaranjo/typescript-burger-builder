import React from 'react';

import Modal from '../../componentes/UI/Modal/Modal';

function withErrorHandlerHOC<T>(
  WrappedComponent: typeof React.Component,
  firebaseContext: any
): any {
  return class Component extends React.Component<{}, {}> {
    render() {
      return (
        <>
          <Modal show={false} modalClosed={() => console.log('hello')}>
            <p>Something didn't work!</p>
          </Modal>
          <WrappedComponent {...(this.props as T)} />
        </>
      );
    }
  };
}

export default withErrorHandlerHOC;
