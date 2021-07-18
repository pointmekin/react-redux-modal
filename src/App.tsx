import './App.css';
import {
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home';
import Modal from './components/Modal';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './store/reducers';

const mapStateToProps = (state: RootState) => ({
  backgroundPage: state.modal.backgroundPage
});

const connector = connect(mapStateToProps);

type AppProps = {} & ConnectedProps<typeof connector>;

function App(props: AppProps) {
  const { backgroundPage } = props
  console.log( 'background page is ', backgroundPage)
  const defaultLocation = {pathname: "/", search: "", hash: "", state: undefined}
  return (
    <>
    {<Route path="/question" children={<Modal />} />}
    <Switch location={backgroundPage ?? defaultLocation}>
      <Route path="/" exact component={Home} />
    </Switch>
    </>
  );
}

export default connector(App);
