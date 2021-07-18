import React from 'react'
import '../styles/alert.css'

type Props = {
  open: boolean,
  onConfirm: () => void
  onCancel: () => void
}

const CloseModalAlert = (props: Props) => {

  const { open, onConfirm, onCancel } = props

  if (!open) return null
  return(
    <div className="alert-p-overlay" style={{zIndex:30}}>
      <div
        className="alert alert-p alert-dismissible fade show"
        role="alert"
      >
        <div className="alert-p__header">
          <p className="alert-p__title">{"title"}</p>
          <button
            type="button"
            className="alert-p__close close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={onCancel}
          >
            <span aria-hidden="true" className="alert-p__close__icon">
              &times;
            </span>
          </button>
        </div>
        <div className="alert-p__body">
          <p className="alert-p__sub-title">{"subtitle"}</p>
          <div className="d-flex justify-content-around">
            <button
              type="button"
              className="btn btn-p btn-p--mini btn-p--fixed-width btn-p--light"
              onClick={onCancel}
            >
              {"back to questionaire"}
            </button>
            <button
              type="button"
              className="btn btn-p btn-p--mini btn-p--fixed-width"
              data-dismiss="modal"
              onClick={onConfirm}
            >
              {"close questionaire"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloseModalAlert