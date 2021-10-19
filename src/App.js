import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Membership from './components/Membership/Membership';
import HealthCheck from './components/HealthCheck/HealthCheck';
import Footer from './components/Footer/Footer';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <BrowserRouter>

      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <Header></Header>
      </div>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/membership">
          <Membership></Membership>
        </Route>
        <Route path="/healthCheck">
          <HealthCheck></HealthCheck>
        </Route>
        <Route path="/service/:serviceId">
          <ServiceDetail></ServiceDetail>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <Footer></Footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
