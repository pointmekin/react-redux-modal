import { combineReducers } from '@reduxjs/toolkit';
import ModalProperties from '../interfaces/modal-prop';
import { ModalAction, ModalActionTypes } from './actions';

type ModalState = {
  modal: ModalProperties | null | undefined;
  type: number
};

const initialState: ModalState = {
  modal: null,
  type: 0
};

function modalReducer(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        modal: action.payload
      };
    case ModalActionTypes.HideModal:
      window.location.href="/"
      return {
        ...state,
        modal: null,
        type: 0
      };
    case ModalActionTypes.NextModal:
      return {
        ...state,
        type: state.type + 1
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ modal: modalReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
