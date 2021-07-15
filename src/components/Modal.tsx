import React from 'react';
import '../styles/Modal.css';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../store/actions';
import { RootState } from '../store/reducers';
import Question1 from './Question1';
import Question2 from './Question2';

const mapStateToProps = (state: RootState) => ({
  modal: state.modal.modal,
  type: state.modal.type
});

const mapDispatchToProps = {
  dispatchHideModal: hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ModalProps = {} & ConnectedProps<typeof connector>;

function Modal(props: ModalProps) {
  const { dispatchHideModal, modal, type } = props;

  if (!modal) {
    return null;
  }

  const onCloseButtonClick = () => {
    dispatchHideModal();
  };

  const modalSelector = (modalType: number) => {
    switch (modalType) {
      case 0:
        return <Question1 modal={modal} onCloseButtonClick={onCloseButtonClick}/>
      case 1:
        return <Question2 modal={modal} onCloseButtonClick={onCloseButtonClick}/>
    }
  }

  return (
    <>
      {modalSelector(type)}
    </>
  )
}

export default connector(Modal);