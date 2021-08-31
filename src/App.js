// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetingComponent from './components/UserGreetingComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
// Importing modules.css file
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">

      {/* Refs with class copmonents */}
      <FocusInput />
      
      {/* Refs */}
      {/* <RefsDemo /> */}

      {/* Pure Component */}
      {/* <ParentComp /> */}

      {/* Fragments 1st Example*/}
      {/* <FragmentDemo /> */}

      {/* Fragments 2nd Example */}
      {/* <Table /> */}

      {/* Component Mounting Lifecycle methods */}
      {/* <LifeCycleA /> */}

      {/* Form Handling */}
      {/* <Form /> */}

      {/* Regular Styling */}
      {/* <h1 className='error'>Error </h1> */}

      {/* CSS Modules Styling */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* Inline Styling */}
      {/* <Inline /> */}

      {/* Styling and CSS basics */}
      {/* Styling with props */}
      {/* <Stylesheet primary={true} /> */}

      {/* List Rendering */}
      {/* <NameList /> */}

      {/* Conditional Rendering 4 approaches */}
      {/* <UserGreetingComponent /> */}

      {/* Methods used as props  */}
      {/* <ParentComponent /> */}

      {/* Binding Event Handler */}
      {/* <EventBind /> */}

      {/* Event Handling with class components */}
      {/* <ClassClick /> */}

      {/* Event Handling with functional component */}
      {/* <FunctionClick /> */}

      {/* setState Concept */}
      {/* <Counter /> */}

      {/* State Concpet */}
      {/* <Message /> */}

      {/* Functional component with props */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props.</p>
      </Greet>

      <Greet name="Harry" heroName="Superman">
        <button>Action</button>
      </Greet>

      <Greet name="David" heroName="Spiderman" /> */}


      {/* Class Components with props */}
      {/* <Welcome name="Lana" heroName="Batman" />
      <Welcome name="Emma" heroName="Batman" />
      <Welcome name="Melisa" heroName="Batman" />

      <Hello /> */}
    </div>
  );
}

export default App;
