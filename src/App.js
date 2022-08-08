import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import { Routes, Route, Navigate,  HashRouter} from "react-router-dom";


function App() {
  return (
    <div className='App'>
        <div className='wrapper'>
                <div className='container'>
                  <HashRouter basename="/">
                    <Routes>
                        <Route exact path="" element= {<Navigate to="/sign-in"/>} />
                        <Route path='/sign-in' element={<SignIn />}/>
                        <Route path='/sign-up' element={<SignUp />}/>
                        <Route path='/home' element={<Welcome />}/>
                    </Routes>
                  </HashRouter>
                    

                </div>
            </div>

    </div>
  );
}

export default App;
