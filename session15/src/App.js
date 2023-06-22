import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import storage from './config/firebaseConfig';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';

function App() {
  const [file, setFile] = useState();
  const [percent, setPercent] = useState(0);
  const [urlUpload, setUrlUpload] = useState();
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

  const handleUpload = async () => {
    console.log(file);
    if (!file) {
      alert('Please choose a file first!');
      return;
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const response = await uploadBytes(storageRef, file);
    const urlImage = await getDownloadURL(response.ref);
    console.log(urlImage);
  }

  return (
    <div className="App">
      <div>
        <input type='file' defaultValue={file} onChange={e => setFile(e.target.files[0])} name='fileUpload' />
        <button onClick={handleUpload}>Upload</button>
        <p>{percent} % done</p>
        <img src={urlUpload} alt='Image uploaded' />
      </div>
      <Product />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
