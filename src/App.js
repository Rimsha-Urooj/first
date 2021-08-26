import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* Binding Event Handler */}
      <EventBind />

      {/* Event Handling with class components */}
      <ClassClick />

      {/* Event Handling with functional component */}
      <FunctionClick />

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
