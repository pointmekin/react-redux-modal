// import { Location } from 'history'
import { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Prompt, useBlocker, useLocation, useNavigate } from 'react-router-dom'
import { hideModal, nextModal } from '../store/actions';
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
  
  const cancelNavigation = () => {
    setModalVisible(false);
  };
  
  const handleConfirmNavigationClick = () => {
    dispatchHideModal()
    setModalVisible(false);
    setTimeout(() => {
      setConfirmedNavigation(true);
    }, 100);
    navigate("/")
  };
  
  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      // Navigate to the previous blocked location with your navigate function
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation, navigate]);
  const location  = useLocation()

  const handleBlockedNavigation = useCallback(
    nextLocation => {
      if (
        !confirmedNavigation &&
        nextLocation.location.pathname !== location.pathname
      ) {
        setModalVisible(true);
        setLastLocation(nextLocation.location);
        return false;
      }
      return true;
    },
    [confirmedNavigation, location.pathname]
  );

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation, navigate]);

  useBlocker(handleBlockedNavigation, when);

  return (
    <>
      {modalVisible && <CloseModalAlert open={modalVisible} onCancel={cancelNavigation} onConfirm={handleConfirmNavigationClick}/>}
    </>
  );
};

const mapDispatchToProps = {
  dispatchHideModal: hideModal,
};

const connector = connect(undefined, mapDispatchToProps);

export default connector(RouteLeavingGuard)
