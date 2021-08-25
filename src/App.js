import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* setState Concept */}
      <Counter />

      {/* State Concpet */}
      <Message />

      {/* Functional component with props */}
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props.</p>
      </Greet>

      <Greet name="Harry" heroName="Superman">
        <button>Action</button>
      </Greet>

      <Greet name="David" heroName="Spiderman" />


      {/* Class Components with props */}
      <Welcome name="Lana" heroName="Batman" />
      <Welcome name="Emma" heroName="Batman" />
      <Welcome name="Melisa" heroName="Batman" />

      <Hello />
    </div>
  );
}

export default App;
