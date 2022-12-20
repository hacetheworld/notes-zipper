import './App.css';
import Header from './components/header/header';
import Footer from './components/foooter/footer';
import LandingPage from './screens/landingPage/landingPage';
function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
