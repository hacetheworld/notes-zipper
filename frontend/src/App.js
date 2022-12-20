import './App.css';
import Header from './components/header/header';
import Footer from './components/foooter/footer';
import LandingPage from './screens/landingPage/landingPage';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import MyNotes from './screens/MyNotes/MyNotes';
function App() {
  return (
    <>
      <Header/>
      <main>
      <Switch>
      <Route exact  path='/mynotes' component={MyNotes} />
      <Route exact path='/' component={LandingPage} />
        </Switch>
        </main>
      <Footer/>
    </>
  );
}

export default App;
