import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = (event) => {
    console.log("I am clicked")
    console.log(event)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleClick}>Hello</div>
        <form>

          <input type="text" name="Textfield" />
        </form>

      </header>
    </div>
  );
}

export default App;
