import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import './App.css';
import LoginSignupContainer from './components/LoginSignupContainer.jsx/LoginSignupContainer.jsx';
const App = ()=>{

  return (
    <div className='App'>
     <NavigationBar />
     <LoginSignupContainer />
    </div>
  );
}

export default App;
