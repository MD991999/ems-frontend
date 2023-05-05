import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Edit from './Pages/Edit/Edit';
import Pagenotfound from './Pages/Pnfound/Pagenotfound';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

function App() {
  return (
    <>
    {/* <Header/> */}
    <Main/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='*' element={<Pagenotfound/>}/>

      </Routes> 
      {/* <Footer/> */}
    </>
  );
}

export default App;
