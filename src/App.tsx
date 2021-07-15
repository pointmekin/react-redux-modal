import './App.css';
import {
  Switch,
  Route
} from "react-router-dom"
import Home from './components/Home';
import Landing from './components/Landing';

function App() {
  const defaultLocation = {pathname: "/", search: "", hash: "", state: undefined}
  return (
    <>
    {<Route path="/question" children={<Home />} />}
    <Switch location={defaultLocation}>
      <Route path="/question" exact component={Home} />
      <Route path="/" exact component={Landing} />
    </Switch>
    </>
  );
}

export default App;
