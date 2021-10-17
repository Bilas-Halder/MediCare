import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase_config';
import AuthProvider from './Contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';


initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header > </Header>
        <Switch>
          <Route path={["/", "/home"]} exact >
            <Home></Home>
          </Route>
          <Route path="/doctors" exact >
            <Doctors></Doctors>
          </Route>
          <Route path="/aboutus" exact >
            <AboutUs></AboutUs>
          </Route>

          <Route path="/aboutus" exact >
            <AboutUs></AboutUs>
          </Route>

          <Route path="/*" exact >
            <NotFound></NotFound>
          </Route>


        </Switch>
      </Router>

    </AuthProvider>
  );
}

export default App;
