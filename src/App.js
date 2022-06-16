import './App.css';
import logo from './logo.svg';
import ContactListComponent from './components/container/contact-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Ejercicios sesion 1,2 y 3
        </h1> 
        <div>
          <ContactListComponent/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
