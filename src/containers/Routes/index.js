import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Mortgage from '../Mortgage';
import Budget from '../Budget';
import Retirement from '../Retirement';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/mortgage" component={Mortgage} />
    <Route exact path="/budget" component={Budget} />
    <Route exact path="/retirement" component={Retirement} />
  </Switch>
);

export default Routes;
