import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="content-wrapper">
      <div className="header"><h1>I'm cold! Get me outta here!</h1></div>
      <div className="form-container">
          <div className="form-group">
              <label for="origin-latitude">Latutide</label>
              <input type="number" className="input-lg" id="origin-latitude"/>
              <span className="help-block">Starting latitude.</span>
          </div>
          <div className="form-group">
              <label for="origin-longitude">Longitude</label>
              <input type="number" className="input-lg" id="origin-longitude"/>
              <span className="help-block">Starting longitude.</span>
          </div>
          <div className="form-group">
              <label for="desired-temperature">Desired Temperature</label>
              <input type="number" className="input-lg" id="desired-temperature"/>
              <span className="help-block">Desired temp (&deg;F)</span>
          </div>
          <div className="button-bar">
              <button type="button" className="btn btn-primary use-current"><i className="fa fa-compass"></i> Use current location</button>
              <button type="button" id="get-destination__button" className="btn btn-primary clickme" disabled="disabled"><i className="fa fa-search"></i> Find warm place</button>
          </div>
      </div>
    </div>
  );
}

export default App;
