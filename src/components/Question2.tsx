import { ChildModalProps } from '../interfaces/modal-prop';
import '../styles/Modal.css';

const Question2 = (props: ChildModalProps) => {
  const {modal, onCloseButtonClick} = props

  if (!modal) return null
  return (
    <div className="">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005;
        </span>
        <h1>Type 2</h1>
        <hr/>
        <h1>{modal.title}</h1>
        <p>{modal.description}</p>
      </div>
    </div>
  )
}

export default Question2