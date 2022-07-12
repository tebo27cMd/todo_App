
import './App.css';


import {signInWithGoogle} from "./config/firebase"



function App() {
  return (
    <div>
    <button onClick={signInWithGoogle}>Sign in With Google</button>
  </div>

  
  );
}

export default App;
