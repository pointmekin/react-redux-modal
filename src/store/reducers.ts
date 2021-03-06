import { combineReducers } from '@reduxjs/toolkit';
import ModalProperties from '../interfaces/modal-prop';
import { ModalAction, ModalActionTypes } from './actions';

type ModalState = {
  modal: ModalProperties | null | undefined;
  topModal: ModalProperties | null | undefined;
  type: number
  topType: number
  backgroundPage: any
};

const initialState: ModalState = {
  modal: null,
  topModal: null,
  type: 0,
  topType: 0,
  backgroundPage: {pathname: "/", search: "", hash: "", state: undefined}
};

function modalReducer(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        modal: action.payload
      };
    case ModalActionTypes.ShowTopModal:
      console.log('called')
      return {
        ...state,
        topModal: action.payload,
        topType: 10
      };
    case ModalActionTypes.HideModal:
      return {
        ...state,
        modal: null,
        type: 0
      };
    case ModalActionTypes.HideTopModal:
      return {
        ...state,
        topModal: null,
      };
    case ModalActionTypes.NextModal:
      return {
        ...state,
        type: state.type + 1
      };
    case ModalActionTypes.SetBackgroundPage: 
      return {
        ...state,
        backgroundPage: action.payload
      }

    default:
      return state;
  }
}

const rootReducer = combineReducers({ modal: modalReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
