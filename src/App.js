import "./App.css";
import Trips from "./components/Trips";

function App() {

  return (
    <div className="App">
      <h2 style={{color:'red', fontSize:'20px', margin:'10px', padding:'5px', fontWeight:'bolder'}}>Make Your Trip</h2>
      <Trips/>
    </div>
  );
}

export default App;