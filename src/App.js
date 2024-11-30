import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Lifecycle from './Components/Lifecycle';
//import { useState } from 'react';

//import Fetchdata from './Components/Fetchdata';
import Classkey from './Components/Classkey';
import Functiondata from './Components/Functiondata';


function App() {
  //const [show, setShow] = useState(true)

  return (
    <div className="App">
      <h2>Learn React LifeCycle</h2>
      {/* <h2>Learn Lifecycle of react</h2>
      <button className='btn btn-primary mt-2 mb-2' onClick={() => setShow(!show)}>Unmounted comp</button>
      {
        show ? <Lifecycle /> : <div>Unmount Comp</div>
      } */}
      {/* <Fetchdata /> */}
      <Classkey />
      <Functiondata />
    </div>
  );
}

export default App;
