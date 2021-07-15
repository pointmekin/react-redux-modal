import React, { useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Modal from '../components/Modal';
import { connect, ConnectedProps } from 'react-redux';
import { nextModal, showModal } from '../store/actions';

const mapDispatchToProps = {
  dispatchShowModal: showModal,
  dispatchNextModal: nextModal
};

const connector = connect(undefined, mapDispatchToProps);

type HomeProps = {} & ConnectedProps<typeof connector>;


function Home(props: HomeProps) {
  const { dispatchShowModal, dispatchNextModal } = props

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


  return (
    <>
      <Modal />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button
            onClick={() => {
              dispatchShowModal({
                title: 'A title.',
                description: 'And a description too.',
                onButtonClick: (event: React.MouseEvent) => {
                  dispatchNextModal()
                },
                type: 0
              });
            }}
          >
            Show Modal
          </button>
        </header>
      </div>
    </>
  );
}

export default connector(Home);
