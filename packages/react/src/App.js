// import logo from './logo.svg';
import {
  buttonStyles,
  primaryButtonStyles,
  blankButtonStyles,
  handleKeyboardNav,
} from '@principled/theme';
import './App.css';

handleKeyboardNav();

function App() {
  return (
    <div className="App">
      <ul style={{listStyle: 'none'}}>
        <li>
          <button className={primaryButtonStyles} onClick={() => null}>A Primary Button</button>
        </li>
        <li>
          <button className={buttonStyles} onClick={() => null}>A Generic Button</button>
        </li>
        <li>
          <button className={blankButtonStyles} onClick={() => null}>A Blank Button</button>
        </li>
      </ul>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
