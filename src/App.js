
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './pages/AddItems/AddItems';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUP from './pages/Login/SignUp/SignUP';
import ManageItems from './pages/ManageItems/ManageItems';
import MyItems from './pages/MyItems/MyItems';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
