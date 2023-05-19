import { ButtonComponent } from './ButtonComponent';
import { Card } from './Card';
import { Course } from './Course';
import { Calculator } from './Calculator';
import { Clock } from './Clock';

function App() {
  function appHandleClick(evt, data) {
    alert("App Clicked! " + data);
  }

  let btn = <ButtonComponent value="New Button" handleClick={appHandleClick} />;
  return (
    <div className="App">
      <Clock />
      <Calculator numA="15" numB="8" />
      <Course />
      <input type='text' defaultValue='Abc' />
      {btn}
      <Card textContent="New Content" />
    </div>
  );
}

export default App;
