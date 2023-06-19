import logo from './logo.svg';
import './App.css';
import Product from './components/product';

function App() {
  const generatorFunc = function* () {
    console.log("Start");
    yield "Giá trị 1";
    console.log("Continue");
    yield "Giá trị 2";
    console.log("Continue");
    yield "Giá trị 3";
    console.log("Continue");
    yield "Giá trị 4";
    console.log("Ending...");
    return "Giá trị 5";
  }

  const handleClick = () => {
    let iterator = generatorFunc();
    let result = iterator.next();
    
    while (!result.done) {
      console.log(result.value);
      result = iterator.next();
    }
    console.log(result.value);
  }


  return (
    <div className="App">
      <Product />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
