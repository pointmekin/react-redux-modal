import ModalProperties from "../interfaces/modal-prop";

export enum ModalActionTypes {
  ShowModal,
  HideModal,
  NextModal
}

export interface ModalAction {
  type: ModalActionTypes;
  payload?: ModalProperties;
}

export function showModal(payload: ModalProperties): ModalAction {
  return {
    type: ModalActionTypes.ShowModal,
    payload
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HideModal,
  };
}

export function nextModal(): ModalAction {
  return {
    type: ModalActionTypes.NextModal,
  };
}