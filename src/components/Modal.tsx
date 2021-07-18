import { useEffect, useLayoutEffect, useState } from 'react';
import '../styles/Modal.css';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../store/actions';
import { RootState } from '../store/reducers';
import Question1 from './Question1';
import Question2 from './Question2'; 
import { useHistory } from 'react-router';
import { useDelayUnmount } from '../hooks/useDelayUnmount';
import { Prompt } from 'react-router'
import RouteLeavingGuard from './RouteLeavingGuard';

function Modal(props: ModalProps) {
  const { dispatchHideModal, modal, type, backgroundPage } = props;
  const [isMounted, setIsMounted] = useState(false);
  const history = useHistory()
  const shouldRenderChild = useDelayUnmount(isMounted, 100);
  const mountedStyle = { animation: "inAnimation 100ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 100ms ease-in" };
  const [modalType, setModalType] = useState(type)
  const [isDirty, setIsDirty] = useState(false)
  const [ locationKeys, setLocationKeys ] = useState([])

  
  useEffect(() => {
    console.log('rerenderred')
  })
  
  // mimic bootstrap's modal animation
  useLayoutEffect(() => {
    setIsMounted(false)
    setTimeout(() => {
      setModalType(type)
      setIsMounted(true)
    }, 100)
  }, [type])

  // handles the global modal close action
  const onCloseButtonClick = () => {
    history.push('/')  
    console.log(backgroundPage)
    // dispatchHideModal();
    setIsMounted(false)
  };

  // switch which modal to display based on state
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
      
      {<div >
        <div>{ locationKeys.toString() }</div>
        <div className="modal-overlay">
          {modal && shouldRenderChild&&<div style={isMounted ? mountedStyle : unmountedStyle} >
            {modalSelector(modalType)} 
          </div>  }
        </div>
      </div>}

      <RouteLeavingGuard
        
        // When should shouldBlockNavigation be invoked, 
        // simply passing a boolean 
        // (same as "when" prop of Prompt of React-Router)
        when={true}
        // Navigate function
        navigate={path => history.push(path)}
        // Use as "message" prop of Prompt of React-Router
        shouldBlockNavigation={location => {
          // This case it blocks the navigation when: 
          // 1. the login form is dirty, and 
          // 2. the user is going to 'sign-up' scene.
          //    (Just an example, in real case you might 
          //     need to block all location regarding this case)
          if (true) {
            console.log(location.pathname, '=======')
            if (location.pathname === '/') {
              return true
            }
          } 
          return false
        }}
      /> 

    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  modal: state.modal.modal,
  type: state.modal.type,
  backgroundPage: state.modal.backgroundPage
});

const mapDispatchToProps = {
  dispatchHideModal: hideModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ModalProps = {} & ConnectedProps<typeof connector>;

export default connector(Modal);