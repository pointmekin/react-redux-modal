import '../styles/Modal.css';

// @ts-ignore
const Question1 = (props) => {
  // @ts-ignore
  const {modal, onCloseButtonClick} = props

  return (
    <div className="modal-overlay fade-in">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005;
        </span>
        <h1>Type 1</h1>
        <hr/>
        <h1>{modal.title}</h1>
        <p>{modal.description}</p>
        <button type="button" onClick={modal.onButtonClick}>
          Do something
        </button>
      </div>
    </div>
  )
}

export default Question1