import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom"
import Home from './components/Home';
import Modal from './components/Modal';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './store/reducers';
import TopModal from './components/TopModal';

const mapStateToProps = (state: RootState) => ({
  backgroundPage: state.modal.backgroundPage
});

const connector = connect(mapStateToProps);

type AppProps = {} & ConnectedProps<typeof connector>;

function App(props: AppProps) {
  const { backgroundPage } = props
  const defaultLocation = {pathname: "/", search: "", hash: "", state: undefined}
  return (
    <>
      <Routes basename="/">
        <Route path="/*" children={<Home/>} />
        <Route path="/question" children={<Modal />} />
      </Routes>
      <TopModal/>
    </>
  );
}

export default connector(App);
