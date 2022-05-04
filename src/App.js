
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AddItems from './pages/AddItems/AddItems';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUP from './pages/Login/SignUp/SignUP';
import ManageItems from './pages/ManageItems/ManageItems';
import MyItems from './pages/MyItems/MyItems';
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
