import './App.css';
import { Provider } from 'react-redux'
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import NavBar from "./components/Util/NavBar";


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
