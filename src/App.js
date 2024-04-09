import './App.css';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Here's our React component "counter" which is the entire counter enviroment we set up*/}
        <Counter/>
      </header>
    </div>
  );
}

export default App;

