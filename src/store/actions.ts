import ModalProperties from "../interfaces/modal-prop";

export enum ModalActionTypes {
  ShowModal,
  ShowTopModal,
  HideModal,
  HideTopModal,
  NextModal,
  SetBackgroundPage
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

export function showTopModal(payload: ModalProperties): ModalAction {
  return {
    type: ModalActionTypes.ShowTopModal,
    payload
  };
}

export function hideModal(): ModalAction {
  return {
    type: ModalActionTypes.HideModal,
  };
}

export function hideTopModal(): ModalAction {
  return {
    type: ModalActionTypes.HideTopModal,
  };
}


export function nextModal(): ModalAction {
  return {
    type: ModalActionTypes.NextModal,
  };
}

export function setBackgroundPage(payload: any): ModalAction {
  return {
    type: ModalActionTypes.SetBackgroundPage,
    payload
  };
}
