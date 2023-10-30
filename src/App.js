import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import NotFound from './Screens/NotFound';
import Movies from './Screens/Movies'
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login'
import Register from './Screens/Register';
import Proflie from './Screens/Dashboard/Proflie';
import Password from './Screens/Dashboard/Password';
import FavoritesMovies from './Screens/Dashboard/FavoritesMovies';
import MovieList from './Components/MovieList';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import Users from './Screens/Dashboard/Admin/Users';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import ScrollOnTop from './ScrollOnTop';

function App() {
  return (
    <ScrollOnTop>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movie/:id' element={<SingleMovie/>}/>
      <Route path='/watch/:id' element={<WatchPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/proflie' element={<Proflie/>}/>
      <Route path='/password' element={<Password/>}/>
      <Route path='/favorite' element={<FavoritesMovies/>}/>
      <Route path='/movieslist' element={<MovieList/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/addmovie' element={<AddMovie/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>    
    </ScrollOnTop>
  );
}

export default App;
