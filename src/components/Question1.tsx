import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/reducers';
import { ChildModalProps } from '../interfaces/modal-prop';
import { hideModal, hideTopModal, setBackgroundPage, showModal, showTopModal } from '../store/actions';
import '../styles/Modal.css';

interface Question1Props extends ChildModalProps, HomeProps {}

const Question1 = (props: Question1Props) => {
  const { type, dispatchShowTopModal, dispatchHideTopModal } = props
  const {modal, onCloseButtonClick} = props

  const showDoubleModal = () => {
    dispatchShowTopModal({
      title: 'A title 2.',
      description: 'And a description too.',
      onButtonClick: (event: React.MouseEvent) => {
        dispatchHideTopModal()
      },
      type: type,
      topType: 10
    });
  }

  if (!modal) return null
  return (
    <div className="">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005;
        </span>
        <h1>Type 1</h1>
        <hr/>
        <h1>{modal.title}</h1>
        <p>{modal.description}</p>
        <input type="text" />
        <button type="button" onClick={modal.onButtonClick}>
          Do something
        </button>
        <button type="button" onClick={showDoubleModal}>
          Double modal
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  type: state.modal.type
})

const mapDispatchToProps = {
  dispatchShowModal: showModal,
  dispatchShowTopModal: showTopModal,
  dispatchSetBackgroundPage: setBackgroundPage,
  dispatchHideModal: hideModal,
  dispatchHideTopModal: hideTopModal
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type HomeProps = {} & ConnectedProps<typeof connector>;

export default connector(Question1)



