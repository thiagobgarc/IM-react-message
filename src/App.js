import logo from './logo.svg';
import './App.css';
import { auth } from "./firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from "./Components/NavBar"
import ChatBox from "./Components/ChatBox"
import Welcome from "./Components/Welcome"


function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <NavBar/>
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
