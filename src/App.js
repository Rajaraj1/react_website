import logo from './logo.svg';
import './App.css';
// import {User} from './User';
import Users from './Users';
function App() {
// Component inside component

function Apple(){
  return(<div>Apple Component</div>)
}

  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <User/>
      <User/>
      <User/> */}
      <Users/>
      {Apple()}
      <Apple/>
    </div>
  );
}

function User(){
  return(
  <div>
  <h1>Hello bhai</h1>
  <h1>Hello World</h1>
  </div>
  )
}

export default App;
