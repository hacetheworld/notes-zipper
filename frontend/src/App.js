import './App.css';
import Header from './components/header/header';
import Footer from './components/foooter/footer';
import LandingPage from './screens/landingPage/landingPage';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import MyNotes from './screens/MyNotes/MyNotes';
import Loginpage from './screens/loginpage/Loginpage';
import RegisterPage from './screens/registerpage/registerPage';
import CreateNote from './singleNote/CreateNote';
import SingleNote from './singleNote/singleNote';
function App() {
  return (
    <>
      <Header/>
      <main>
      <Switch>
      <Route exact  path='/mynotes' component={MyNotes} />
      <Route exact  path='/login' component={Loginpage} />
      <Route exact  path='/register' component={RegisterPage} />
      <Route exact  path='/createnote' component={CreateNote} />
      <Route exact  path='/note/:id' component={SingleNote} />
      <Route exact path='/' component={LandingPage} />
        </Switch>
        </main>
      <Footer/>
    </>
  );
}

export default App;
