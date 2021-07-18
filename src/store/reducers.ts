import { combineReducers } from '@reduxjs/toolkit';
import ModalProperties from '../interfaces/modal-prop';
import { ModalAction, ModalActionTypes } from './actions';

type ModalState = {
  modal: ModalProperties | null | undefined;
  type: number
  backgroundPage: any
};

const initialState: ModalState = {
  modal: null,
  type: 0,
  backgroundPage: {pathname: "/", search: "", hash: "", state: undefined}
};

function modalReducer(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case ModalActionTypes.ShowModal:
      return {
        ...state,
        modal: action.payload
      };
    case ModalActionTypes.HideModal:
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
    case ModalActionTypes.SetBackgroundPage: 
      console.log('set background to ', action.payload)
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
