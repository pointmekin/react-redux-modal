import React, { useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect, ConnectedProps } from 'react-redux';
import { nextModal, setBackgroundPage, showModal } from '../store/actions';
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Modal from './Modal';

function Home(props: HomeProps) {
  const { dispatchShowModal, dispatchNextModal, dispatchSetBackgroundPage } = props
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    dispatchShowModal({
      title: 'A title.',
      description: 'And a description too.',
      onButtonClick: (event: React.MouseEvent) => {
        dispatchNextModal()
      },
      type: 0
    });
  }, [dispatchShowModal, dispatchNextModal])

  const onLaunchModal = () => {
    console.log(location)
    dispatchSetBackgroundPage(location)
    dispatchShowModal({
      title: 'A title.',
      description: 'And a description too.',
      onButtonClick: (event: React.MouseEvent) => {
        dispatchNextModal()
      },
      type: 0
    });
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{zIndex: 0}}/>
          {/* <Link
            to={{
              pathname:"/question",
              state: { background: {pathname: "/", search: "", hash: "", state: undefined} }
            }}
          >
            <button
              onClick={onLaunchModal}
            >
              Show Modal
            </button>
          </Link> */}
          <button
              onClick={() => {

                onLaunchModal()
                navigate("/question", {state: { background: {pathname: "/", search: "", hash: "", state: undefined} }})
              }}
            >
              Show Modal
            </button>
            <Routes>
              <Route path="/question" element={<Modal />} />

            </Routes>
        </header>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  dispatchShowModal: showModal,
  dispatchNextModal: nextModal,
  dispatchSetBackgroundPage: setBackgroundPage
};

const connector = connect(undefined, mapDispatchToProps);

type HomeProps = {} & ConnectedProps<typeof connector>;

export default connector(Home);
