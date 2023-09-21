import logo from './logo.svg';
import './App.css';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounter2';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFout';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetching from './components/useEffect/DataFetching';

function App() {
  return (
    <div className='App'>
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <HookMouse />
      <MouseContainer />
      <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
