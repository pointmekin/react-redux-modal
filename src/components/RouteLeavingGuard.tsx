import { Location } from 'history'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom'
import { hideModal } from '../store/actions';
import CloseModalAlert from './CloseModalAlert';

interface Props {
  when?: boolean | undefined;
  navigate: (path: string) => void;
  shouldBlockNavigation: (location: Location) => boolean;
  dispatchHideModal: () => void
}
const RouteLeavingGuard = ({
  when,
  navigate,
  shouldBlockNavigation,
  dispatchHideModal
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lastLocation, setLastLocation] = useState<Location | null>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);
  
  const closeModal = () => {
    setModalVisible(false);
  };
  
  const handleBlockedNavigation = (nextLocation: Location): boolean => {
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      setModalVisible(true);
      setLastLocation(nextLocation);
      return false;
    }
    return true;
  };
  
  const handleConfirmNavigationClick = () => {
    dispatchHideModal()
    setModalVisible(false);
    setTimeout(() => {
      setConfirmedNavigation(true);
    }, 100);
  };
  
  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      // Navigate to the previous blocked location with your navigate function
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation, navigate]);

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      {/* <WarningDialog
          open={modalVisible}
          titleText=”Close without saving?”
          contentText=”You have unsaved changes. Are you sure you want to leave this page without saving?”
          cancelButtonText=”DISMISS”
          confirmButtonText=”CONFIRM”
          onCancel={closeModal}
          onConfirm={handleConfirmNavigationClick}
        /> */}
      {modalVisible && <CloseModalAlert open={modalVisible} onCancel={closeModal} onConfirm={handleConfirmNavigationClick}/>}
    </>
  );
};

const mapDispatchToProps = {
  dispatchHideModal: hideModal,
};

const connector = connect(undefined, mapDispatchToProps);

export default connector(RouteLeavingGuard)