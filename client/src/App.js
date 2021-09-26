import './App.sass';
import Keyboard from './components/Keyboard/Keyboard';
import Modes from './components/Modes/Modes';
import Monitor from './components/Monitor/Monitor';

function App() {
  return (
    <main className='main'>
      <div className='main-container'>
        <Monitor />
        <div className='main-container-bottom'>
          <Keyboard />
          <Modes />
        </div>
      </div>
    </main>
  );
}

export default App;
