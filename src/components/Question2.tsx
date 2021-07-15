import '../styles/Modal.css';

// @ts-ignore
const Question2 = (props) => {
  // @ts-ignore
  const {modal, onCloseButtonClick} = props

  return (
    <div className="modal-overlay">
      <div className="modal fade-in">
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