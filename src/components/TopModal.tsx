import { useLayoutEffect, useState } from 'react';
import '../styles/Modal.css';
import { connect, ConnectedProps } from 'react-redux';
import { hideTopModal } from '../store/actions';
import { RootState } from '../store/reducers';
import { useDelayUnmount } from '../hooks/useDelayUnmount';
import DoubleModal from './DoubleModal';

function TopModal(props: ModalProps) {
  const { dispatchHideTopModal } = props
  const { topModal, topType } = props;
  const [isMounted, setIsMounted] = useState(false);
  const shouldRenderChild = useDelayUnmount(isMounted, 100);
  const mountedStyle = { animation: "inAnimation 100ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 100ms ease-in" };
  const [modalType, setModalType] = useState(topType)
  
  // use for checking if the form has content
  // const [isDirty, setIsDirty] = useState(false)

  // mimic bootstrap's modal animation
  useLayoutEffect(() => {
    setIsMounted(false)
    setTimeout(() => {
      setModalType(topType)
      setIsMounted(true)
    }, 100)
  }, [topType])

  // handles the global modal close action
  const onCloseButtonClick = () => {
    // by pushing, the react router will intercept the push with a confirmation dialog
    // history.push('/')
    dispatchHideTopModal()
  };

  // switch which modal to display based on state
  const topModalSelector = (modalType: number) => {
    switch (modalType) {
      case 10:
        return <DoubleModal modal={topModal} onCloseButtonClick={onCloseButtonClick}/>
      default:
        return null
    }
  }

  return (
    <>
      {<div className="on-top">
          {topModal && shouldRenderChild&&<div style={isMounted ? mountedStyle : unmountedStyle} >
              {topModalSelector(modalType)} 

          </div>  }
      </div>}

    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  topModal: state.modal.topModal,
  topType: state.modal.topType,
  backgroundPage: state.modal.backgroundPage
});

const mapDispatchToProps = {
  dispatchHideTopModal: hideTopModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ModalProps = {} & ConnectedProps<typeof connector>;

export default connector(TopModal);