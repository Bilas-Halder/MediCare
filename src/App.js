import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebase_config';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import SingleService from './components/SingleService/SingleService';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header > </Header>
        <Switch>
          <Route path={["/", "/home"]} exact >
            <Home></Home>
          </Route>

          <PrivateRoute path="/service/:id" >
            <SingleService></SingleService>
          </PrivateRoute>

          <PrivateRoute path="/doctors" exact >
            <Doctors></Doctors>
          </PrivateRoute>

          <Route path="/aboutus" exact >
            <AboutUs></AboutUs>
          </Route>

          <Route path="/login" exact >
            <LogIn></LogIn>
          </Route>

          <Route path="/signup" exact >
            <SignUp></SignUp>
          </Route>

          <Route path="/*" exact >
            <NotFound></NotFound>
          </Route>


        </Switch>

        <Footer></Footer>
      </Router>

    </AuthProvider>
  );
}

export default App;
