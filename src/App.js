import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{textAlign:'center', display:'flex' , flexDirection:'column', color:'black'}}> 
      <h1>App Page in here</h1>

      <Link to="/about">Go to About Page</Link>
      <Link to="/gallery">Go to Gallery Page</Link>
      
    </div>
  );
}

export default App;
