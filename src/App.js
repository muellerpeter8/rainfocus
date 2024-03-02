import logo from './images/logo.jpg';
import './App.css';
import PageHeading from './PageHeading';
import OrgSettings from './OrgSettings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Rainfocus-logo" alt="logo" />
        <div className='App-header-text'>
            <h1>RainFocus Summit</h1>
            <p>
            December 15th<br />
            Lehi, Utah
            </p>
        </div>
        <div className='Btn-con'>
            <button className="Btn-cta1" id="Edit-event" type="button">
            Edit event
            </button>
        </div>
      </header>
      <PageHeading />
      <OrgSettings />
    </div>
  );
}

export default App;
