import { ChildModalProps } from '../interfaces/modal-prop';
import '../styles/Modal.css';

const DoubleModal = (props: ChildModalProps) => {
  const {modal, onCloseButtonClick} = props

  if (!modal) return null
  return (
    <div className="modal-overlay">
      <div className="modal top overflow-auto ">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005;
        </span>
        <h1>Double Modal</h1>
        <hr/>
        <h1>{modal.title}</h1>
        <p>{modal.description}</p>
        <input type="text" />
        <button type="button" onClick={modal.onButtonClick}>
          Do something
        </button>
        <div style={{height:"100px", background:"red", overflow:"auto"}}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
      </div>
    </div>
  )
}

export default DoubleModal



